import React , {useReducer, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import {ProductReducer, AppContext, initialState} from './context/appContext'
import { ROUTE } from './types/route';
import  TopNav  from './components/TopNav'
import { Container } from 'semantic-ui-react'
import { INIT_PRODUCTS, InitFeatures, UpdateProductFilters } from './types/action'
import { getProductList, getProductOptions } from "./data/api";

function App() {

  const [state, dispatch] = useReducer(ProductReducer, initialState)

  useEffect(() => {
    
    getProductList().then(({data}) => {
      dispatch({
        type: INIT_PRODUCTS,
        payload: data.products
      })
    })
    getProductOptions({categories:["Best Seller"], size:3}).then(({data}) => {
      dispatch(InitFeatures(data.products))
    })

  }, []);


  return (
   <AppContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <Container>
        <TopNav />
        <Switch>
          <Route component={AllProductsPage} path={ROUTE.ALL_PRODUCTS} />
          <Route component={CheckoutPage} path={ROUTE.CHECKOUT}/>
          <Route component={HomePage} path={ROUTE.HOME}/>
          <Redirect to={ROUTE.HOME}/>
        </Switch>
      </Container>
    </BrowserRouter>
    </AppContext.Provider>
    
    
   
  );
}

export default App;
