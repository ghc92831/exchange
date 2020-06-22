import React from 'react';
import { Link } from 'react-router-dom';

const countryList = [
    "GBP", "CAD", "USD", "AUD", "BGN", "BRL", "CHF", "CNY", "CZK", "DKK", "EUR", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "ZAR"
]


class CurrencyTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: "",
            rates: [],
            date: 'today',
            base: "USD",
        };
    this.handleBaseChange = this.handleBaseChange.bind(this);
    }



    fetchRequest = (base) => {
        fetch('https://api.exchangeratesapi.io/latest?base='+(base)).then((response) => {
            console.log(base);

         if (response.ok) {
          return response.json();
        }
        throw new Error('Request was either a 404 or 500');
         }).then((data) => {
                this.setState({
                    date: data.date,
                    rates: data.rates,
                    base: data.base,
                })
            console.log('json data', data);
            }).catch((error) => {
            console.log(error);
        })
    }

    handleBaseChange = (event) => {
        console.log("base changed");
        this.setState({value: event.target.value});
        const base = event.target.value;
        this.fetchRequest(base);
    }



    componentDidMount () {
        this.fetchRequest(this.state.base);
    }


    render() {
        return (
          <div id="table-rate">
              <div>
              <h1 id="c-table" className="tableheading">Currency Table</h1>
              <label className="d-inline">
                  Base Currency :
              <select onChange={this.handleBaseChange}>
                {countryList.map((country) => <option key={country} label={country} value={country}></option>)}
              </select>
              </label>
              <p className="table-info">Rates are current as of {this.state.date}</p>
              <table id="curtable" className="table-rates">
                <tbody>
                  <tr>
                    <th>Currency:</th>
                    <th>Value:</th>
                  </tr>
                      {countryList.map((country) =>
                      <tr key={country}>
                      <td>{country} </td>
                      <td>{this.state.rates[country]}</td>
                      </tr>
                      )}
                </tbody>
              </table>
              </div>
          </div>
        );
    }
}

export default CurrencyTable;
