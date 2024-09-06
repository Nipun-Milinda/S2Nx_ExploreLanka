'use client';

import React, { useState, useEffect } from 'react';
import MobileTextInput from '@/components/mobileTextInput';
import { Button, Checkbox } from '@material-tailwind/react';
import currencies from './currencies-with-flags.json';
import CustomDropdown from './customDropdown';
import { CSSTransition } from 'react-transition-group';
import './WalletDetails.css';

const WalletDetails = () => {
  const [walletId, setWalletId] = useState<string>('');
  const [currency, setCurrency] = useState<string>('USD');
  const [amount, setAmount] = useState<string>('');
  const [currencyData, setCurrencyData] = useState<any[]>([]);
  const [creditCardAvailable, setCreditCardAvailable] =
    useState<boolean>(false);

  useEffect(() => {
    setCurrencyData(currencies);
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="w-full px-3 my-6 flex flex-col">
        <p className="text-3xl font-semibold text-oceanBlue text-left">
          Wallet Details
        </p>

        <div className="w-full my-4">
          <MobileTextInput label="Wallet ID" />
        </div>

        <div className="w-full my-4">
          <p className="text-xl font-normal">Money Available on Arrival</p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <CustomDropdown
              currencies={currencyData}
              selectedCurrency={currency}
              onCurrencyChange={setCurrency}
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded-md p-2 flex-grow bg-gray-200"
              placeholder="Amount"
            />
          </div>
        </div>

        <div className="w-full my-2 flex items-center space-x-4">
          <label className="text-xl font-normal">Credit card available?</label>
          <Checkbox
            checked={creditCardAvailable}
            onChange={(e) => setCreditCardAvailable(e.target.checked)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <CSSTransition
          in={creditCardAvailable}
          timeout={300}
          classNames="card-input"
          unmountOnExit
        >
          <div className="w-full my-2">
            <div className="w-full my-2 bg-gray-200 p-4 rounded-lg">
              <div className="w-full my-2">
                <MobileTextInput label="Name of the card" />
              </div>
              <div className="w-full my-2">
                <MobileTextInput label="Amount Spent" />
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>

      <div className="w-full p-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
        <Button
          color="blue"
          fullWidth
          style={{ backgroundColor: '#094b59' }}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Next
        </Button>
        <Button
          color="white"
          fullWidth={true}
          style={{
            borderColor: '#094b59',
            color: '#094b59',
            borderWidth: '3px',
          }}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default WalletDetails;
