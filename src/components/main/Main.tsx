import FilterList from '../filterlist/FilterList'
import TicketList from '../ticketlist/TicketList'
import styles from './main.modules.scss'

function Main() {
  return (
    <main className={styles.main}>
      <FilterList />
      <TicketList />
    </main>
  )
}

export default Main
