import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400">
          © {year} <span className="font-medium text-neutral-600">Sang Nguyen</span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/tsdocode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/tsdocode/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:tsdocode@gmail.com"
            aria-label="Email"
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <FiMail size={18} />
          </a>
        </div>

        <p className="text-xs text-neutral-300">
          Built with React + Vite
        </p>
      </div>
    </footer>
  )
}
