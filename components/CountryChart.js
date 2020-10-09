import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const CountryChart = ({ code }) => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const respHistory = await fetch(
        `https://api.covid19api.com/total/dayone/country/${code}`
      )
      const dataHistory = await respHistory.json()

      setHistory(dataHistory)
    }

    fetchData()
  }, [code])

  const countryHistory = () => {
    let prevConfirmed = 0
    const dataConfirmed = []
    const labels = history.map((day) => day.Date)

    history.forEach((item) => {
      dataConfirmed.push(item.Confirmed - prevConfirmed)
      prevConfirmed = item.Confirmed
    })

    return {
      labels: [...labels],

      datasets: [
        {
          backgroundColor: '#42A5F5',
          data: dataConfirmed,
          fill: false,
          label: 'Cases',
        },
      ],
    }
  }

  return (
    <section>
      <Bar
        data={countryHistory()}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
        height={400}
      />
    </section>
  )
}

export default CountryChart
