/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import [ BrowserRouter as Router, Route, Switch] from 'react-router-dom';

import {Footer, Blog, Possibility, Feature, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import {Cpu} from './pages';
import './App.css'



const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Cpu />
      </div>
      <Blog />
      <Footer />
    

    </div>
  )
}

export default App