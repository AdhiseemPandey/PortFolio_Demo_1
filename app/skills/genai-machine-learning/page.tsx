"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

const GenAIMachineLearningPage = () => {
  const technologies = [
    {
      name: "TensorFlow.js",
      description: "JavaScript library for machine learning in browsers and Node.js, enabling client-side AI applications and real-time inference.",
      experience: "Intermediate",
      useCases: ["Browser ML", "Real-time inference", "Model deployment", "Client-side AI"],
      projects: ["AI security models", "Data classification", "Predictive analytics"],
      keyFeatures: ["Browser compatibility", "Pre-trained models", "Custom training", "WebGL acceleration"],
      webThreeIntegration: "Building AI-powered Web3 applications with on-chain data analysis and smart contract optimization."
    },
    {
      name: "Scikit-learn",
      description: "Python machine learning library providing simple and efficient tools for data mining, analysis, and predictive modeling.",
      experience: "Intermediate",
      useCases: ["Data classification", "Regression analysis", "Clustering", "Feature selection"],
      projects: ["Security classification", "Data analysis", "Predictive models"],
      keyFeatures: ["Easy-to-use API", "Comprehensive algorithms", "Data preprocessing", "Model evaluation"],
      webThreeIntegration: "Analyzing blockchain data patterns, fraud detection, and optimizing DeFi strategies with ML models."
    },
    {
      name: "OpenAI API",
      description: "Powerful API for integrating GPT models and other AI capabilities into applications for natural language processing.",
      experience: "Advanced",
      useCases: ["Chatbots", "Content generation", "Code assistance", "Natural language processing"],
      projects: ["AI chatbots", "Code generation", "Smart assistants"],
      keyFeatures: ["GPT integration", "Fine-tuning", "Embeddings", "Function calling"],
      webThreeIntegration: "Creating intelligent Web3 interfaces, smart contract documentation, and AI-powered DeFi advisors."
    },
    {
      name: "Random Forest",
      description: "Ensemble learning method using multiple decision trees for classification and regression with high accuracy.",
      experience: "Intermediate",
      useCases: ["Classification tasks", "Feature importance", "Regression analysis", "Ensemble learning"],
      projects: ["Security models", "Risk assessment", "Data classification"],
      keyFeatures: ["Ensemble method", "Feature importance", "Overfitting resistance", "Parallel processing"],
      webThreeIntegration: "Risk assessment for DeFi protocols, fraud detection in transactions, and portfolio optimization."
    },
    {
      name: "TF-IDF",
      description: "Text analysis technique for evaluating document importance in collections, widely used in information retrieval.",
      experience: "Intermediate",
      useCases: ["Text analysis", "Document ranking", "Feature extraction", "Information retrieval"],
      projects: ["Document analysis", "Content classification", "Search optimization"],
      keyFeatures: ["Term frequency", "Inverse document frequency", "Text vectorization", "Similarity scoring"],
      webThreeIntegration: "Analyzing smart contract documentation, whitepaper analysis, and Web3 content classification."
    },
    {
      name: "AI Security Models",
      description: "Machine learning models specifically designed for cybersecurity applications, threat detection, and risk assessment.",
      experience: "Advanced",
      useCases: ["Threat detection", "Anomaly detection", "Risk assessment", "Security monitoring"],
      projects: ["SIG - Sovereign Identity Guardian", "Transaction monitoring", "Fraud detection"],
      keyFeatures: ["Real-time monitoring", "Pattern recognition", "Anomaly detection", "Risk scoring"],
      webThreeIntegration: "Protecting Web3 applications from threats, analyzing transaction patterns, and securing DeFi protocols."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <Link 
          href="/skills"
          className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Skills
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              GenAI & Machine Learning
            </h1>
            <p className="text-xl text-gray-300">
              AI and machine learning technologies for intelligent Web3 applications
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:shadow-xl hover:shadow-[var(--color-primary)]/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">
                    {tech.name}
                  </h3>
                  <span className="px-3 py-1 text-sm bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/30">
                    {tech.experience}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tech.keyFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Web3 Integration</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tech.webThreeIntegration}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                  <div className="space-y-2">
                    {tech.useCases.map((useCase) => (
                      <div key={useCase} className="p-3 bg-slate-700/50 rounded-lg border border-gray-600">
                        <span className="text-gray-300 text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Projects Using {tech.name}</h4>
                  <div className="space-y-2">
                    {tech.projects.map((project) => (
                      <div key={project} className="p-3 bg-slate-700/50 rounded-lg border border-gray-600">
                        <span className="text-gray-300 text-sm">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenAIMachineLearningPage;