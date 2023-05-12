import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import Mix from './components/container/mixContainer/Mix'
import Footer  from './components/footer/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mix />
        <Footer />
      </div>
    )
  }
}

export default App