import styles from '../styles/BaseInfo.module.scss'

const BaseInfo = ({ data }) => (
  <section className={styles.info}>
    <div className={styles.item}>
      <p>Przypadki</p>
      <p>{data.cases}</p>
      <p>+ {data.todayCases}</p>
    </div>

    <div className={styles.item}>
      <p>Zgony</p>
      <p>{data.deaths}</p>
      <p>+ {data.todayDeaths}</p>
    </div>

    <div className={styles.item}>
      <p>Ozdrowienia</p>
      <p>{data.recovered}</p>
      <p>+ {data.todayRecovered}</p>
    </div>
  </section>
)

export default BaseInfo
