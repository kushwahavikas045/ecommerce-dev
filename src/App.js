import React, { Component } from 'react'
import Productlist from './components/product-list/Productlist';
import Header from './components/Header/Header';
import Productdetailspage from './components/Product-details/Productdetailspage';
import { BrowserRouter , Route} from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <Header />
         <Route exact  path='/' component={Productlist} />
         <Route path='/productdetails' component={Productdetailspage} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
