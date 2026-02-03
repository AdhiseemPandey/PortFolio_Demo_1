/*
  # Portfolio Website Database Schema

  1. New Tables
    - `view_counter`
      - `id` (uuid, primary key)
      - `visitor_ip` (text, unique) - hashed IP for privacy
      - `first_visit` (timestamp)
      - `last_visit` (timestamp)
      - `visit_count` (integer) - tracks return visits
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `message` (text, not null)
      - `created_at` (timestamp)
      - `status` (text) - pending, sent, failed
  
  2. Security
    - Enable RLS on both tables
    - view_counter: Read-only access for public, no insert/update/delete (handled by edge function)
    - contact_submissions: Insert-only for public, admin read
*/

-- Create view_counter table
CREATE TABLE IF NOT EXISTS view_counter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_ip text UNIQUE NOT NULL,
  first_visit timestamptz DEFAULT now(),
  last_visit timestamptz DEFAULT now(),
  visit_count integer DEFAULT 1
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE view_counter ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- View counter policies (public read for total count)
CREATE POLICY "Public can read view count"
  ON view_counter
  FOR SELECT
  TO public
  USING (true);

-- Contact submissions policies (public can insert)
CREATE POLICY "Public can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create function to get total unique visitors
CREATE OR REPLACE FUNCTION get_total_visitors()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COUNT(*)::integer FROM view_counter;
$$;