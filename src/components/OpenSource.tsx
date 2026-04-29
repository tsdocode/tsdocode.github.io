import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ease = [0.25, 0.46, 0.45, 0.94] as const

interface Contribution {
  repo: string
  org: string
  orgLabel: string
  url: string
  prUrls?: string[]
  metric: string
  metricLabel: string
  description: string
  role: 'Author' | 'Contributor'
  tags?: string[]
}

const contributions: Contribution[] = [
  {
    repo: 'nano-qwen3tts-vllm',
    org: 'tsdocode',
    orgLabel: 'Personal',
    url: 'https://github.com/tsdocode/nano-qwen3tts-vllm',
    metric: '16×',
    metricLabel: 'throughput boost',
    description:
      'Real-time TTS Inference Optimization using vLLM + Streaming. Optimized large-scale TTS inference via efficient batching and KV cache — achieving ~3× latency reduction, up to 16× throughput improvement, with streaming inference support for real-time voice agents.',
    role: 'Author',
    tags: ['vLLM', 'KV Cache', 'Batching', 'CUDA Graphs', 'Streaming'],
  },
  {
    repo: 'nanoVLM',
    org: 'huggingface',
    orgLabel: 'Hugging Face',
    url: 'https://github.com/huggingface/nanoVLM',
    prUrls: ['https://github.com/huggingface/nanoVLM/pull/88'],
    metric: '3×',
    metricLabel: 'inference speedup',
    description:
      'Improved inference performance using torch.compile and static KV cache. Optimized model execution for lower latency and higher throughput.',
    role: 'Contributor',
  },
  {
    repo: 'parler-tts',
    org: 'huggingface',
    orgLabel: 'Hugging Face',
    url: 'https://github.com/huggingface/parler-tts',
    prUrls: [
      'https://github.com/huggingface/parler-tts/pull/87',
      'https://github.com/huggingface/parler-tts/pull/59',
    ],
    metric: 'Flash Attn 2',
    metricLabel: '+ torch.compile',
    description:
      'Added Flash Attention 2 and torch.compile to model inference. Enhanced model usability, stability, and performance.',
    role: 'Contributor',
  },
  {
    repo: 'dia',
    org: 'nari-labs',
    orgLabel: 'nari-labs',
    url: 'https://github.com/nari-labs/dia',
    prUrls: [
      'https://github.com/nari-labs/dia/pull/163',
      'https://github.com/nari-labs/dia/pull/229',
    ],
    metric: '2 PRs',
    metricLabel: 'merged',
    description:
      'Contributed to speech model improvements and issue resolution, focusing on inference pipeline reliability for the Dia TTS model.',
    role: 'Contributor',
  },
]

const roleColors: Record<string, string> = {
  Author: 'bg-neutral-900 text-white',
  Contributor: 'bg-neutral-100 text-neutral-600',
}

function OSSCard({ contribution, index }: { contribution: Contribution; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1, ease }}
      className="group bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <FiGithub size={16} className="text-neutral-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-neutral-400">{contribution.orgLabel}</p>
            <h3 className="font-bold text-neutral-900 text-base leading-tight">
              {contribution.repo}
            </h3>
          </div>
        </div>
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${roleColors[contribution.role]}`}
        >
          {contribution.role}
        </span>
      </div>

      {/* Metric pill */}
      <div className="mb-4">
        <div className="inline-flex items-baseline gap-1.5 bg-neutral-50 border border-neutral-100 rounded-xl px-3 py-1.5">
          <span className="text-xl font-bold text-neutral-900">{contribution.metric}</span>
          <span className="text-xs text-neutral-500">{contribution.metricLabel}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-5">
        {contribution.description}
      </p>

      {/* Tech tags */}
      {contribution.tags && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {contribution.tags.map(tag => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-2 mt-auto">
        <a
          href={contribution.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-medium"
        >
          <FiGithub size={12} /> Repo
        </a>
        {contribution.prUrls?.map((pr, i) => (
          <a
            key={pr}
            href={pr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-medium"
          >
            <FiExternalLink size={12} /> PR #{i + 1}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default function OpenSource() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="oss" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            Open Source
          </span>
          <h2 className="mt-3 text-4xl font-bold text-neutral-900 tracking-tight">
            Giving back to the ecosystem.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {contributions.map((c, i) => (
            <OSSCard key={c.repo} contribution={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
