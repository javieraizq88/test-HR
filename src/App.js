
import React from 'react'
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/views/home';
import injectContext from './components/store/appContext';

const App = props => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);