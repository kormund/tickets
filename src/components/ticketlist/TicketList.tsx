import Ticket from '../ticket/Ticket'
import styles from './ticketList.module.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchAllTickets } from '../../store/ticketSlice'
import sortTickets from '../../utility/sortTickets'

function TicketList() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTickets())
  }, [dispatch])

  const { tickets, loadingTickets } = useAppSelector((state) => state.ticket)

  const checkboxes = useAppSelector((state) => state.checkboxes.checkboxes)

  const filters = useAppSelector((state) => state.filters)

  const howManyToShow = useAppSelector((state) => state.ticket.ticketsToShow)
  const activeFilter = filters.filter((el) => el.active)

  const sortedTickets = sortTickets(tickets, checkboxes, activeFilter[0].name, howManyToShow)

  return (
    <>
      {!sortedTickets.length && loadingTickets === 'succeeded' ? (
        <div className={styles.text}>Билеты не найдены. Выберите хотя бы один параметр слева</div>
      ) : null}
      {sortedTickets.map((ticket, index) => {
        return (
          <Ticket
            key={index}
            carrier={ticket.carrier}
            price={ticket.price}
            segments={ticket.segments}
          />
        )
      })}
    </>
  )
}

export default TicketList
