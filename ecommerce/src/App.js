/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../../ecommerce/src/assets/data/cpu'
import {Footer, Blog, Possibility, Feature, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import {Cpu, Gpu, Cart, Routes} from './pages';
import './App.css'



const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
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
            <Route path='/cart' exact>
              <Cart cartItems={cartItems}/>
            </Route>
          </Switch>
        </div>
        {/* <Review /> */}
        <Brand />
        <Footer />
      </div>
    </Router>
  )
}

export default App