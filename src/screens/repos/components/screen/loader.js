import React from 'react'
import style from './loader.css'

const Loader = () => (
  <div className={style.container}>
    <div className={style.loader} />
    <p>Getting the repositories list from Github!</p>
  </div>
)

export default Loader
