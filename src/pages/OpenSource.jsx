import { useState } from 'react';
import { motion } from 'framer-motion';

const OpenSource = () => {
  const [activeTab, setActiveTab] = useState('contributions');
  
  // Open source data
  const openSourceData = {
    contributions: [
      {
        id: 1,
        project: 'Dia-TTS',
        org: 'nari-labs',
        description: 'Adjusted KV Cache for torch.compile friendly implementation, improving inference speed by up to 30 tokens/s.',
        link: 'https://github.com/nari-labs/dia/pull/163',
        date: 'April 2025',
        type: 'Performance',
        stats: {
          commits: 5,
          additions: 126,
          deletions: 53
        }
      },
      {
        id: 2,
        project: 'ONNX Runtime',
        org: 'Microsoft',
        description: 'Optimized graph transformations for Transformer models, reducing inference latency by 18%.',
        link: 'https://github.com/microsoft/onnxruntime',
        date: 'May 2023',
        type: 'Optimization',
        stats: {
          commits: 8,
          additions: 652,
          deletions: 321
        }
      },
      {
        id: 3,
        project: 'TFLite',
        org: 'Google',
        description: 'Fixed memory leak in custom delegate implementation for mobile inference.',
        link: 'https://github.com/tensorflow/tensorflow',
        date: 'February 2023',
        type: 'Bugfix',
        stats: {
          commits: 3,
          additions: 47,
          deletions: 12
        }
      },
      {
        id: 4,
        project: 'PyTorch',
        org: 'Facebook',
        description: 'Implemented efficient kernel fusion for convolution operations on embedded devices.',
        link: 'https://github.com/pytorch/pytorch',
        date: 'December 2022',
        type: 'Optimization',
        stats: {
          commits: 6,
          additions: 543,
          deletions: 128
        }
      },
      {
        id: 5,
        project: 'Apache TVM',
        org: 'Apache',
        description: 'Enhanced auto-tuning capabilities for ARM Mali GPUs.',
        link: 'https://github.com/apache/tvm',
        date: 'October 2022',
        type: 'Feature',
        stats: {
          commits: 11,
          additions: 782,
          deletions: 235
        }
      },
    ],
    projects: [
      {
        id: 1,
        name: 'InferenceKit',
        description: 'A lightweight toolkit for benchmarking and optimizing ML models across different hardware platforms.',
        stars: 476,
        forks: 87,
        link: 'https://github.com/username/inferencekit',
        languages: ['Python', 'C++', 'CUDA'],
        highlights: [
          'Unified interface for TensorRT, ONNX Runtime, TFLite, and OpenVINO',
          'Hardware-specific optimization presets',
          'Extensive benchmarking capabilities with automated reports',
          'Support for custom operator implementations'
        ]
      },
      {
        id: 2,
        name: 'ModelShrink',
        description: 'An end-to-end model compression framework combining quantization, pruning and knowledge distillation.',
        stars: 312,
        forks: 62,
        link: 'https://github.com/username/modelshrink',
        languages: ['Python', 'PyTorch'],
        highlights: [
          'Automated compression pipeline with minimal accuracy loss',
          'Supports mixed-precision quantization for various hardware targets',
          'Structured pruning for hardware-friendly sparsity',
          'Teacher-student knowledge distillation with custom loss functions'
        ]
      },
      {
        id: 3,
        name: 'OpBench',
        description: 'Microbenchmarking tool for deep learning operators across multiple platforms and hardware configurations.',
        stars: 187,
        forks: 41,
        link: 'https://github.com/username/opbench',
        languages: ['Python', 'C++'],
        highlights: [
          'Fine-grained performance analysis of individual operators',
          'Memory and compute profiling capabilities',
          'Comparative analysis across hardware platforms',
          'Integration with popular frameworks like PyTorch and TensorFlow'
        ]
      },
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="pt-24 pb-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Open Source Contributions</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Actively contributing to the ML optimization ecosystem through open source projects 
            and framework contributions.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('contributions')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'contributions'
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Framework Contributions
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'projects'
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div>

        {/* Framework contributions */}
        {activeTab === 'contributions' && (
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              {openSourceData.contributions.map((contribution) => (
                <motion.div
                  key={contribution.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">{contribution.project}</h3>
                        <div className="text-neutral-500">{contribution.org}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        contribution.type === 'Feature' ? 'bg-blue-100 text-blue-800' :
                        contribution.type === 'Optimization' ? 'bg-optimized-light text-optimized-dark' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {contribution.type}
                      </span>
                    </div>
                    
                    <p className="mt-4 text-neutral-700">{contribution.description}</p>
                    
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-200">
                      <div className="flex space-x-4 text-sm text-neutral-500">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {contribution.date}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                          </svg>
                          {contribution.stats.commits} commits
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-1">+{contribution.stats.additions}</span>
                          <span className="text-red-500">-{contribution.stats.deletions}</span>
                        </div>
                      </div>
                      
                      <a
                        href={contribution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark flex items-center"
                      >
                        View on GitHub
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Personal projects */}
        {activeTab === 'projects' && (
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8">
              {openSourceData.projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-neutral-900">{project.name}</h3>
                      <div className="flex items-center text-neutral-500">
                        <div className="flex items-center mr-4">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {project.stars}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          {project.forks}
                        </div>
                      </div>
                    </div>
                    
                    <p className="mt-3 text-neutral-700">{project.description}</p>
                    
                    {/* Languages */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.languages.map((lang, index) => (
                        <span 
                          key={index} 
                          className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                    
                    {/* Highlights */}
                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                        {project.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-neutral-200 flex justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OpenSource; 