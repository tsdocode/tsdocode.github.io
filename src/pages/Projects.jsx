import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'nlp', name: 'NLP' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'server', name: 'Server' },
  ];

  // Project data
  useEffect(() => {
    // In a real app, this could come from an API
    const projectData = [
      {
        id: 1,
        title: 'MobileVision Optimization',
        description: 'Optimized a state-of-the-art object detection model for mobile deployment, achieving 6.5x speedup with minimal accuracy loss.',
        longDescription: 'This project focused on optimizing a MobileNet-SSD object detection model for deployment on mobile devices. The process involved pruning redundant connections, applying 8-bit quantization, and implementing hardware-specific optimizations for mobile GPUs. The result was a 6.5x speedup in inference time and an 82% reduction in model size, with only a 0.8% loss in accuracy.',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
        categories: ['vision', 'mobile'],
        tags: ['Quantization', 'Pruning', 'MobileNet', 'TensorFlow Lite'],
        metrics: {
          speedup: '6.5x',
          size: '82%',
          accuracy: '0.8%',
        },
        github: 'https://github.com/username/mobilevision-optimization',
      },
      {
        id: 2,
        title: 'NLP Transformer Compression',
        description: 'Compressed BERT-based language model for edge devices through knowledge distillation and structured pruning.',
        longDescription: 'This project involved compressing a BERT-based language model for deployment on edge devices. The approach combined knowledge distillation from a large teacher model to a smaller student model, followed by structured pruning to remove redundant attention heads. The implementation achieved a 3.2x speedup and 76% model size reduction with only 1.5% accuracy loss.',
        image: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8',
        categories: ['nlp', 'mobile'],
        tags: ['Knowledge Distillation', 'BERT', 'PyTorch', 'Structured Pruning'],
        metrics: {
          speedup: '3.2x',
          size: '76%',
          accuracy: '1.5%',
        },
        github: 'https://github.com/username/transformer-compression',
      },
      {
        id: 3,
        title: 'Server Inference Pipeline',
        description: 'Designed and implemented a high-throughput inference serving system for large language models using TensorRT.',
        longDescription: 'This project focused on building a high-throughput inference serving system for large language models in production environments. The implementation leveraged TensorRT for GPU acceleration, custom CUDA kernels for critical operations, and an efficient batching mechanism to maximize throughput. The system achieved an 11x speedup compared to the baseline PyTorch implementation.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
        categories: ['nlp', 'server'],
        tags: ['TensorRT', 'CUDA', 'C++', 'LLM'],
        metrics: {
          speedup: '11x',
          size: '45%',
          accuracy: '0.3%',
        },
        github: 'https://github.com/username/server-inference-pipeline',
      },
      {
        id: 4,
        title: 'Real-time Pose Estimation Optimization',
        description: 'Optimized a real-time human pose estimation model for deploying on edge devices with limited compute.',
        longDescription: 'This project optimized a real-time human pose estimation model for edge devices with limited computational resources. The approach combined model architecture simplification, channel pruning, and mixed-precision quantization. The optimized model runs at 30 FPS on edge devices while maintaining 95% of the original accuracy.',
        image: 'https://images.unsplash.com/photo-1566408669374-5a6d5dca1ef5',
        categories: ['vision', 'mobile'],
        tags: ['Pose Estimation', 'Mixed Precision', 'Channel Pruning', 'Edge AI'],
        metrics: {
          speedup: '4.2x',
          size: '68%',
          accuracy: '5.0%',
        },
        github: 'https://github.com/username/pose-estimation-optimization',
      },
      {
        id: 5,
        title: 'Inference Engine Benchmarking Tool',
        description: 'Developed a comprehensive benchmarking tool for comparing inference engines across different hardware platforms.',
        longDescription: 'This project involved creating a benchmarking framework for systematically comparing different inference engines (TensorRT, OpenVINO, TFLite, ONNX Runtime) across various hardware platforms (NVIDIA GPUs, Intel CPUs, ARM processors). The tool provides detailed metrics on throughput, latency, memory usage, and energy consumption to guide optimal deployment decisions.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        categories: ['server', 'mobile'],
        tags: ['Benchmarking', 'TensorRT', 'OpenVINO', 'ONNX Runtime'],
        metrics: {
          platforms: '5+',
          models: '12+',
          engines: '4',
        },
        github: 'https://github.com/username/inference-benchmarking',
      },
    ];
    
    setProjects(projectData);
    setFilteredProjects(projectData);
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.categories.includes(filter))
      );
    }
  }, [filter, projects]);

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

  const projectVariants = {
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
          <h1 className="text-4xl font-bold mb-4">Optimization Projects</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A showcase of deep learning model optimization projects across various 
            domains and hardware platforms.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className="card overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={projectVariants}
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${project.image}?auto=format&fit=crop&w=600&h=300`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {project.metrics.speedup && (
                    <div className="text-center bg-neutral-100 p-2 rounded">
                      <div className="text-sm text-neutral-500">Speed</div>
                      <div className="font-bold text-primary">{project.metrics.speedup}</div>
                    </div>
                  )}
                  {project.metrics.size && (
                    <div className="text-center bg-neutral-100 p-2 rounded">
                      <div className="text-sm text-neutral-500">Size</div>
                      <div className="font-bold text-primary">-{project.metrics.size}</div>
                    </div>
                  )}
                  {project.metrics.accuracy && (
                    <div className="text-center bg-neutral-100 p-2 rounded">
                      <div className="text-sm text-neutral-500">Acc. Loss</div>
                      <div className="font-bold text-primary">-{project.metrics.accuracy}</div>
                    </div>
                  )}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-200 text-neutral-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex justify-between items-center mt-4">
                  <a 
                    href={`/projects/${project.id}`}
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
                  </a>
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-neutral-900"
                    >
                      <svg 
                        className="w-6 h-6" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-neutral-600">No projects found in this category</h3>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects; 