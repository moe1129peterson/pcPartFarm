/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Footer, Blog, Possibility, Feature, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import {Cpu, Gpu} from './pages';
import './App.css'



const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Blog />
            </Route >
            <Route path='/cpu'>
              <Cpu />
            </Route >
            <Route path='/gpu'>
              <Gpu />
            </Route >
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App