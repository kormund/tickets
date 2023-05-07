import FlyInfo from '../flyinfo/FlyInfo'
import styles from './ticket.module.scss'

export interface TicketType {
  carrier: string
  price: number
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
function Ticket({ carrier, price, segments }: TicketType) {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.header__price}>{price} ₽</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`${carrier}`} />
      </div>
      <div className={styles.info}>
        {segments.map((segment, index) => {
          return (
            <FlyInfo
              key={index}
              origin={segment.origin}
              destination={segment.destination}
              date={segment.date}
              stops={segment.stops}
              duration={segment.duration}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Ticket
