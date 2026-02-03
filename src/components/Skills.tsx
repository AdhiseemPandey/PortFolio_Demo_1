import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Cpu, Award, Users } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const cards = [
    {
      title: "Full Stack Development",
      description: "React, Next.js, Node.js, Express",
      icon: Code2,
      color: "bg-blue-50",
      rotation: -3,
      position: "left"
    },
    {
      title: "Web3 & Blockchain",
      description: "Solidity, Ethers.js, Hardhat, ZK Proofs",
      icon: Globe,
      color: "bg-purple-50",
      rotation: 2,
      position: "right"
    },
    {
      title: "AI Integration",
      description: "OpenAI API, TensorFlow.js, Gemini API",
      icon: Cpu,
      color: "bg-green-50",
      rotation: -2,
      position: "center"
    },
    {
      title: "Top 9.77% LeetCode",
      description: "450+ problems solved, Rating: 1751",
      icon: Award,
      color: "bg-yellow-50",
      rotation: 3,
      position: "left"
    },
    {
      title: "Databases & DevOps",
      description: "MongoDB, PostgreSQL, Docker, AWS",
      icon: Database,
      color: "bg-red-50",
      rotation: -4,
      position: "right"
    },
    {
      title: "Leadership",
      description: "Mentored 15+ developers at Namespace",
      icon: Users,
      color: "bg-orange-50",
      rotation: 2,
      position: "center"
    }
  ];

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -50]);

  const getYTransform = (position: string) => {
    if (position === "left") return y1;
    if (position === "right") return y2;
    return y3;
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-off-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="section-title mb-6">Skills & Achievements</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Building scalable solutions with modern technologies
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            style={{
              y: getYTransform(card.position),
              rotate: card.rotation
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 }
            }}
            className={`${card.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100`}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <card.icon size={48} className="text-gray-800" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{card.title}</h3>
            <p className="text-gray-700 leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
