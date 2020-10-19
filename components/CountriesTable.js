import { useRef, useState } from 'react'
import styles from '../styles/CountriesTable.module.scss'

import { printNumberToLocaleString } from '../functions/printNumberToLocaleString'

const CountriesTable = ({ dataCountries, onSetCountryCode }) => {
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
      <td>
        <span onClick={() => onSetCountryCode(country.countryInfo.iso2)}>
          {country.country}
        </span>
      </td>
      <td>{printNumberToLocaleString(country.cases)}</td>
      <td>{printNumberToLocaleString(country.todayCases)}</td>
      <td>{printNumberToLocaleString(country.casesPerOneMillion)}</td>
      <td>{printNumberToLocaleString(country.recovered)}</td>
      <td>{printNumberToLocaleString(country.todayRecovered)}</td>
      <td>{printNumberToLocaleString(country.deaths)}</td>
      <td>{printNumberToLocaleString(country.todayDeaths)}</td>
      <td>{printNumberToLocaleString(country.deathsPerOneMillion)}</td>
      <td>{printNumberToLocaleString(country.tests)}</td>
      <td>{printNumberToLocaleString(country.testsPerOneMillion)}</td>
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
            <th onClick={() => setSortType('casesPerOneMillion')}>
              Cases / Mill.
            </th>
            <th onClick={() => setSortType('recovered')}>Recovered</th>
            <th onClick={() => setSortType('todayRecovered')}>
              Today Recovered
            </th>
            <th onClick={() => setSortType('deaths')}>Deaths</th>
            <th onClick={() => setSortType('todayDeaths')}>Today Deaths</th>
            <th onClick={() => setSortType('deathsPerOneMillion')}>
              Deaths / Mill.
            </th>
            <th onClick={() => setSortType('tests')}>Tests</th>
            <th onClick={() => setSortType('testsPerOneMillion')}>
              Tests / Mill.
            </th>
          </tr>
        </thead>

        <tbody>{tbody}</tbody>
      </table>
    </section>
  )
}

export default CountriesTable
