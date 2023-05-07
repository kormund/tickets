import styles from './filter.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { selectFilter } from '../../store/filterSlice'

type FilterType = {
  name: string
  id: string
  active: boolean
}

function Filter({ name, id, active }: FilterType) {
  const dispatch = useAppDispatch()
  const handleFilterChange = () => {
    dispatch(selectFilter(id))
  }
  return (
    <>
      <input
        type='radio'
        name={'filter'}
        checked={active}
        id={id}
        readOnly
        onChange={handleFilterChange}
      />
      <label htmlFor={id} className={styles.filter__label}>
        {name}
      </label>
    </>
  )
}

export default Filter
