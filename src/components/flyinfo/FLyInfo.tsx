import styles from './flyinfo.module.scss'

function FLyInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.header}>{'MOW - HKT'}</span>
        <span className={styles.details}>{'10:45 - 8:00'}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.header}>{'В пути'}</span>
        <span className={styles.details}>{'21ч 15м'}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.header}>{'2 пересадки'}</span>
        <span className={styles.details}>{'HKG, JNB'}</span>
      </div>
    </div>
  )
}

export default FLyInfo
