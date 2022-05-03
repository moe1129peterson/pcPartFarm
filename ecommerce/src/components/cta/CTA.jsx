/* eslint-disable no-unused-expressions */
import React from 'react';
import Cpu from '../../pages/cpu/Cpu';
import { Route, Switch} from 'react-router-dom';
import './cta.css'; 

const Routes= ({cpuItems}) => {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Cpu cpuItems={cpuItems}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Routes; 