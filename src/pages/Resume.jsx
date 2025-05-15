import { motion } from 'framer-motion';

const Resume = () => {
  // Resume data
  const resumeData = {
    personalInfo: {
      name: 'Alex Chen',
      title: 'Machine Learning Engineer',
      email: 'alex.chen@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      github: 'github.com/alexchen',
      linkedin: 'linkedin.com/in/alexchen',
      summary: 'Machine Learning Engineer with 6+ years of experience specializing in deep learning model optimization for efficient inference across diverse hardware platforms. Expert in quantization, pruning, distillation, and hardware-specific acceleration techniques.',
    },
    skills: [
      {
        category: 'Programming Languages',
        items: ['Python', 'C++', 'CUDA', 'JavaScript', 'Julia']
      },
      {
        category: 'ML Frameworks',
        items: ['PyTorch', 'TensorFlow', 'ONNX', 'JAX', 'scikit-learn']
      },
      {
        category: 'Optimization Tools',
        items: ['TensorRT', 'ONNX Runtime', 'TFLite', 'OpenVINO', 'PyTorch Mobile', 'CoreML']
      },
      {
        category: 'Hardware Platforms',
        items: ['NVIDIA GPUs', 'Intel CPUs', 'ARM processors', 'Apple Silicon', 'TPUs']
      },
      {
        category: 'DevOps & Deployment',
        items: ['Docker', 'Kubernetes', 'CI/CD', 'MLflow', 'AWS', 'GCP']
      },
    ],
    experience: [
      {
        title: 'Senior ML Optimization Engineer',
        company: 'TechVision AI',
        location: 'San Francisco, CA',
        period: 'Jan 2021 - Present',
        achievements: [
          'Led development of model optimization pipeline, reducing inference time by 4-10x across various deep learning architectures',
          'Implemented custom quantization techniques for computer vision models, achieving 75% model size reduction with <1% accuracy drop',
          'Optimized large language models for server deployment, delivering 8x throughput improvement for production inference',
          'Contributed to open-source optimization libraries, including ONNX Runtime and TensorRT tools',
          'Mentored junior engineers on ML optimization techniques and best practices',
        ]
      },
      {
        title: 'Machine Learning Engineer',
        company: 'Mobile AI Labs',
        location: 'Seattle, WA',
        period: 'Mar 2018 - Dec 2020',
        achievements: [
          'Developed and deployed optimized deep learning models for Android and iOS platforms',
          'Implemented model compression techniques (pruning, distillation) for on-device inference',
          'Created custom TFLite operators for specialized ML tasks, improving performance by 3x',
          'Built automated benchmarking system for measuring inference performance across devices',
          'Reduced model size by 80% for production computer vision models while maintaining accuracy',
        ]
      },
      {
        title: 'ML Research Engineer',
        company: 'University Research Lab',
        location: 'Berkeley, CA',
        period: 'Jun 2016 - Feb 2018',
        achievements: [
          'Researched novel neural network compression techniques for resource-constrained devices',
          'Published 3 papers on efficient deep learning in top ML conferences',
          'Developed optimization framework for systematic neural network efficiency exploration',
          'Collaborated with industry partners to deploy efficient models in real-world applications',
        ]
      },
    ],
    education: [
      {
        degree: 'M.S. in Computer Science',
        specialization: 'Machine Learning',
        school: 'University of California, Berkeley',
        period: '2014 - 2016',
      },
      {
        degree: 'B.S. in Electrical Engineering and Computer Science',
        school: 'University of Washington',
        period: '2010 - 2014',
      }
    ],
    certifications: [
      {
        name: 'NVIDIA Deep Learning Institute - Accelerating Inference Performance',
        issuer: 'NVIDIA',
        date: '2022',
      },
      {
        name: 'TensorFlow Certified Developer',
        issuer: 'Google',
        date: '2021',
      },
      {
        name: 'AWS Certified Machine Learning - Specialty',
        issuer: 'Amazon Web Services',
        date: '2020',
      },
    ],
    publications: [
      {
        title: 'Efficient Transformer Optimization for Edge Devices',
        venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
        year: '2022',
        link: '#',
      },
      {
        title: 'Structured Pruning Methods for Vision Transformers',
        venue: 'International Conference on Computer Vision (ICCV)',
        year: '2021',
        link: '#',
      },
      {
        title: 'Hardware-Aware Neural Network Optimization',
        venue: 'Conference on Machine Learning and Systems (MLSys)',
        year: '2019',
        link: '#',
      },
    ],
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
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Resume header */}
          <div className="bg-primary text-white p-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl font-bold">{resumeData.personalInfo.name}</h1>
              <p className="text-xl mt-2">{resumeData.personalInfo.title}</p>
              
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{resumeData.personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>{resumeData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{resumeData.personalInfo.location}</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-4">
                <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Summary */}
          <motion.div className="p-8 border-b" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-neutral-700">{resumeData.personalInfo.summary}</p>
          </motion.div>
          
          {/* Skills */}
          <motion.div className="p-8 border-b" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="font-bold text-primary mb-2">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Experience */}
          <motion.div className="p-8 border-b" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-8">
              {resumeData.experience.map((job, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <h3 className="font-bold text-xl">{job.title}</h3>
                  <div className="text-lg text-primary mb-2">{job.company}</div>
                  <div className="flex flex-wrap justify-between mb-3 text-sm text-neutral-500">
                    <span>{job.location}</span>
                    <span>{job.period}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div className="p-8 border-b" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  {edu.specialization && (
                    <div className="text-primary">{edu.specialization}</div>
                  )}
                  <div className="text-neutral-700">{edu.school}</div>
                  <div className="text-neutral-500 text-sm">{edu.period}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Certifications & Publications */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Certifications</h2>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                    <h3 className="font-bold">{cert.name}</h3>
                    <div className="text-neutral-700">{cert.issuer}</div>
                    <div className="text-neutral-500 text-sm">{cert.date}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Publications</h2>
              <div className="space-y-4">
                {resumeData.publications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold">{pub.title}</h3>
                    <div className="text-neutral-700">{pub.venue}</div>
                    <div className="text-neutral-500 text-sm">{pub.year}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Download button */}
          <motion.div 
            className="p-8 bg-neutral-50 text-center"
            variants={itemVariants}
          >
            <a 
              href="#" 
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume (PDF)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 