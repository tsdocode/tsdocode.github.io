import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Hero = () => {
  const techIcons = [
    { name: 'Python', icon: '🐍' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'CUDA', icon: '⚡' },
    { name: 'Rust', icon: '⚙️' },
    { name: 'Docker', icon: '🐳' },
  ];
  
  // Code for the background decoration
  const codeLines = [
    "import torch",
    "import numpy as np",
    "from optimizer import optimize_model",
    "",
    "model = torch.load('model.pt')",
    "data = np.load('data.npy')",
    "",
    "# Apply optimization",
    "optimized = optimize_model(",
    "    model,",
    "    target='inference',",
    "    quantize=True,",
    "    prune=True",
    ")",
    "",
    "# Export the model",
    "torch.save(optimized, 'optimized.pt')",
    "",
    "# Run inference",
    "outputs = optimized.infer(data)",
    "print(f'Speedup: {benchmark(optimized)}')"
  ];
  
  // Function to handle scrolling to the optimization section
  const scrollToOptimization = () => {
    const optimizationSection = document.getElementById('opensource-section');
    if (optimizationSection) {
      window.scrollTo({
        top: optimizationSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with circuit board pattern and blur */}
      <div className="absolute inset-0 backdrop-blur-sm z-0" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundColor: 'rgba(255,255,255,0.9)',
           }}
      ></div>
      
      {/* Center decoration - Expanded code visualization */}
      <div className="absolute inset-0 z-0 opacity-8 pointer-events-none overflow-hidden">
        {codeLines.map((line, i) => (
          <motion.div 
            key={i}
            className="absolute font-mono text-primary whitespace-nowrap opacity-15"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.08 + (Math.random() * 0.05), 
              x: [0, Math.random() * 10 - 5],
              y: [0, Math.random() * 10 - 5]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "mirror", 
              delay: i * 0.2 
            }}
            style={{
              fontSize: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              filter: 'blur(0.5px)'
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
      
      {/* Center visual element */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {/* Code icon */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 mb-3">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary opacity-20">
            <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4L14 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          {/* Animated rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-primary opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.15, 0.2],
              }}
              transition={{
                duration: 4,
                delay: i * 1.3,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </div>
        
        {/* Main centered code statement */}
        <motion.div
          className="text-5xl md:text-7xl font-mono text-primary opacity-20 text-center whitespace-nowrap"
          animate={{ 
            y: [-10, 10],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, repeatType: "mirror" },
            opacity: { duration: 8, repeat: Infinity, repeatType: "mirror" }
          }}
        >
          model = optimize(model)
        </motion.div>
      </motion.div>
      
      {/* Animated particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary opacity-20 z-0 pointer-events-none"
          style={{
            width: Math.random() * 80 + 20,
            height: Math.random() * 80 + 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() + 0.5],
            opacity: [0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          {/* Left side - Name and buttons */}
          <div className="md:max-w-xl relative z-10 bg-white bg-opacity-90 p-8 rounded-lg border border-white border-opacity-40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm transform transition-all hover:shadow-[0_8px_40px_rgba(29,78,216,0.15)]" 
               style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.6)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight drop-shadow-sm">
                <span className="text-primary">tsdocode</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-neutral-700 mt-6">
                Young guy who loves AI
              </p>
            </motion.div>
            
            {/* Bio section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 pr-4"
            >
              <p className="text-neutral-700 leading-relaxed">
                Passionate <span className="font-semibold text-primary">machine learning engineer</span> specializing in <span className="font-semibold text-primary">model optimization</span> 
                and <span className="font-semibold text-primary">efficient inference deployment</span>. I transform heavyweight models into 
                lightweight powerhouses <span className="font-semibold text-primary">without sacrificing accuracy</span>.
              </p>
            </motion.div>
            
            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <p className="text-neutral-600 font-semibold mb-2">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <span className="mr-1">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/projects" 
                    className="btn btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                View Projects
              </Link>
              <Link to="/resume" 
                    className="btn border border-neutral-300 shadow-lg hover:bg-neutral-100 hover:shadow-neutral-400/30 transition-all hover:-translate-y-1">
                Resume
              </Link>
            </motion.div>
          </div>
          
          {/* Right side - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: -20, y: -20 }}  // Changed to move left and higher
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 md:mt-0 w-full md:w-auto relative z-20"
          >
            <div className="flex flex-col gap-4">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-xl border border-white border-opacity-40 w-full md:w-96"
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">~4 years</div>
                <div className="text-lg text-neutral-600">AI/ML Engineer Experience</div>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-xl border border-white border-opacity-40 w-full md:w-96 md:-ml-32"
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">Focus</div>
                <div className="text-lg text-neutral-600">Inference Optimization</div>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-xl border border-white border-opacity-40 w-full md:w-96"
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">Active</div>
                <div className="text-lg text-neutral-600">Opensource Contributor</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator with animation and interactivity */}
      <motion.div 
        onClick={scrollToOptimization}
        className="absolute bottom-8 left-[45%] z-20 flex flex-col items-center cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-neutral-500 mb-2 text-sm font-medium group-hover:text-primary transition-colors"
        >
          Explore My Open Source Contributions
        </motion.div>
        <svg 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-neutral-400 group-hover:text-primary transition-colors"
        >
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 