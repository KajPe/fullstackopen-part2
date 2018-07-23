import React from 'react'
import Search from  './components/Search'
import Persons from  './components/Persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      search: ''
    }
  }

  setSearch = (s) => {
    this.setState({ 
      search: s
    })
  }

  handleNumberChange = (event) => {
    this.setState({ 
      newNumber: event.target.value
    })
  }

  handleNewnameChange = (event) => {
    this.setState({ 
      newName: event.target.value
    })
  }

  addNewname = (event) => {
    event.preventDefault()
    const index = this.state.persons.findIndex(person => person.name === this.state.newName)

    if (index !== -1) {
      alert(this.state.newName + ' on jo luettelossa')
      return
    }

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const persons = this.state.persons.concat(personObject)

    this.setState({
      persons: persons,
      newName: '',
      newNumber: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Search search={this.state.search} setSearch={this.setSearch} />
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addNewname}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNewnameChange} />
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <Persons persons={this.state.persons} search={this.state.search} />        
      </div>
    )
  }
}

export default App