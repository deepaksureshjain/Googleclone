import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../pages/home'
import SearchPage from '../pages/SearchPage';

const App = () =>{
    
    return (
        //BEM Nameing convention 
        <div className="app">     
           <Router>
               <Switch>
                    <Route exact path="/" component={Home}/> 
                    <Route exact path="/search">
                        <SearchPage />
                    </Route>
               </Switch>
           </Router>
        
        </div>
    )
}

export default App;