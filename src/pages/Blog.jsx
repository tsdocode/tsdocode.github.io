import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Model Quantization Techniques for Edge Devices',
      excerpt: 'A comprehensive guide to different quantization approaches for deploying deep learning models on resource-constrained edge devices.',
      cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      date: 'May 15, 2023',
      tags: ['quantization', 'edge-ai', 'optimization'],
      readTime: '12 min read',
    },
    {
      id: 2,
      title: 'Structured Pruning for Efficient Inference',
      excerpt: 'Learn how structured pruning techniques can significantly reduce model size and inference time without custom hardware support.',
      cover: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
      date: 'March 22, 2023',
      tags: ['pruning', 'optimization', 'deep-learning'],
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Memory Layout Optimizations for ML Models',
      excerpt: 'Explore how memory layout optimizations can dramatically improve cache efficiency and reduce latency for deep learning inference.',
      cover: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f',
      date: 'January 10, 2023',
      tags: ['memory', 'optimization', 'performance'],
      readTime: '15 min read',
    },
    {
      id: 4,
      title: 'Custom Operator Implementation for Accelerated Inference',
      excerpt: 'A step-by-step tutorial on implementing custom operators in CUDA to accelerate specific computational patterns in your models.',
      cover: 'https://images.unsplash.com/photo-1544819379-f14c9a36ea5d',
      date: 'November 5, 2022',
      tags: ['cuda', 'operators', 'tensorrt', 'optimization'],
      readTime: '18 min read',
    },
    {
      id: 5,
      title: 'Benchmarking Methodology for ML Optimization',
      excerpt: 'Develop a systematic approach to benchmarking optimized models that accounts for throughput, latency, accuracy, and memory consumption.',
      cover: 'https://images.unsplash.com/photo-1543286386-713bdd548da4',
      date: 'September 14, 2022',
      tags: ['benchmarking', 'methodology', 'performance'],
      readTime: '10 min read',
    },
    {
      id: 6,
      title: 'Hardware-Specific Optimizations for Neural Networks',
      excerpt: 'Dive deep into optimizing neural network performance for specific hardware platforms including GPUs, CPUs, and mobile processors.',
      cover: 'https://images.unsplash.com/photo-1591405351990-4726e331f141',
      date: 'July 28, 2022',
      tags: ['hardware', 'optimization', 'gpu', 'cpu'],
      readTime: '14 min read',
    },
  ];

  // Extract all unique tags
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on selected tag
  const filteredPosts = selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

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
      transition: { 
        duration: 0.4 
      }
    }
  };

  return (
    <div className="pt-24 pb-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Optimization Insights</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Technical articles on deep learning model optimization techniques,
            performance benchmarking, and deployment strategies.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full transition-colors text-sm ${
                selectedTag === tag
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tag === 'all' ? 'All Topics' : tag}
            </button>
          ))}
        </div>

        {/* Blog posts grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map(post => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              {/* Post image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${post.cover}?auto=format&fit=crop&w=600&h=300`} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              {/* Post content */}
              <div className="p-6">
                {/* Tags and date */}
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-primary font-medium">
                    {post.tags[0]}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {post.date}
                  </div>
                </div>
                
                {/* Title and excerpt */}
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Footer with read time and read more link */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500">
                    {post.readTime}
                  </span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-primary font-medium hover:underline text-sm inline-flex items-center"
                  >
                    Read More
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
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-neutral-600">No articles found with this tag</h3>
            <button
              onClick={() => setSelectedTag('all')}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Show all articles
            </button>
          </div>
        )}
        
        {/* Newsletter signup */}
        <div className="bg-primary text-white rounded-lg p-8 mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Optimization Updates</h3>
              <p className="text-primary-100">
                Get the latest articles on ML optimization techniques and best practices delivered to your inbox.
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-l-md text-neutral-800 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-neutral-800 text-white px-4 py-2 rounded-r-md hover:bg-neutral-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 