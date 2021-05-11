import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p style={{marginTop : "60px"}}>
      Written by <strong>{config.userName}</strong> who love doing mad things
      {` `}
    </p>
  </>
)

export default Bio
