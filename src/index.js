import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
import Page404 from './pages/page404';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/sobre" exact={true} component={About} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
