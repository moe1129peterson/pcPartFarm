import React from 'react'; 
import Cpu from '../cpu/Cpu';
import {Route, Switch} from "react-router-dom"; 

const Routes = ({cpuItems}) => {
    return(
        <div>
            <Switch>
                <Route path='/' exact>
                    <Cpu cpuItems={cpuItems} />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes; 