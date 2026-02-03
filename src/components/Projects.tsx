import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type FilterType = 'All' | 'Full Stack' | 'Web3' | 'AI/ML';

const allProjects = [
  {
    title: 'BeatCode',
    description: 'AI-Enhanced Learning Platform with real-time debugging hints and dynamic coding curricula. Built for 50+ beta users with optimized SSG performance.',
    tags: ['Next.js', 'Node.js', 'OpenAI API', 'MongoDB'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-blue-50 to-blue-100',
    category: 'AI/ML' as FilterType
  },
  {
    title: 'Orbital CLI',
    description: 'Autonomous Dev Assistant that translates natural language into executable shell commands via Gemini API. Automated 15+ standard terminal commands.',
    tags: ['TypeScript', 'Gemini API', 'PostgreSQL', 'OAuth 2.0'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-amber-50 to-amber-100',
    category: 'Full Stack' as FilterType
  },
  {
    title: 'SIG: Sovereign Identity Guardian',
    description: 'Privacy-preserving browser extension that scans crypto transactions for malicious patterns using Zero-Knowledge Proofs and on-device ML inference.',
    tags: ['React', 'TensorFlow.js', 'Web3.js', 'SnarkJS'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-green-50 to-green-100',
    category: 'Web3' as FilterType
  },
  {
    title: 'Portfolio Platform',
    description: 'Modern, AI-native portfolio platform with animated components, smooth scroll effects, and interactive elements built with cutting-edge web technologies.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-orange-50 to-orange-100',
    category: 'Full Stack' as FilterType
  },
  {
    title: 'DeFi Yield Optimizer',
    description: 'Smart contract analyzer that identifies optimal yield farming strategies across multiple chains using ML predictions and real-time gas optimization.',
    tags: ['Solidity', 'Python', 'TensorFlow', 'Ethers.js'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-cyan-50 to-cyan-100',
    category: 'Web3' as FilterType
  },
  {
    title: 'Smart Commerce API',
    description: 'Scalable REST API with ML-powered recommendation engine. Handles 100K+ requests/day with real-time inventory sync and predictive analytics.',
    tags: ['Express.js', 'FastAPI', 'Scikit-learn', 'Redis'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-slate-50 to-slate-100',
    category: 'AI/ML' as FilterType
  },
  {
    title: 'Vision Analytics Dashboard',
    description: 'Real-time computer vision platform with live video processing, object detection, and sentiment analysis for enterprise monitoring systems.',
    tags: ['OpenCV', 'PyTorch', 'React', 'WebSocket'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-rose-50 to-rose-100',
    category: 'AI/ML' as FilterType
  },
  {
    title: 'NFT Marketplace',
    description: 'Full-stack Web3 marketplace with IPFS integration, ERC-721 support, and gasless transactions using meta-transactions and relay networks.',
    tags: ['React', 'Web3.js', 'IPFS', 'Smart Contracts'],
    github: 'https://github.com/AdhiseemPandey',
    demo: '#',
    color: 'from-pink-50 to-pink-100',
    category: 'Web3' as FilterType
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<FilterType>('All');
  const [showAll, setShowAll] = useState(false);

  const categories: FilterType[] = ['All', 'Full Stack', 'Web3', 'AI/ML'];

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title mb-6">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Innovative solutions built with modern technologies
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12 flex flex-wrap justify-center gap-3"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: 'easeOut'
            }}
            viewport={{ once: true }}
            className="group relative"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-br ${project.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col`}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  className="flex-1 border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length > 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mt-16 flex justify-center"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          >
            {showAll ? 'Show Less' : 'View More Projects'}
            <motion.span
              animate={showAll ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
