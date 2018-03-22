import React from 'react'
import styles from './styles.scss'

const Game = () =>
  <div className={`float-left ${styles.game}`}>
    <p className={`${styles.matchup}`}>
      {'NYJ @ NE'}
    </p>
    <p>
      {'1:05pm'}
    </p>
  </div>

export default Game
