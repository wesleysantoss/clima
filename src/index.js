import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
import Page404 from './pages/page404';
import store from './store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/sobre" exact={true} component={About} />
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
