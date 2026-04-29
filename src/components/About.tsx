import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const skills: { category: string; items: string[] }[] = [
  {
    category: 'ML / Speech',
    items: ['TTS', 'ASR', 'Transformers', 'VITS', 'F5-TTS', 'CosyVoice'],
  },
  {
    category: 'Inference & Optimization',
    items: ['TensorRT', 'CUDA Graphs', 'vLLM', 'KV Cache', 'Batching', 'torch.compile'],
  },
  {
    category: 'Systems & Infra',
    items: ['Triton Server', 'Ray', 'Docker', 'Kubernetes', 'GCP'],
  },
  {
    category: 'Programming',
    items: ['Python', 'PyTorch', 'Hugging Face'],
  },
]

const categoryColors: Record<string, string> = {
  'ML / Speech': 'bg-blue-50 text-blue-700 border-blue-100',
  'Inference & Optimization': 'bg-orange-50 text-orange-700 border-orange-100',
  'Systems & Infra': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Programming': 'bg-violet-50 text-violet-700 border-violet-100',
}

const interests = [
  'Real-time AI systems',
  'Efficient inference (batching, KV cache, CUDA optimization)',
  'Voice agents & conversational AI',
]

const pipeline = ['Data', 'Training', 'Inference', 'Deployment']

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.3, ease },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            About
          </span>
          <h2 className="mt-3 text-4xl font-bold text-neutral-900 tracking-tight">
            Building voice AI <br className="hidden sm:block" />
            from first principles.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Summary */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ transitionDelay: '0.1s' }}
          >
            <p className="text-neutral-600 leading-relaxed text-base mb-5">
              I'm an AI Engineer focused on building{' '}
              <strong className="font-semibold text-neutral-800">real-time speech systems</strong>{' '}
              and optimizing model inference for production.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base mb-6">
              My work spans the full pipeline:
            </p>

            {/* Pipeline visual */}
            <div className="flex items-center gap-0 mb-7">
              {pipeline.map((step, i) => (
                <div key={step} className="flex items-center">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">
                    {step}
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="mx-1 text-neutral-300 text-xs">→</span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-neutral-600 leading-relaxed text-base mb-6">
              I have experience designing and scaling{' '}
              <strong className="font-semibold text-neutral-800">low-latency voice systems</strong>,
              improving both model quality and system performance in production environments.
            </p>

            {/* Interests */}
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
              Particularly interested in
            </p>
            <ul className="space-y-1.5">
              {interests.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-500">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <div className="space-y-7">
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                variants={sectionVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ transitionDelay: `${0.15 + gi * 0.08}s` }}
              >
                <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      custom={gi * 6 + i}
                      variants={chipVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[group.category]} transition-transform hover:-translate-y-0.5 cursor-default`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ transitionDelay: '0.5s' }}
          className="mt-16 pt-10 border-t border-neutral-100 text-neutral-400 text-sm italic text-center"
        >
          "I build real-time AI systems that are fast, scalable, and production-ready."
        </motion.p>
      </div>
    </section>
  )
}
