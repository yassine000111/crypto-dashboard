"use client";
import React, { useEffect } from 'react';
import useCryptoStore from '../store/useCryptoStore';

const CryptoList = () => {
  const { cryptos, fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, [fetchCryptos]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Portfolio Dashboard</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id} className="mb-2">
            <div className="flex items-center">
              <img src={crypto.image} alt={crypto.name} className="w-10 h-10 mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{crypto.name}</h2>
                <p className="text-sm text-gray-500">${crypto.current_price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;