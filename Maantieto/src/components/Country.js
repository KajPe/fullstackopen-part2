import React from 'react'

class Country extends React.Component {
  handleClick = (event) => {
    this.props.setSearch(this.props.country.name)
  }
  
  render() {
    return(
      <div onClick={this.handleClick}>{this.props.country.name}</div>
    )
  }
}

export default Country