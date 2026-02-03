import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const ResumeViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="resume" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="section-title mb-8">My Resume</h2>
          <p className="text-xl text-gray-600 mb-12">
            Download or view my complete professional experience
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={24} />
              View Resume
            </motion.button>

            <motion.a
              href="/ap_006_26012026.pdf"
              download="Adhiseem_Pandey_Resume.pdf"
              className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} />
              Download PDF
            </motion.a>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
                <h3 className="text-xl font-bold text-gray-900">Resume - Adhiseem Pandey</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="pt-16 h-full overflow-hidden">
                <iframe
                  src="/ap_006_26012026.pdf"
                  className="w-full h-full"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeViewer;
