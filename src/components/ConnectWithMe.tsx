import { motion } from 'framer-motion';

const ConnectWithMe = () => {
const socials = [
  {
    name: 'LinkedIn',
    handle: 'Adhiseem Pandey',
    url: 'https://www.linkedin.com/in/adhiseem-pandey-90a2362a5/',
    image: 'https://cdn-icons-png.flaticon.com/512/145/145807.png',
    color: 'from-blue-50 to-blue-100'
  },
  {
    name: 'GitHub',
    handle: 'AdhiseemPandey',
    url: 'https://github.com/AdhiseemPandey',
    image: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    color: 'from-gray-50 to-gray-100'
  },
  {
    name: 'LeetCode',
    handle: 'adhiseem_pandey',
    url: 'https://leetcode.com/u/adhiseem_pandey/',
    image: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png',
    color: 'from-orange-50 to-orange-100'
  },
  {
    name: 'Codeforces',
    handle: 'AdhiseemPandey006',
    url: 'https://codeforces.com/profile/AdhiseemPandey006',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png',
    color: 'from-red-50 to-red-100'
  }
];


  return (
    <section className="py-32 px-6 bg-stone-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-serif mb-6 text-stone-900">
          Connect With Me
        </h2>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Find me on these platforms and let's connect
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: 'easeOut'
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`group bg-gradient-to-br ${social.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 block`}
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={social.image}
                  alt={social.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left flex-grow">
                <h3 className="text-lg font-semibold text-stone-900 mb-1">
                  {social.name}
                </h3>
                <p className="text-sm text-stone-600 group-hover:text-stone-700 transition-colors">
                  @{social.handle}
                </p>
              </div>
              <motion.div
                className="flex-shrink-0 text-stone-900 group-hover:text-stone-700 transition-colors"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ConnectWithMe;
