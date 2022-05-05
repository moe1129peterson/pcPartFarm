/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../../ecommerce/src/assets/data/cpu'
import {Footer, Blog, Possibility, Feature, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import {Cpu, Gpu, Mobo, Cart, Routes, Contact} from './pages';
import './App.css'
import { MdProductionQuantityLimits } from 'react-icons/md';



const App = () => {
  const {cpuItems} = data;
  const [cartItems, setCartItems] = useState([]);

  //Trying to createOnlick event but did not work out 

  // const handleAddCpu =(cpu) =>{
  //   const CpuExist = cartItems.find((item) => item.id === item.id);
  //   if(CpuExist){
  //     setCartItems(
  //       cartItems.map((item)=>
  //       item.id === cpu.id ? 
  //       {...CpuExist, quantity: CpuExist.quantity +1}: item)        
  //       );
  //   } else{
  //     setCartItems([...cartItems, {...cpu, quantity: 1}])
  //   }
  // }
  
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
            <Route path='/mobo'>
              <Mobo />
            </Route >
            <Route path='/cart' exact>
              <Cart cartItems={cartItems}/>
            </Route>
            <Route path='/contact'>
              <Contact/>
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