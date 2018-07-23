import React from 'react'

const Otsikko = ({ nimi }) => {
  return (
    <h1>{nimi}</h1>
  )
}

const Osa = ({ osa }) => {
  return (
    <p>{osa.nimi} {osa.tehtavia}</p>
  )
}

const Sisalto = ({ osat }) => {
  return (
    <div>
      {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
    </div>
  )
}

const Yhteensa = ({ osat }) => {
  const total = osat.reduce((sum,osa) => (sum + osa.tehtavia), 0)

  return (
    <div>
      yhteensä {total} tehtävää
    </div>
  )
}

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

export default Kurssi