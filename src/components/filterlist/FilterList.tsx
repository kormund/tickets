import Filter from '../filter/Filter'
import styles from './filterlist.module.scss'
function FilterList() {
  return (
    <div className={styles.filter}>
      <Filter name={'Самый дешевый'} id={'cheap'} />
      <Filter name={'Самый быстрый'} id={'fast'} />
      <Filter name={'Оптимальный'} id={'optimal'} />
    </div>
  )
}

export default FilterList
