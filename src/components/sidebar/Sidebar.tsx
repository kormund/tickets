import styles from './sidebar.module.scss'

function Sidebar() {
  return (
    <div className={styles.checkboxes}>
      <h3 className={styles['checkboxes__header']}>Количество пересадок</h3>
      <label className={styles['checkboxes__label']}>
        Всё
        <input type='checkbox' />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles['checkboxes__label']}>
        <input type='checkbox' />
        <span className={styles.checkmark}></span>
        Без пересадки
      </label>
      <label className={styles['checkboxes__label']}>
        <input type='checkbox' />
        <span className={styles.checkmark}></span>1 пересадка
      </label>
      <label className={styles['checkboxes__label']}>
        <input type='checkbox' />
        <span className={styles.checkmark}></span>2 пересадки
      </label>
      <label className={styles['checkboxes__label']}>
        <input type='checkbox' />
        <span className={styles.checkmark}></span>3 пересадки
      </label>
    </div>
  )
}

export default Sidebar
