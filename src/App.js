import React from 'react'
import './App.css';
import { default as Header} from './pages/header/header.container'
import HomeComp from './pages/home/home.comp'
import ShopComp from "./pages/shops/shop.comp";
import CheckoutPage from "./pages/checkout/checkout.comp"

import { Switch,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeComp} />
        <Route path="/shop" component={ShopComp} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </>
  );
}

export default App;
