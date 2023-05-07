import styles from './flyinfo.module.scss'
import { getHoursAndMinutes } from '../../utility/getHoursAndMinutes'
import formatStops from '../../utility/formatStops'

export interface FlyInfoType {
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
}

function FlyInfo({ origin, date, duration, stops, destination }: FlyInfoType) {
  const time = new Date(date)
  const destinationTime = new Date(time.getTime() + duration * 60 * 1000)

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.header}>{`${origin} - ${destination}`}</span>
        <span
          className={styles.details}
        >{`${time.getHours()}:${time.getMinutes()} - ${destinationTime.getHours()}:${destinationTime
          .getMinutes()
          .toString()
          .padStart(2, '0')}`}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.header}>{'В пути'}</span>
        <span className={styles.details}>{getHoursAndMinutes(duration)}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.header}>{formatStops(stops)}</span>
        <span className={styles.details}>{stops.join(', ') || ''}</span>
      </div>
    </div>
  )
}

export default FlyInfo
