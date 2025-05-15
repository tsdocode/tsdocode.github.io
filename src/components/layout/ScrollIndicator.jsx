import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLabel, setHoveredLabel] = useState(null);
  
  // Define sections for the table of contents
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'opensource-section', label: 'Open Source' },
    { id: 'work-experience', label: 'Experience' }
  ];
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger slightly earlier
      
      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section when clicked
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div 
        className="bg-white bg-opacity-95 rounded-full py-5 px-4 shadow-xl border border-neutral-100 backdrop-blur-md flex flex-col items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -z-10 transform -translate-x-1/2"></div>
        
        {sections.map((section, index) => (
          <div key={section.id} className="relative w-full">
            {/* Connector line to next item */}
            {index < sections.length - 1 && (
              <div className="absolute left-1/2 top-full w-0.5 h-8 bg-neutral-200 transform -translate-x-1/2"></div>
            )}
            
            <div 
              className="my-4 group cursor-pointer relative flex items-center justify-center"
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setHoveredLabel(section.id)}
              onMouseLeave={() => setHoveredLabel(null)}
            >
              {/* Label to the left */}
              {(activeSection === section.id || hoveredLabel === section.id) && (
                <motion.div
                  className="absolute right-8 whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span 
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      activeSection === section.id 
                        ? 'bg-primary text-white'
                        : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    {section.label}
                  </span>
                </motion.div>
              )}

              {/* Circle indicator */}
              <motion.div
                className={`w-4 h-4 rounded-full border relative flex items-center justify-center ${
                  activeSection === section.id
                    ? 'border-primary bg-primary'
                    : hoveredLabel === section.id 
                      ? 'border-neutral-400 bg-white' 
                      : 'border-neutral-300 bg-white'
                }`}
                initial={false}
                animate={{
                  scale: activeSection === section.id ? 1.2 : hoveredLabel === section.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner circle for active state */}
                {activeSection === section.id && (
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Active pulse animation */}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary"
                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  />
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollIndicator; 