import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const OpenSourceContribution = () => {
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
        transition: { duration: 0.6, ease: "easeOut" }
      });
      
      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
      });
    }
  }, [isInView, titleControls, contentControls]);
  
  // Open source contributions data
  const contributions = [
    {
      project: 'Dia-TTS',
      logo: 'https://avatars.githubusercontent.com/u/208232306?s=48&v=4',
      prName: 'Adjust KV Cache for torch.compile friendly',
      description: 'Optimized KV Cache implementation in GPT-fast style using outside current_index tensor instead of class attributes',
      impact: 'Improved inference speed by up to 30 tokens/s, reaching 234 tokens/s (2.7x realtime factor)',
      shortImpact: 'Performance ⬆️ 30 tokens/s',
      prLink: 'https://github.com/nari-labs/dia/pull/163',
      repoLink: 'https://github.com/nari-labs/dia',
      language: 'Python/Pytorch',
      color: 'rgb(59, 130, 246)',
      stars: '15.6k',
    },
    {
      project: 'Parler-TTS',
      logo: 'https://avatars.githubusercontent.com/u/25720743?s=88&v=4',
      prName: 'Static Cache for Parler-TTS',
      description: 'Integrated Flash Attention 2 algorithm to optimize attention computation in transformer-based TTS models, reducing memory footprint and improving inference speed',
      impact: 'This is just WIP and handovered by @huggingface team but it go the right way, result in ~4x speed up',
      shortImpact: 'Faster generation speed ~x4',
      prLink: 'https://github.com/huggingface/parler-tts/pull/87',
      repoLink: 'https://github.com/huggingface/parler-tts',
      language: 'Python',
      color: 'rgb(247, 181, 41)',
      stars: '5.3k',
    },
    {
      project: 'Parler-TTS',
      logo: 'https://avatars.githubusercontent.com/u/25720743?s=88&v=4',
      prName: 'Add Flash Attention 2 support to ParlerTTS',
      description: 'Integrated Flash Attention 2 algorithm to optimize attention computation in transformer-based TTS models, reducing memory footprint and improving inference speed',
      impact: '',
      shortImpact: 'Faster generation speed',
      prLink: 'https://github.com/huggingface/parler-tts/pull/59',
      repoLink: 'https://github.com/huggingface/parler-tts',
      language: 'Python',
      color: 'rgb(247, 181, 41)',
      stars: '5.3k',
    },
    {
      project: 'LLaVA',
      logo: 'https://avatars.githubusercontent.com/u/6631389?s=48&v=4',
      prName: 'Add OpenAI-Compatible APIs server',
      description: 'Added OpenAI-compatible API server to LLaVA, enabling drop-in replacement for applications using OpenAI client libraries',
      impact: 'Simplified integration with existing applications and services built for OpenAI models',
      shortImpact: 'API compatibility ⬆️',
      prLink: 'https://github.com/haotian-liu/LLaVA/pull/834',
      repoLink: 'https://github.com/haotian-liu/LLaVA',
      language: 'Python',
      color: 'rgb(75, 192, 192)',
      stars: '22.5k',
    }
  ];

  return (
    <section 
      id="opensource-section" 
      ref={sectionRef} 
      className="section bg-white py-0 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          className="text-center mb-4"
        >
          <h2 className="text-4xl font-bold mb-1 text-neutral-800">Open Source Contributions</h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
            Actively contributing to open source projects that power the AI/ML ecosystem, focusing on performance optimization and scalability.
          </p>
        </motion.div>

        <motion.div 
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={contentControls}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border-l-[6px] flex flex-col"
              style={{ borderLeftColor: contribution.color }}
            >
              <div className="px-5 py-4 flex-1 flex flex-col">
                {/* Header: Project Name, Stars and Language */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <img 
                      src={contribution.logo} 
                      alt={`${contribution.project} logo`}
                      className="w-6 h-6 mr-2 object-contain rounded"
                    />
                    <span className="text-base font-bold text-neutral-800">{contribution.project}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-xs text-neutral-600">
                      <svg className="w-3.5 h-3.5 mr-0.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                      </svg>
                      {contribution.stars}
                    </div>
                    <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">
                      {contribution.language}
                    </span>
                  </div>
                </div>
                
                {/* PR Name */}
                <div className="font-medium text-neutral-700 text-sm mb-1">{contribution.prName}</div>
                
                {/* Description */}
                <p className="text-neutral-600 mb-2 text-xs leading-normal">{contribution.description}</p>
                
                {/* Impact */}
                <div className="text-sm mb-4">
                  <span className="text-neutral-500 font-medium text-xs mr-1">Impact:</span>
                  <span className="text-green-500 font-semibold text-xs">{contribution.shortImpact}</span>
                  {contribution.impact && (
                    <div className="text-xs text-neutral-600 mt-0.5">{contribution.impact}</div>
                  )}
                </div>
                
                {/* Buttons - at the bottom with mt-auto */}
                <div className="flex gap-2 mt-auto">
                  <a 
                    href={contribution.prLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
                    </svg>
                    Open PR
                  </a>
                  <a 
                    href={contribution.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1 border border-neutral-200 text-neutral-700 rounded flex items-center justify-center text-xs"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceContribution; 