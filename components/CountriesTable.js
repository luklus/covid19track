import { useRef, useState } from 'react'
import styles from '../styles/CountriesTable.module.scss'

const CountriesTable = ({ dataCountries }) => {
  const [sort, setSort] = useState('country')
  const [sortUP, setSortUP] = useState(true)
  const tableReference = useRef(null)

  const setSortType = (sortType) => {
    tableReference.current.scrollIntoView({
      behavior: 'smooth',
    })

    if (sort === sortType) {
      setSortUP(!sortUP)
    }

    setSort(sortType)
  }

  const sortedCountries = () => {
    const countries = [...dataCountries]

    return countries.sort((a, b) => {
      const x = a[sort]
      const y = b[sort]

      if (sort === 'country') {
        return sortUP ? x.localeCompare(y) : y.localeCompare(x)
      }

      return sortUP ? x - y : y - x
    })
  }

  const tbody = sortedCountries().map((country) => (
    <tr key={country.country}>
      <td>{country.country}</td>
      <td>{country.cases}</td>
      <td>{country.todayCases}</td>
      <td>{country.recovered}</td>
      <td>{country.todayRecovered}</td>
      <td>{country.deaths}</td>
      <td>{country.todayDeaths}</td>
    </tr>
  ))

  return (
    <section className={styles.countriesTable}>
      <table ref={tableReference}>
        <thead>
          <tr>
            <th onClick={() => setSortType('country')}>Country</th>
            <th onClick={() => setSortType('cases')}>Cases</th>
            <th onClick={() => setSortType('todayCases')}>Today Cases</th>
            <th onClick={() => setSortType('recovered')}>Recovered</th>
            <th onClick={() => setSortType('todayRecovered')}>
              Today Recovered
            </th>
            <th onClick={() => setSortType('deaths')}>Deaths</th>
            <th onClick={() => setSortType('todayDeaths')}>Today Deaths</th>
          </tr>
        </thead>

        <tbody>{tbody}</tbody>
      </table>
    </section>
  )
}

export default CountriesTable
