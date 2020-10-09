import styles from '../styles/Info.module.scss'

const Info = ({ data }) => (
  <section className={styles.info}>
    <div className={styles.item}>
      <p>Cases</p>
      <p>{data.cases}</p>
      <p>+ {data.todayCases}</p>
    </div>

    <div className={styles.item}>
      <p>Deaths</p>
      <p>{data.deaths}</p>
      <p>+ {data.todayDeaths}</p>
    </div>

    <div className={styles.item}>
      <p>Recovered</p>
      <p>{data.recovered}</p>
      <p>+ {data.todayRecovered}</p>
    </div>
  </section>
)

export default Info
