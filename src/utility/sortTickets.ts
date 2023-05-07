interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
  ]
}

interface Checkbox {
  name: string
  id: string
  active: boolean
}

export default function sortTickets(
  tickets: Ticket[],
  checkboxes: Checkbox[],
  currentFilter: string,
): Ticket[] {
  // Filter stops
  const activeStops = checkboxes
    .map((checkbox, index) => {
      if (checkbox.active) {
        return index - 1
      }
      return null
    })
    .filter((stop) => stop !== null)

  const filteredTickets = tickets.filter((ticket) =>
    activeStops.some((stopCount) =>
      ticket.segments.every((segment) => segment.stops.length === stopCount),
    ),
  )

  // Sort tickets based on the current filter
  return filteredTickets.sort((a, b) => {
    switch (currentFilter) {
      case 'Самый дешёвый':
        return a.price - b.price
      case 'Самый быстрый':
        return (
          a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
          b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        )
      default:
        return 0
    }
  })
}
