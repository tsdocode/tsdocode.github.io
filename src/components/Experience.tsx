import { useRef, type ReactElement } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

type Segment = string | { bold: string }
type Bullet = Segment[]

interface Job {
  company: string
  role: string
  period: string
  bullets: Bullet[]
}

const jobs: Job[] = [
  {
    company: 'Trusting Social Vietnam',
    role: 'Senior ML Engineer',
    period: '2024 – 2026',
    bullets: [
      ['Fine-tuned TTS models (VITS, F5-TTS, CosyVoice, KANI-TTS) for Vietnamese speech synthesis'],
      ['Built and curated a ', { bold: '20k-hour' }, ' Vietnamese wild speech dataset including data crawling, filtering, alignment, and quality control'],
      ['Designed end-to-end audio preprocessing pipelines: denoise, diarization, ASR filtering, normalization'],
      ['Improved synthesis quality beyond public TTS baselines through model and data improvements'],
      ['Optimized inference using TensorRT + CUDA Graphs, reducing latency by ', { bold: '2×' }, ' and throughput by ', { bold: '4×' }, ' on Nvidia L4 GPU'],
      ['Deployed scalable speech systems on Triton Server for real-time voice applications'],
    ],
  },
  {
    company: 'Neto AI',
    role: 'AI Engineer',
    period: '2025 – 2026',
    bullets: [
      ['Integrated real-time speech-to-speech pipeline into an existing voice agent system'],
      ['Optimized TTS inference to serve large-scale models (~1B parameters) in real-time, supporting ', { bold: '12 concurrent users' }, ' in production'],
      ['Integrated ASR models to improve transcription quality and robustness'],
      ['Conducted applied research to improve system latency and synthesis quality in production voice AI'],
    ],
  },
  {
    company: 'KMS Technology Vietnam',
    role: 'Senior AI Engineer',
    period: '2021 – 2024',
    bullets: [
      ['Led a team of ', { bold: '6 AI engineers' }, ' to design and deploy end-to-end ML systems (data → training → production)'],
      ['Built and deployed an internal chatbot used by ', { bold: '1,000+ employees' }, ' across the organization'],
      ['Designed MLOps pipelines: data processing, model training, deployment, and monitoring'],
      ['Improved model performance via optimization of latency and accuracy across multiple ML systems'],
    ],
  },
]

function renderBullet(bullet: Bullet, key: number): ReactElement {
  return (
    <li key={key} className="flex gap-2.5 text-neutral-600 text-sm leading-relaxed">
      <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 flex-shrink-0" />
      <span>
        {bullet.map((seg, i) =>
          typeof seg === 'string' ? (
            <span key={i}>{seg}</span>
          ) : (
            <strong key={i} className="font-semibold text-neutral-900">
              {seg.bold}
            </strong>
          )
        )}
      </span>
    </li>
  )
}

function JobCard({ job, index }: { job: Job; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      className="relative pl-8 pb-14 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-neutral-200" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-900 ring-4 ring-white" />

      <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="font-bold text-neutral-900 text-lg leading-tight">{job.company}</h3>
            <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
              {job.role}
            </span>
          </div>
          <span className="text-xs text-neutral-400 font-medium whitespace-nowrap mt-1">
            {job.period}
          </span>
        </div>
        <ul className="space-y-2.5">
          {job.bullets.map((b, i) => renderBullet(b, i))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            Experience
          </span>
          <h2 className="mt-3 text-4xl font-bold text-neutral-900 tracking-tight">
            Where I've built things.
          </h2>
        </motion.div>

        <div>
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
