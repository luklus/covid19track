export const countryRepository = (data) => ({
  cases: data.cases.toLocaleString(),
  country: data?.country || null,
  countryInfo: data?.countryInfo || null,
  deaths: data.deaths.toLocaleString(),
  recovered: data.recovered.toLocaleString(),
  todayCases: data.todayCases.toLocaleString(),
  todayDeaths: data.todayDeaths.toLocaleString(),
  todayRecovered: data.todayRecovered.toLocaleString(),
  updated: data.updated,
})
