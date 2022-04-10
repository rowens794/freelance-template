import React from 'react'
import styles from './devices.module.css'

type Props = {
  children: any
}

export default function ipad({ children }: Props) {
  return (
    <>
      <div
        className={`${styles['marvel-device']} ${styles['iphone-x']} absolute -left-[50px] -top-[107px] scale-75`}
      >
        <div className={styles.notch}>
          <div className={styles.camera}></div>
          <div className={styles.speaker}></div>
        </div>
        <div className={styles['top-bar']}></div>
        <div className={styles.sleep}></div>
        <div className={styles['bottom-bar']}></div>
        <div className={styles.volume}></div>
        <div className={styles.overflow}>
          <div className={`${styles['shadow--tr']} ${styles['shadow']}`}></div>
          <div className={`${styles['shadow--tl']} ${styles['shadow']}`}></div>
          <div className={`${styles['shadow--br']} ${styles['shadow']}`}></div>
          <div className={`${styles['shadow--bl']} ${styles['shadow']}`}></div>
        </div>
        <div className={styles['inner-shadow']}></div>
        <div className={`${styles.screen}`}>
          <div className="mt-12">{children}</div>
        </div>
      </div>
    </>
  )
}
