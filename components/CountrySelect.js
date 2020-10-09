import { useState } from 'react'
import styles from '../styles/CountrySelect.module.scss'

const CountrySelect = ({ code, countries, onSetCountryCode }) => {
  const [open, setOpen] = useState(false)
  const [find, setFind] = useState('')

  const setCountryCode = (code) => {
    onSetCountryCode(code)
    setFind('')
    setOpen(false)
  }

  const toggOpen = () => {
    setOpen(!open)

    if (!open) {
      setFind('')
    }
  }

  const countriesFiltered = () =>
    countries.filter((country) =>
      country.country.toLowerCase().includes(find.toLowerCase())
    )

  const countriesSelection = countriesFiltered().map((country) => (
    <div
      className={styles.countrySelect__item}
      key={country.country}
      onClick={() => setCountryCode(country.iso2)}
    >
      <div className={styles.countrySelect__flag}>
        <img alt="Flag" loading="lazy" src={country.flag} width="24" />
      </div>
      <div className={styles.countrySelect__name}>{country.country}</div>
    </div>
  ))

  const countrySelected = countries.find((country) => country.iso2 === code)

  return (
    <section className={styles.countrySelect}>
      <div
        className={styles.countrySelect__selected}
        onClick={() => toggOpen()}
      >
        <div className={styles.countrySelect__item}>
          <div className={styles.countrySelect__flag}>
            <img
              src={countrySelected.flag}
              alt="Flag"
              loading="lazy"
              width="24"
            />
          </div>
          <div className={styles.countrySelect__name}>
            {countrySelected.country}
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.countrySelect__selector}>
          <div className={styles.countrySelect__find}>
            <input
              autocomplete="off"
              onChange={(e) => setFind(e.target.value)}
              placeholder="Search"
              type="text"
              value={find}
            />
            <button onClick={() => toggOpen()}>
              <img
                src="/icons/close.svg"
                alt="Close"
                loading="lazy"
                width="24"
              />
            </button>
          </div>
          <div className={styles.countrySelect__list}>
            {countriesSelection.length > 0 ? (
              countriesSelection
            ) : (
              <div className={styles.countrySelect__item}>
                No search results for {find}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default CountrySelect
