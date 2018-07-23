import React from 'react'
import Search from  './components/Search'
import Persons from  './components/Persons'
import PersonsService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      search: ''
    }
  }

  componentDidMount() {
    PersonsService
      .getAll()
      .then(persons => {
        this.setState({ persons: persons })
      })
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

  removeUser = (id) => {
    const person = this.state.persons.find(person => person.id === id)
    const result = window.confirm('poistetaanko ' + person.name)
    if (result) {
      PersonsService
        .remove(id)
        .then(response => {
          const persons = this.state.persons.filter(n => n.id !== id)
          this.setState({
            persons: persons
          })
        })
        .catch(error => {
          alert("Poistaminen epäonnistui")
        })
    }
  }

  addNewname = (event) => {
    event.preventDefault()
    const index = this.state.persons.findIndex(person => person.name === this.state.newName)

    if (index !== -1) {
      const person = this.state.persons[index]
      const id = person.id

      const result = window.confirm(this.state.newName + ' on jo luettelossa, korvataanko vanha numero uudella?')
      if (result) {
        const personObject = {
          name: this.state.newName,
          number: this.state.newNumber
        }

        PersonsService
          .update(id, personObject)
          .then(response => {
            const persons = this.state.persons.map(person => person.id !== id ? person : response)
            this.setState({
              persons: persons,
              newName: '',
              newNumber: ''
            })
          })
          .catch(error => {
            alert('Tietokannan päivitys epäonnistui')
          })
      }
      return
    }

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    PersonsService
      .create(personObject)
      .then(newPerson => {
        this.setState({
          persons: this.state.persons.concat(newPerson),
          newName: '',
          newNumber: ''
        })
      })
      .catch(error => {
        alert('Tietokantaan kirjoitus epäonnistui')
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
        <Persons persons={this.state.persons} search={this.state.search} removeUser={this.removeUser} />        
      </div>
    )
  }
}

export default App