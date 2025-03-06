import React from 'react';
import { Link, Route, Switch } from 'wouter';
import Counter from './components/Counter';
import HomePage from './components/Home';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/shopping-cart">
          <div className="shop-section">
            <ProductList />
            <ShoppingCart />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
