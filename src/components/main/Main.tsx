import FilterList from '../filterlist/FilterList'
import TicketList from '../ticketlist/TicketList'
import styles from './main.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { increaseAmountToShow } from '../../store/ticketSlice'
import ProgressBarWithValueLabel from '../progressbar/ProgressBar'

function Main() {
  const dispatch = useAppDispatch()
  const { loadingTickets } = useAppSelector((state) => state.ticket)
  const handleShowMore = () => {
    dispatch(increaseAmountToShow())
  }
  return (
    <main className={styles.main}>
      <FilterList />

      {loadingTickets !== 'succeeded' ? <ProgressBarWithValueLabel /> : null}
      <TicketList />
      <button className={styles.main__btn} onClick={handleShowMore}>
        Показать еще 5 билетов
      </button>
    </main>
  )
}

export default Main
