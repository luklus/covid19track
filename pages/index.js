import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CountriesTable from '../components/CountriesTable'
import CountryChart from '../components/CountryChart'
import CountrySelect from '../components/CountrySelect'
import Hero from '../components/Hero'
import Info from '../components/Info'

const Home = ({ dataCountries, dataGlobal }) => {
  const [code, setCode] = useState('')

  const countries = () => {
    const countriesTransformed = dataCountries.map(
      ({ country, countryInfo: { flag, iso2 } }) => ({
        country,
        flag,
        iso2,
      })
    )

    const worldTransformed = [
      {
        country: 'World',
        flag: 'https://disease.sh/assets/img/flags/unknown.png',
        iso2: '',
      },
    ]
    return [...worldTransformed, ...countriesTransformed]
  }

  const selectedCountry = () =>
    code === ''
      ? dataGlobal
      : dataCountries.find((country) => country.countryInfo.iso2 === code)

  const setCountryCode = (code) => {
    setCode(code)
  }

  return (
    <>
      <Head>
        <title>Covid 19 Track</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <main className={styles.main}>
        <CountrySelect
          code={code}
          countries={countries()}
          onSetCountryCode={setCountryCode}
        />
        <Info data={selectedCountry()} />

        {code ? (
          <CountryChart code={code} />
        ) : (
          <CountriesTable dataCountries={dataCountries} />
        )}
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const respDataGlobal = await fetch('https://disease.sh/v3/covid-19/all')
  const dataGlobal = await respDataGlobal.json()

  const respDataCountries = await fetch(
    'https://disease.sh/v3/covid-19/countries'
  )
  const dataCountries = await respDataCountries.json()

  return {
    props: { dataCountries, dataGlobal },
  }
}

export default Home
