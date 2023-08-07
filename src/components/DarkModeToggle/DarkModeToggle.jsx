"use client"
import React, { useContext } from 'react'
import styles from "./darkmodetoggle.module.css"
import { themeContext } from '../../context/themeContext'

const DarkModeToggle = () => {

  const {toggle, mode} = useContext(themeContext);
  return (
    <div onClick={toggle} className={styles.container}>
    <div className={styles.icon}>🌙</div>
    <div className={styles.icon}>🔆</div>
    <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"}} />
    </div>
  )
}

export default DarkModeToggle