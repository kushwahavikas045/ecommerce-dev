import React, { Component } from 'react'
import Productlist from './components/product-list/Productlist';
import Header from './components/Header/Header';
import Productdetailspage from './components/Product-details/Productdetailspage';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        
         
        <Route exact path='/'   component={Header} /><Switch>
         <Route  path='/productlist'   component={Productlist} />
         <Route path='/productdetails' component={Productdetailspage} />
         </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
