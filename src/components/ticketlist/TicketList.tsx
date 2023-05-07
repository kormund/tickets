import Ticket from '../ticket/Ticket'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchAllTickets } from '../../store/ticketSlice'
import sortTickets from '../../utility/sortTickets'

function TicketList() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTickets())
  }, [dispatch])

  const tickets = useAppSelector((state) => state.ticket.tickets)

  const checkboxes = useAppSelector((state) => state.checkboxes.checkboxes)

  const filters = useAppSelector((state) => state.filters)
  const activeFilter = filters.filter((el) => el.active)

  const sortedTickets = sortTickets(tickets, checkboxes, activeFilter[0].name)
  console.log(sortedTickets)
  return (
    <>
      <Ticket />
    </>
  )
}

export default TicketList
