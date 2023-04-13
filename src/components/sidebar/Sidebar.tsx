import styles from './sidebar.module.scss'

function Sidebar() {
  return (
    <div className={styles.filters}>
      <h3 className={styles['filters__header']}>Количество пересадок</h3>
      <label className={styles['filters__label']}>
        <input type='checkbox' />
        Всё
      </label>
      <label className={styles['filters__label']}>
        <input type='checkbox' />
        Без пересадки
      </label>
      <label className={styles['filters__label']}>
        <input type='checkbox' />1 пересадка
      </label>
      <label className={styles['filters__label']}>
        <input type='checkbox' />2 пересадки
      </label>
      <label className={styles['filters__label']}>
        <input type='checkbox' />3 пересадки
      </label>
    </div>
  )
}

export default Sidebar
