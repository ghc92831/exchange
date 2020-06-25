import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import CurrencyExchange from './CurrencyExchange.js';
import CurrencyRate from './CurrencyRate.js';
import CurrencyTable from './CurrencyTable';
import HChart from './HChart.js';

const Exchange = () => {
  return (
    <div>
      <CurrencyExchange/>
    </div>
  )
}

const Table = () => {
  return (
    <div>
      <CurrencyTable/>
    </div>
  )
}

const HistoricalChart = () => {
  return (
    <div>
      <HChart />
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <div className='page-container'>
      <div className='content-wrap'>

        <Router>
          <div className='App'>
            <Header />
              <nav>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/CurrencyExchange'>Currency Exchange</Link>
                  </li>
                  <li>
                    <Link to='/CurrencyTable'>Currency Table</Link>
                  </li>
                  <li>
                    <Link to='/HChart'>Historical Chart</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path='/CurrencyExchange'>
                  <CurrencyExchange />
                </Route>
                <Route path='/CurrencyTable'>
                  <CurrencyTable />
                </Route>
                <Route path='/HChart'>
                  <HChart />
                </Route>
              </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
      </div>
    )
  }
}

export default App;
