import React, {Fragment} from 'react';
import classNames from "classnames";

const CryptoList = ({ currencies }) => (
  <ul>
    {currencies.map((currency) => (
      <li key={currency.id} className= {classNames('items')}>
        <h1>
          {currency.name} ({currency.symbol})
        </h1>
        <p>{currency.quotes.EUR.price.toFixed(2)} €</p>
      </li>
    ))}
  </ul>
);

const CryptoListV2 = ({currencies}) =>{
    <ul>
        {
            currencies.map( currency => (
                <CryptoListItem key={currency.id} name={currency.name}
                symbol={currency.symbol}
                quotes={currency.quotes}/>
            ))
        }
    </ul>
}

const CryptoListItem = ({name, symbol, quotes})=>{
    <li >
        <h1>
          {name} ({symbol})
        </h1>
        <p>{quotes.EUR.price.toFixed(2)} €</p>
      </li>
}

const cryptos = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    quotes: { EUR: { price: 7179.92084586 } },
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    quotes: { EUR: { price: 595.218568203 } },
  },
  {
    id: 3,
    name: 'Litecoin',
    symbol: 'LTC',
    quotes: { EUR: { price: 117.690716234 } },
  },
];

export default class CryptoListComp extends React.Component {
  render() {
    return (
        <><CryptoList currencies={cryptos} /></>
    );
  }
}