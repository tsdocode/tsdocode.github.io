import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// Speech-to-Speech pipeline nodes
const pipeline = [
  {
    label: 'Audio In',
    sublabel: 'User speech',
    color: 'bg-neutral-100 border-neutral-200 text-neutral-700',
    dot: 'bg-neutral-400',
  },
  {
    label: 'ASR',
    sublabel: 'Speech → Text',
    color: 'bg-blue-50 border-blue-100 text-blue-700',
    dot: 'bg-blue-400',
  },
  {
    label: 'LLM',
    sublabel: 'Response generation',
    color: 'bg-violet-50 border-violet-100 text-violet-700',
    dot: 'bg-violet-400',
  },
  {
    label: 'TTS Model',
    sublabel: 'VITS · F5-TTS · CosyVoice',
    color: 'bg-orange-50 border-orange-100 text-orange-700',
    dot: 'bg-orange-400',
  },
  {
    label: 'Audio Out',
    sublabel: 'Streamed chunks',
    color: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    dot: 'bg-emerald-400',
  },
]

// Optimization techniques applied at the TTS inference layer
const optimizations = [
  {
    label: 'TensorRT',
    desc: 'Fused CUDA kernels, FP16 precision, engine optimization',
    result: '2× latency',
    color: 'border-orange-100 bg-orange-50/50',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    label: 'CUDA Graphs',
    desc: 'Captured inference graphs to eliminate CPU overhead',
    result: '4× throughput',
    color: 'border-orange-100 bg-orange-50/50',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    label: 'KV Cache + vLLM',
    desc: 'Efficient KV reuse, paged attention, continuous batching',
    result: '16× throughput',
    color: 'border-violet-100 bg-violet-50/50',
    badge: 'bg-violet-100 text-violet-700',
  },
  {
    label: 'Streaming Decode',
    desc: 'Chunk-wise audio generation for minimal time-to-first-byte',
    result: 'Real-time',
    color: 'border-emerald-100 bg-emerald-50/50',
    badge: 'bg-emerald-100 text-emerald-700',
  },
]

export default function SystemDesign() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="system-design" ref={ref} className="py-28 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            System Design
          </span>
          <h2 className="mt-3 text-4xl font-bold text-neutral-900 tracking-tight">
            Real-time voice AI pipeline.
          </h2>
          <p className="mt-4 text-neutral-500 text-base max-w-xl leading-relaxed">
            End-to-end speech-to-speech architecture — from user audio to generated voice response,
            optimized for sub-second latency at scale.
          </p>
        </motion.div>

        {/* Pipeline diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mb-4"
        >
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Pipeline
          </p>

          {/* Mobile: vertical */}
          <div className="flex flex-col items-center gap-0 sm:hidden">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center w-full max-w-xs">
                <div className={`w-full px-4 py-3 rounded-xl border ${step.color} text-center`}>
                  <div className="flex items-center justify-center gap-2 mb-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
                    <span className="font-semibold text-sm">{step.label}</span>
                  </div>
                  <span className="text-xs opacity-70">{step.sublabel}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <div className="w-px h-4 bg-neutral-300" />
                    <span className="text-neutral-400 text-xs">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden sm:flex items-center">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1">
                <div className={`flex-1 px-3 py-3.5 rounded-xl border ${step.color} text-center min-w-0`}>
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${step.dot}`} />
                    <span className="font-semibold text-xs">{step.label}</span>
                  </div>
                  <span className="text-[10px] opacity-70 leading-tight block">{step.sublabel}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="flex items-center px-1 flex-shrink-0 text-neutral-300">
                    <div className="w-3 h-px bg-neutral-300" />
                    <span className="text-[10px]">›</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Optimization focus callout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3, ease }}
          className="text-xs text-neutral-400 mb-10 text-center sm:text-left"
        >
          ↑ Key optimization target: TTS inference layer
        </motion.p>

        {/* Optimization cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease }}
        >
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Inference optimizations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {optimizations.map((opt, i) => (
              <motion.div
                key={opt.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07, ease }}
                className={`rounded-xl border ${opt.color} p-4 flex items-start gap-4`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-neutral-900 text-sm">{opt.label}</span>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">{opt.desc}</p>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0 ${opt.badge}`}>
                  {opt.result}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
