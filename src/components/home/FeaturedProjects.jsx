import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'MobileVision Optimization',
      description: 'Optimized a state-of-the-art object detection model for mobile deployment, achieving 6.5x speedup with minimal accuracy loss.',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
      tags: ['Quantization', 'Pruning', 'MobileNet', 'TensorFlow Lite'],
      metrics: {
        speedup: '6.5x',
        size: '82%',
        accuracy: '0.8%',
      },
    },
    {
      id: 2,
      title: 'NLP Transformer Compression',
      description: 'Compressed BERT-based language model for edge devices through knowledge distillation and structured pruning.',
      image: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8',
      tags: ['Knowledge Distillation', 'BERT', 'PyTorch', 'Structured Pruning'],
      metrics: {
        speedup: '3.2x',
        size: '76%',
        accuracy: '1.5%',
      },
    },
    {
      id: 3,
      title: 'Server Inference Pipeline',
      description: 'Designed and implemented a high-throughput inference serving system for large language models using TensorRT.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      tags: ['TensorRT', 'CUDA', 'C++', 'LLM'],
      metrics: {
        speedup: '11x',
        size: '45%',
        accuracy: '0.3%',
      },
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Showcasing successful deep learning model optimizations for various platforms and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`card group cursor-pointer ${
                index === activeIndex ? 'ring-2 ring-primary' : ''
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              onClick={() => setActiveIndex(index)}
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${project.image}?auto=format&fit=crop&w=600&h=300`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neutral-800">{project.title}</h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center bg-neutral-100 p-2 rounded">
                    <div className="text-sm text-neutral-500">Speed</div>
                    <div className="font-bold text-primary">{project.metrics.speedup}</div>
                  </div>
                  <div className="text-center bg-neutral-100 p-2 rounded">
                    <div className="text-sm text-neutral-500">Size</div>
                    <div className="font-bold text-primary">-{project.metrics.size}</div>
                  </div>
                  <div className="text-center bg-neutral-100 p-2 rounded">
                    <div className="text-sm text-neutral-500">Acc. Loss</div>
                    <div className="font-bold text-primary">-{project.metrics.accuracy}</div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-neutral-200 text-neutral-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 