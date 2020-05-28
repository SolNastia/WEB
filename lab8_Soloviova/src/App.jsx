import React, { useState, useEffect } from 'react';
import { interval, timer, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const API_BASE = 'https://cloud.iexapis.com/v1';

const stockSymbols = [
  'AAPL',
  'FB',
  'MSFT',
  'MSI',
  'NLS',
  'NMM',
  'NNN',
  'TGC'
];

export async function fetchStock(symbol) {
  const res = await fetch(`${API_BASE}/stock/${symbol}/quote?token=${process.env.REACT_APP_IEX_API_KEY}`);

  return res.json();
}

const prices$ = timer(0, 20000).pipe(
  switchMap(() => from(Promise.all(stockSymbols.map(fetchStock)))),
);

const timeFromLastUpdate$ = prices$.pipe(
  switchMap(() => {
    const timestamp = Date.now();

    return interval(100).pipe(
      map(() => ((Date.now() - timestamp) / 1000).toFixed(1))
    );
  })
);

function Header() {
  const [timeFromLastUpdate, setTimeFromLastUpdate] = useState('0.0');

  useEffect(() => {
    const subscription = timeFromLastUpdate$.subscribe(setTimeFromLastUpdate);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header>Time from last update: {timeFromLastUpdate}</header>
  );
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscription = prices$.subscribe((prices) => {
      setData(values => prices.map((quote, idx) => {
        const prevValue = values.find(v => v.symbol === quote.symbol) || quote;

        return {
          ...quote,
          difference: (prevValue.latestPrice - quote.latestPrice).toFixed(3)
        };
      }));
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <Header />
      {data.length
        ? (
          <table>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.symbol}</td>
                  <td>{item.companyName}</td>
                  <td>{item.latestPrice}</td>
                  <td>{item.difference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        : (
          <span>Loading...</span>
        )
      }
    </>
  );
}

export default App;
