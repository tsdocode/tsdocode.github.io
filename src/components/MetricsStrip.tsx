import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const metrics = [
  {
    value: '2×',
    label: 'Latency reduction',
    context: 'TensorRT + CUDA Graphs on L4 GPU',
  },
  {
    value: '4×',
    label: 'Throughput increase',
    context: 'TensorRT + CUDA Graphs on L4 GPU',
  },
  {
    value: '16×',
    label: 'vLLM throughput boost',
    context: 'KV cache + efficient batching',
  },
  {
    value: '~1B',
    label: 'Params served real-time',
    context: '12 concurrent users in production',
  },
]

export default function MetricsStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="border-y border-neutral-100 bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-neutral-100">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08, ease }}
            className="flex flex-col items-start lg:px-8 first:lg:pl-0 last:lg:pr-0"
          >
            <span className="text-4xl font-bold tracking-tight text-neutral-900 leading-none mb-1.5">
              {m.value}
            </span>
            <span className="text-sm font-semibold text-neutral-700 mb-1">
              {m.label}
            </span>
            <span className="text-xs text-neutral-400 leading-snug">
              {m.context}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
