import FilterList from '../filterlist/FilterList'
import TicketList from '../ticketlist/TicketList'
import styles from './main.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <FilterList />
      <TicketList />
      <button className={styles.main__btn}>Показать еще 5 билетов</button>
    </main>
  )
}

export default Main
