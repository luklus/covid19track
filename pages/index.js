import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import BaseHero from '../components/BaseHero'
import BaseInfo from '../components/BaseInfo'

const Home = ({ dataCountries, dataGlobal }) => {
  const [code, setCode] = useState('PL')

  const selectedCountry = () =>
    code === ''
      ? dataGlobal
      : dataCountries.find((country) => country.countryInfo.iso2 === code)

  return (
    <>
      <Head>
        <title>Covid 19 Track</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseHero />

      <main className={styles.main}>
        <BaseInfo data={selectedCountry()} />
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
