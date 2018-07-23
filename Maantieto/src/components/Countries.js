import React from 'react'
import Country from  './Country'
import CountryAll from  './CountryAll'

class Countries extends React.Component {
  render() {
    const countries = 
      this.props.countries
      .filter(country => country.name.toLowerCase().includes(this.props.search.toLowerCase()))

    if (countries.length === 1) {
      return (
        <div>
          {countries.map(country => <CountryAll key={country.name} country={country} />)}
        </div>
      )
    } else if (countries.length <= 10) {
      return (
        <div>
          {countries.map(country => <Country key={country.name} country={country} setSearch={this.props.setSearch} />)}
        </div>
      )
    } else {
      return (
        <div>too many matches, specify another filter</div>
      )
    }
  }
}

export default Countries