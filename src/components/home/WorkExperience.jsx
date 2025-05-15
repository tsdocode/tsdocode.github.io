import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  
  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      });
      
      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
      });
    }
  }, [isInView, titleControls, contentControls]);
  
  // Work experience data
  const experiences = [
    {
      company: 'Trusting Social',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQGhxaEbVP5NDQ/company-logo_100_100/company-logo_100_100/0/1630626369858/trustingsocial_logo?e=1752710400&v=beta&t=OEciNKz9uQPZnfcFpHIFK7wvHc4z9NEv_rlxDiNsp6Q',
      position: 'Machine Learning Engineer',
      type: 'Full-time',
      period: 'May 2024 - Present',
      duration: '1 yr 1 mo',
      location: '',
      color: 'rgb(59, 130, 246)',
      achievements: [
        'Joined the development team for the AGI project, contributing to innovative solutions and project milestones.',
        'Optimized voice agent performance, achieving sub-second latency with (ASR latency ~100ms, TTS latency ~100ms) and enhancing overall system efficiency.'
      ]
    },
    {
      company: 'KMS Technology, Inc.',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQFVx7L2Y-Fz2w/company-logo_100_100/company-logo_100_100/0/1630588427440/kms_technology_logo?e=1752710400&v=beta&t=SLdeIIHLi1CH2TJYMdWhqxbtRgpvnr-K-NxpxvhvxyI',
      position: 'Senior AI Engineer',
      type: 'Full-time',
      period: 'Aug 2021 - Feb 2024',
      duration: '2 yrs 7 mos',
      location: 'Ho Chi Minh City, Vietnam',
      color: 'rgb(20, 184, 166)',
      achievements: [
        'Collaborated with high-level managers to gather requirements, analyze data, and lead a team of 4 AI engineers.',
        'Build a company-wide AI chat project with semantic search + vector database and LLM, ~1000 users',
        'Conducted extensive research and applied cutting-edge technologies to advance company objectives.',
        'Spearheaded proof-of-concept initiatives for new features and products, contributing to company growth.',
        'Optimized existing model performance (speed, precision).',
        'Led MLOps efforts for AI projects, overseeing critical aspects such as data engineering, AI model implementation, and deployment.'
      ]
    },
  ];

  return (
    <section 
      id="work-experience" 
      ref={sectionRef} 
      className="section bg-white py-0 h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 py-4 h-full flex flex-col">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleControls}
          className="text-center mb-6"
        >
          <h2 className="text-4xl font-bold mb-1 text-neutral-800 tracking-tight">Work Experience</h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
            Professional journey as an AI/ML engineer focused on optimization and system efficiency.
          </p>
        </motion.div>

        <motion.div 
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentControls}
          className="max-w-5xl mx-auto overflow-y-auto flex-grow scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="relative pb-4">
            {/* Timeline line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-teal-400 to-teal-500 rounded-full"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative mb-5 last:mb-0 flex"
              >
                {/* Company logo */}
                <div className="w-24 mr-4 flex-shrink-0 flex items-start justify-end pt-1">
                  <div 
                    className="w-10 h-10 rounded-full overflow-hidden border-2.5 border-white shadow-lg z-10 bg-white flex items-center justify-center"
                    style={{ 
                      borderColor: experience.color,
                      boxShadow: `0 0 15px ${experience.color}40`
                    }}
                  >
                    <img 
                      src={experience.logo} 
                      alt={`${experience.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                
                {/* Experience content */}
                <div 
                  className="flex-1 bg-white rounded-lg shadow-md p-5 border-l-[5px] hover:shadow-lg transition-all duration-300"
                  style={{ 
                    borderLeftColor: experience.color,
                    boxShadow: `0 3px 10px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02), 0 0 0 3px ${experience.color}10`
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-800 tracking-tight">{experience.position}</h3>
                      <div className="flex items-center text-neutral-700">
                        <span className="font-semibold text-sm">{experience.company}</span>
                        <span className="mx-1.5 text-neutral-400">•</span>
                        <span className="text-xs text-neutral-500 font-medium">{experience.type}</span>
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5 mb-2">
                        <span className="inline-block">{experience.period}</span>
                        <span className="mx-1 text-neutral-400">·</span>
                        <span className="inline-block font-medium">{experience.duration}</span>
                        {experience.location && (
                          <>
                            <span className="mx-1.5 text-neutral-400">•</span>
                            <span className="inline-block">{experience.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mt-2">
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span 
                              className="text-base mr-2 mt-0.5 flex-shrink-0" 
                              style={{ color: experience.color }}
                            >•</span>
                            <span className="text-sm text-neutral-700 leading-snug">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Skills */}
                  {experience.skills && experience.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {experience.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full px-2.5 py-1"
                          style={{
                            backgroundColor: `${experience.color}15`,
                            color: experience.color
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience; 