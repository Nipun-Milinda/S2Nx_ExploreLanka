'use client';

import React, { useState } from 'react';
import { Button, Checkbox } from '@material-tailwind/react';
import MobileTextInput from '@/components/mobileTextInput';
import { PlusIcon } from '@heroicons/react/solid';
import { CSSTransition } from 'react-transition-group';
import './EmergencyContacts.css';

const EmergencyContacts = () => {
  const [contactName, setContactName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [primaryContact, setPrimaryContact] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>('');
  const [relationship, setRelationship] = useState<string>('');
  const [houseNumber, setHouseNumber] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [showSriLankaContact, setShowSriLankaContact] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="w-full px-3 my-6 flex flex-col">
        <p className="text-3xl font-semibold text-oceanBlue text-left">
          Emergency Contacts
        </p>

        <div className="w-full my-4">
          <p className="text-xl mb-1">Own Country</p>
          <div className="w-full my-2 bg-gray-200 p-4 rounded-lg">
            <div className="w-full my-2">
              <MobileTextInput label="Name" />
            </div>
            <p className="text-xl mb-1">Mobile number</p>

            <div className="w-full my-2 flex space-x-2">
              <select
                className="w-1/3 p-2 border rounded"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="">Select Country Code</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="text"
                className="w-2/3 p-2 border rounded"
                placeholder="Telephone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="w-full my-2">
              <MobileTextInput
                label="Relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              />
            </div>
            <div className="w-full my-4">
              <p className="text-xl mb-1">Address of Employee</p>
              <div className="w-full my-2 bg-gray-200 p-4 rounded-lg border border-gray-400">
                <div className="w-full my-2">
                  <MobileTextInput
                    label="House Number"
                    value={houseNumber}
                    onChange={(e) => setHouseNumber(e.target.value)}
                  />
                </div>
                <div className="w-full my-2">
                  <MobileTextInput
                    label="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                <div className="w-full my-2">
                  <MobileTextInput
                    label="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full my-2 flex items-center justify-end">
          <div className="border-4 border-[#094b59] rounded-full p-1">
            <PlusIcon className="h-6 w-6 text-[#094b59] stroke-1" />
          </div>
        </div>

        <div className="w-full my-2 flex items-center space-x-4">
          <label className="text-xl font-normal">Sri Lanka (If Any)</label>
          <Checkbox
            checked={showSriLankaContact}
            onChange={(e) => setShowSriLankaContact(e.target.checked)}
          />
        </div>

        <CSSTransition
          in={showSriLankaContact}
          timeout={300}
          classNames="card-input"
          unmountOnExit
        >
          <div className="w-full my-2 bg-gray-200 p-4 rounded-lg">
            <div className="w-full my-2">
              <MobileTextInput label="Name" />
            </div>
            <p className="text-xl mb-1">Mobile number</p>

            <div className="w-full my-2 flex space-x-2">
              <select
                className="w-1/3 p-2 border rounded"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="">Select Country Code</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="text"
                className="w-2/3 p-2 border rounded"
                placeholder="Telephone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="w-full my-2">
              <MobileTextInput
                label="Relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              />
            </div>
            <div className="w-full my-4">
              <p className="text-xl mb-1">Address of Employee</p>
              <div className="w-full my-2 bg-gray-200 p-4 rounded-lg border border-gray-400">
                <div className="w-full my-2">
                  <MobileTextInput
                    label="House Number"
                    value={houseNumber}
                    onChange={(e) => setHouseNumber(e.target.value)}
                  />
                </div>
                <div className="w-full my-2">
                  <MobileTextInput
                    label="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                <div className="w-full my-2">
                  <MobileTextInput
                    label="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>

      <div className="w-full p-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
        <Button color="blue" fullWidth style={{ backgroundColor: '#094b59' }}>
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
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default EmergencyContacts;
