/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-neutral-50',
    'bg-neutral-100',
    'bg-neutral-200',
    'text-neutral-500',
    'text-neutral-600',
    'text-neutral-700',
    'text-neutral-800',
    'border-neutral-200',
    'text-primary',
    'bg-primary'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8', // Blue
          light: '#3b82f6',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#6366f1', // Indigo as secondary
          light: '#818cf8',
          dark: '#4f46e5',
        },
        optimized: {
          DEFAULT: '#22c55e', // Keep Green for optimized state
          light: '#4ade80',
          dark: '#16a34a',
        },
        neutral: {
          50: '#ffffff',
          100: '#f9fafb',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b', 
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundColor: {
        'hero': '#1e293b',
        'stats': '#f1f5f9',
      }
    },
  },
  plugins: [],
} 