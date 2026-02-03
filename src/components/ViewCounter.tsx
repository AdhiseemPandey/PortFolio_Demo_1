import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const ViewCounter = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [showCount, setShowCount] = useState(false);
  const [isTracked, setIsTracked] = useState(false);

  useEffect(() => {
    const trackView = async () => {
      if (isTracked) return;

      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        await fetch(`${supabaseUrl}/functions/v1/track-view`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setIsTracked(true);
      } catch (error) {
        console.error('Failed to track view:', error);
      }
    };

    trackView();
  }, [isTracked]);

  const fetchViewCount = async () => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/track-view`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setViewCount(data.count);
      setShowCount(true);
    } catch (error) {
      console.error('Failed to fetch view count:', error);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        onClick={fetchViewCount}
        className="group relative w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center border-2 border-gray-200"
        title="View profile visits"
      >
        <Eye className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />

        {showCount && viewCount !== null && (
          <div className="absolute bottom-full mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
            {viewCount} {viewCount === 1 ? 'visit' : 'visits'}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ViewCounter;
