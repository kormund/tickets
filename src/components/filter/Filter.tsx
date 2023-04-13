import styles from './filter.module.scss'

type FilterType = {
  name: string
  id: string
}

function Filter({ name, id }: FilterType) {
  return (
    <>
      <input type='radio' name={'filter'} defaultChecked id={id} readOnly />
      <label htmlFor={id} className={styles.filter__label}>
        {name}
      </label>
    </>
  )
}

export default Filter
