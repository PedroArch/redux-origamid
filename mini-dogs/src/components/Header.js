import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../store/login'
import styles from '../styles/Header.module.scss'

function Header() {
  const { user, token } = useSelector(state => state.login)

  const loading = token.loading || user.loading

  const dispatch = useDispatch()

  return (
    <header>
      <h1 className={styles.title}>Mini dogs</h1>
      <button 
        onClick={() => dispatch(userLogout())}
        className={`
          ${styles.login}
          ${loading ? styles.loading : ''}
          ${user.data ? styles.loaded : ''}
          `}
        >

      </button>
    </header>
  )
}

export default Header
