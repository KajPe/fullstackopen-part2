import React from 'react'

const CountryAll = ({ country }) => {

  return (
    <div>
      <h2>{country.name} {country.nativeName}</h2>
      <div>capital: {country.capital}</div>
      <br />
      <div>population: {country.population}</div>
      <br />
      <div><img alt={'Flag of ' + country.name} style={{height:200}} src={country.flag} /></div>
    </div>
  )
}

export default CountryAll