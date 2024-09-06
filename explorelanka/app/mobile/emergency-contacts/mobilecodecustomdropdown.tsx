/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

interface Currency {
  code: string;
  flag: string;
}

interface CustomDropdownProps {
  currencies: Currency[];
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  currencies,
  selectedCurrency,
  onCurrencyChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedCurrencyData = currencies.find(
    (currency) => currency.code === selectedCurrency
  );

  return (
    <div className="relative inline-block w-full md:w-48">
      <button
        className="border border-gray-300 rounded-md p-2 bg-gray-200 w-full text-left flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span className="flex items-center">
          {selectedCurrencyData && (
            <img
              src={selectedCurrencyData.flag}
              alt={selectedCurrencyData.code}
              className="inline-block w-4 h-4 mr-2"
            />
          )}
          {selectedCurrencyData?.code}
        </span>
        <span className="ml-2">&#9662;</span>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10 max-h-40 overflow-y-auto">
          {currencies.map((currency) => (
            <div
              key={currency.code}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onCurrencyChange(currency.code);
                setIsOpen(false);
              }}
            >
              <img
                src={currency.flag}
                alt={currency.code}
                className="inline-block w-4 h-4 mr-2"
              />
              {currency.code}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
