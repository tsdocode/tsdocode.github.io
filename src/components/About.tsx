import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills: { category: string; items: string[] }[] = [
  {
    category: 'ML / Speech',
    items: ['TTS', 'ASR', 'Transformers', 'VITS', 'F5-TTS', 'CosyVoice'],
  },
  {
    category: 'Frameworks',
    items: ['PyTorch', 'Hugging Face', 'vLLM', 'Ray'],
  },
  {
    category: 'Inference & Perf',
    items: ['Triton Server', 'TensorRT', 'CUDA Graphs', 'torch.compile'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'GCP'],
  },
]

const categoryColors: Record<string, string> = {
  'ML / Speech': 'bg-blue-50 text-blue-700 border-blue-100',
  'Frameworks': 'bg-violet-50 text-violet-700 border-violet-100',
  'Inference & Perf': 'bg-orange-50 text-orange-700 border-orange-100',
  'Infrastructure': 'bg-emerald-50 text-emerald-700 border-emerald-100',
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

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
              I'm a Senior AI Engineer with a deep focus on speech synthesis and
              real-time voice agent systems. I've spent the last several years
              training TTS models, building large-scale speech datasets, and
              deploying low-latency voice infrastructure.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base mb-5">
              My work spans the full ML lifecycle — from raw audio crawling and
              preprocessing to model training, evaluation, and production
              optimization with TensorRT and Triton Server.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base">
              I contribute to open-source speech projects and enjoy pushing the
              boundaries of what's possible in real-time voice AI.
            </p>
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
      </div>
    </section>
  )
}
