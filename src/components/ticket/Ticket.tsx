import FLyInfo from '../flyinfo/FLyInfo'
import styles from './ticket.module.scss'
function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.header__price}>13 400₽</span>
        <img src={'https://pics.avs.io/99/36/BT.png'} alt={'BT'} />
      </div>
      <div className={styles.info}>
        <FLyInfo />
        <FLyInfo />
      </div>
    </div>
  )
}

export default Ticket
