import React from 'react'
import logo from './../styles/logo.svg'
import './../styles/App.css'

function About(props) {
  const { user } = props

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <h3>{user.personalInfo.name}</h3>
        <p>{user.employerInfo.carrer}</p>
      </header>
    </div>
  )
}

export default About
