import React from 'react'
import styles from './styles.scss'

const Header = () =>
  <nav className="navbar navbar-static-top navbar-inverse bg-primary">
    <span className={`navbar-brand mt-1 ${styles.title}`}>
      {'NFL Picks'}
    </span>
  </nav>

export default Header
