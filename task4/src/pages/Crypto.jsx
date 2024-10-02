// src/pages/Crypto.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './Crypto.css';

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
        );
        setCrypto(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="container">
      <h1>Cryptocurrency Prices</h1>
      <ul>
        {crypto.map((coin) => (
          <li key={coin.id}>
            {coin.name}: ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crypto;
