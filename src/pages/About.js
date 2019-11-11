import React from 'react'
import logo from './../styles/logo.svg'
import './../styles/App.css'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'EMPTY',
    }
    this.changeUserName = this.changeUserName.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  changeUserName(event) {
    this.setState({ userName: event.target.value })
  }

  handleChangeName() {
    this.props.updateUserName(this.state.userName)
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h3>{this.state.userName}</h3>
          <p>{this.props.user.employerInfo.carrer}</p>
          <input
            type='text'
            placeholder='troca de nome'
            onChange={this.changeUserName}
            value={this.state.userName}
          ></input>
          <button type='button' onClick={this.handleChangeName}>
            Mudar Nome
          </button>
        </header>
      </div>
    )
  }
}

export default About
