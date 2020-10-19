import styles from '../styles/Info.module.scss'
import { printNumberToLocaleString } from '../functions/printNumberToLocaleString'

const Info = ({ data }) => {
  const dateTime = new Date(data.updated).toLocaleDateString('en-US', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    second: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <section className={styles.time}>
        <p>Update: {dateTime} </p>
      </section>

      <section className={styles.info}>
        <div className={styles.item}>
          <p>Cases</p>
          <p>{printNumberToLocaleString(data.cases)}</p>
          <p>Today: {printNumberToLocaleString(data.todayCases)}</p>
          <p>
            Per million: {printNumberToLocaleString(data.casesPerOneMillion)}
          </p>
        </div>

        <div className={styles.item}>
          <p>Deaths</p>
          <p>{printNumberToLocaleString(data.deaths)}</p>
          <p>Today: {printNumberToLocaleString(data.todayDeaths)}</p>
          <p>
            Per million: {printNumberToLocaleString(data.deathsPerOneMillion)}
          </p>
        </div>

        <div className={styles.item}>
          <p>Recovered</p>
          <p>{printNumberToLocaleString(data.recovered)}</p>
          <p>Today: {printNumberToLocaleString(data.todayRecovered)}</p>
          <p>
            Per million:{' '}
            {printNumberToLocaleString(data.recoveredPerOneMillion)}
          </p>
        </div>

        <div className={styles.item}>
          <p>Tests</p>
          <p>{printNumberToLocaleString(data.tests)}</p>
          <p>Today: n/a</p>
          <p>
            Per milion: {printNumberToLocaleString(data.testsPerOneMillion)}
          </p>
        </div>
      </section>
    </>
  )
}

export default Info
