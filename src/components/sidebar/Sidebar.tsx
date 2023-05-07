import styles from './sidebar.module.scss'
import { CheckboxType, toggleCheckbox } from '../../store/checkboxesSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

function Sidebar() {
  const checkboxes = useAppSelector((state) => state.checkboxes.checkboxes)
  const dispatch = useAppDispatch()

  return (
    <div className={styles.checkboxes}>
      <h3 className={styles['checkboxes__header']}>Количество пересадок</h3>

      {checkboxes.map((el: CheckboxType) => {
        return (
          <label key={el.id} className={styles['checkboxes__label']}>
            {el.name}
            <input
              type='checkbox'
              checked={el.active}
              onChange={() => dispatch(toggleCheckbox(el))}
            />
            <span className={styles.checkmark}></span>
          </label>
        )
      })}
    </div>
  )
}

export default Sidebar
