import React from 'react'
import axios from 'axios'
import Search from  './components/Search'
import Countries from './components/Countries'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      search: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  setSearch = (s) => {
    this.setState({ 
      search: s
    })
  }

  render() {
    return (
      <div>
        <Search search={this.state.search} setSearch={this.setSearch} />
        <Countries countries={this.state.countries} search={this.state.search} setSearch={this.setSearch} />        
      </div>
    )
  }
}

export default App