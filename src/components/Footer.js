import React from 'react'
import styles from './Footer.module.scss'
import config from '../../data/SiteConfig'

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div>
        <a
          href={`https://github.com/${config.userGitHub}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className={styles.copyright}>{config.copyright}</div>
    </div>
  </footer>
)

export default Footer
