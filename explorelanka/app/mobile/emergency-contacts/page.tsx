'use client';

import React, { useState, useRef } from 'react';
import { Button, Checkbox } from '@material-tailwind/react';
import MobileTextInput from '@/components/mobileTextInput';
import { PlusIcon, XIcon } from '@heroicons/react/solid';
import { CSSTransition } from 'react-transition-group';
import { message } from 'antd';
import './EmergencyContacts.css';
import Link from 'next/link';

const EmergencyContacts = () => {
  const [ownContactName, setOwnContactName] = useState<string>('');
  const [ownCountryCode, setOwnCountryCode] = useState<string>('');
  const [ownPhoneNumber, setOwnPhoneNumber] = useState<string>('');
  const [ownRelationship, setOwnRelationship] = useState<string>('');
  const [ownHouseNumber, setOwnHouseNumber] = useState<string>('');
  const [ownStreet, setOwnStreet] = useState<string>('');
  const [ownCity, setOwnCity] = useState<string>('');
  const [ownPostalCode, setOwnPostalCode] = useState<string>('');

  const [sriLankaContactName, setSriLankaContactName] = useState<string>('');
  const [sriLankaCountryCode, setSriLankaCountryCode] = useState<string>('');
  const [sriLankaPhoneNumber, setSriLankaPhoneNumber] = useState<string>('');
  const [sriLankaRelationship, setSriLankaRelationship] = useState<string>('');
  const [sriLankaHouseNumber, setSriLankaHouseNumber] = useState<string>('');
  const [sriLankaStreet, setSriLankaStreet] = useState<string>('');
  const [sriLankaCity, setSriLankaCity] = useState<string>('');
  const [sriLankaPostalCode, setSriLankaPostalCode] = useState<string>('');

  const [showSriLankaContact, setShowSriLankaContact] =
    useState<boolean>(false);
  const [ownDetailsArray, setOwnDetailsArray] = useState<any[]>([]);
  const [sriLankaDetailsArray, setSriLankaDetailsArray] = useState<any[]>([]);

  const sriLankaContactRef = useRef(null);

  const validateDetails = (isOwnCountry: boolean) => {
    if (isOwnCountry) {
      if (
        !ownContactName ||
        !ownCountryCode ||
        !ownPhoneNumber ||
        !ownRelationship ||
        !ownHouseNumber ||
        !ownStreet ||
        !ownCity ||
        !ownPostalCode
      ) {
        message.error('Please fill in all the fields.');
        return false;
      }

      const isDuplicateName = ownDetailsArray.some(
        (detail) => detail.contactName === ownContactName
      );

      if (isDuplicateName) {
        message.error('A contact with this name already exists.');
        return false;
      }

      const isDuplicatePhone = ownDetailsArray.some(
        (detail) => detail.phoneNumber === ownPhoneNumber
      );

      if (isDuplicatePhone) {
        message.error('A contact with this phone number already exists.');
        return false;
      }
    } else {
      if (
        !sriLankaContactName ||
        !sriLankaCountryCode ||
        !sriLankaPhoneNumber ||
        !sriLankaRelationship ||
        !sriLankaHouseNumber ||
        !sriLankaStreet ||
        !sriLankaCity ||
        !sriLankaPostalCode
      ) {
        message.error('Please fill in all the fields.');
        return false;
      }

      const isDuplicateName = sriLankaDetailsArray.some(
        (detail) => detail.contactName === sriLankaContactName
      );

      if (isDuplicateName) {
        message.error('A contact with this name already exists.');
        return false;
      }

      const isDuplicatePhone = sriLankaDetailsArray.some(
        (detail) => detail.phoneNumber === sriLankaPhoneNumber
      );

      if (isDuplicatePhone) {
        message.error('A contact with this phone number already exists.');
        return false;
      }
    }

    return true;
  };

  const logDetails = (isOwnCountry: boolean) => {
    if (!validateDetails(isOwnCountry)) return;

    if (isOwnCountry) {
      const newDetails = {
        contactName: ownContactName,
        countryCode: ownCountryCode,
        phoneNumber: ownPhoneNumber,
        relationship: ownRelationship,
        houseNumber: ownHouseNumber,
        street: ownStreet,
        city: ownCity,
        postalCode: ownPostalCode,
      };

      console.log(newDetails);
      setOwnDetailsArray((prevDetails) => [...prevDetails, newDetails]);

      // Clear all input fields
      clearFields(true);
    } else {
      const newDetails = {
        contactName: sriLankaContactName,
        countryCode: sriLankaCountryCode,
        phoneNumber: sriLankaPhoneNumber,
        relationship: sriLankaRelationship,
        houseNumber: sriLankaHouseNumber,
        street: sriLankaStreet,
        city: sriLankaCity,
        postalCode: sriLankaPostalCode,
      };

      console.log(newDetails);
      setSriLankaDetailsArray((prevDetails) => [...prevDetails, newDetails]);

      // Clear all input fields
      clearFields(false);
    }
  };

  const clearFields = (isOwnCountry: boolean) => {
    if (isOwnCountry) {
      setOwnContactName('');
      setOwnCountryCode('');
      setOwnPhoneNumber('');
      setOwnRelationship('');
      setOwnHouseNumber('');
      setOwnStreet('');
      setOwnCity('');
      setOwnPostalCode('');
    } else {
      setSriLankaContactName('');
      setSriLankaCountryCode('');
      setSriLankaPhoneNumber('');
      setSriLankaRelationship('');
      setSriLankaHouseNumber('');
      setSriLankaStreet('');
      setSriLankaCity('');
      setSriLankaPostalCode('');
    }
  };

  const fillDetails = (details: any, isOwnCountry: boolean) => {
    if (isOwnCountry) {
      setOwnContactName(details.contactName);
      setOwnCountryCode(details.countryCode);
      setOwnPhoneNumber(details.phoneNumber);
      setOwnRelationship(details.relationship);
      setOwnHouseNumber(details.houseNumber);
      setOwnStreet(details.street);
      setOwnCity(details.city);
      setOwnPostalCode(details.postalCode);
    } else {
      setSriLankaContactName(details.contactName);
      setSriLankaCountryCode(details.countryCode);
      setSriLankaPhoneNumber(details.phoneNumber);
      setSriLankaRelationship(details.relationship);
      setSriLankaHouseNumber(details.houseNumber);
      setSriLankaStreet(details.street);
      setSriLankaCity(details.city);
      setSriLankaPostalCode(details.postalCode);
    }
  };

  const removeDetail = (index: number, isOwnCountry: boolean) => {
    if (isOwnCountry) {
      setOwnDetailsArray((prevDetails) =>
        prevDetails.filter((_, i) => i !== index)
      );
    } else {
      setSriLankaDetailsArray((prevDetails) =>
        prevDetails.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="w-full px-3 my-6 flex flex-col">
        <p className="text-3xl font-semibold text-oceanBlue text-left">
          Emergency Contacts
        </p>
        {/* own details -contact cards */}
        <div className="flex flex-wrap">
          {ownDetailsArray.map((detail, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 my-2 p-4 rounded-lg border border-gray-400 cursor-pointer relative lg:mr-4"
              style={{ backgroundColor: '#d1f7f5' }}
              onClick={() => fillDetails(detail, true)}
            >
              <p className="text-xl mb-1">{detail.contactName}</p>
              <XIcon
                className="h-6 w-6 text-[#094b59] stroke-1 cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={(e) => {
                  e.stopPropagation();
                  removeDetail(index, true);
                }}
              />
            </div>
          ))}
        </div>
        {/* own country section starts  */}
        <div className="w-full my-4">
          <p className="text-xl mb-1">Own Country</p>
          <div className="w-full my-2 bg-gray-200 p-4 rounded-lg">
            <div className="w-full my-2">
              <MobileTextInput
                label="Name"
                value={ownContactName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOwnContactName(e.target.value)
                }
              />
            </div>
            <p className="text-xl mb-1">Mobile number</p>

            <div className="w-full my-2 flex space-x-2">
              <select
                className="w-1/3 p-2 border rounded"
                value={ownCountryCode}
                onChange={(e) => setOwnCountryCode(e.target.value)}
              >
                <option value="">Select Country Code</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input
                type="text"
                className="w-2/3 p-2 border rounded"
                placeholder="Telephone Number"
                value={ownPhoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOwnPhoneNumber(e.target.value)
                }
              />
            </div>
            <div className="w-full my-2">
              <MobileTextInput
                label="Relationship"
                value={ownRelationship}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOwnRelationship(e.target.value)
                }
              />
            </div>
            <div className="w-full my-4">
              <p className="text-xl mb-1">Address of Employee</p>
              <div className="w-full my-2 bg-gray-200 p-4 rounded-lg border border-gray-400">
                <div className="w-full my-2">
                  <MobileTextInput
                    label="House Number"
                    value={ownHouseNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOwnHouseNumber(e.target.value)
                    }
                  />
                </div>
                <div className="w-full my-2">
                  <MobileTextInput
                    label="Street"
                    value={ownStreet}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOwnStreet(e.target.value)
                    }
                  />
                </div>
                <div className="w-full my-2">
                  <MobileTextInput
                    label="City"
                    value={ownCity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOwnCity(e.target.value)
                    }
                  />
                </div>
                <div className="w-full my-2">
                  <MobileTextInput
                    label="Postal code"
                    value={ownPostalCode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOwnPostalCode(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* own country section ends */}
        <div className="w-full my-2 flex items-center justify-end space-x-2">
          <div className="border-4 border-[#094b59] rounded-full p-1">
            <XIcon
              className="h-6 w-6 text-[#094b59] stroke-1 cursor-pointer"
              id="clearIcon"
              onClick={() => clearFields(true)}
            />
          </div>
          <div className="border-4 border-[#094b59] rounded-full p-1">
            <PlusIcon
              className="h-6 w-6 text-[#094b59] stroke-1 cursor-pointer"
              id="firstPlusIcon"
              onClick={() => logDetails(true)}
            />
          </div>
        </div>

        <div className="w-full my-2 flex items-center space-x-4">
          <label className="text-xl font-normal">Sri Lanka (If Any)</label>
          <Checkbox
            checked={showSriLankaContact}
            onChange={(e) => setShowSriLankaContact(e.target.checked)}
          />
        </div>

        {/* This country section start */}
        <CSSTransition
          in={showSriLankaContact}
          timeout={300}
          classNames="card-input"
          unmountOnExit
          nodeRef={sriLankaContactRef}
        >
          <div>
            <div className="flex flex-wrap">
              {/* this country details contact cards */}
              {sriLankaDetailsArray.map((detail, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 my-2 p-4 rounded-lg border border-gray-400 cursor-pointer relative lg:mr-4"
                  style={{ backgroundColor: '#d1f7f5' }}
                  onClick={() => fillDetails(detail, false)}
                >
                  <p className="text-xl mb-1">{detail.contactName}</p>
                  <XIcon
                    className="h-6 w-6 text-[#094b59] stroke-1 cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeDetail(index, false);
                    }}
                  />
                </div>
              ))}
            </div>
            <div
              ref={sriLankaContactRef}
              className="w-full my-2 bg-gray-200 p-4 rounded-lg"
            >
              <div className="w-full my-2">
                <MobileTextInput
                  label="Name"
                  value={sriLankaContactName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSriLankaContactName(e.target.value)
                  }
                />
              </div>
              <p className="text-xl mb-1">Mobile number</p>

              <div className="w-full my-2 flex space-x-2">
                <select
                  className="w-1/3 p-2 border rounded"
                  value={sriLankaCountryCode}
                  onChange={(e) => setSriLankaCountryCode(e.target.value)}
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
                  value={sriLankaPhoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSriLankaPhoneNumber(e.target.value)
                  }
                />
              </div>
              <div className="w-full my-2">
                <MobileTextInput
                  label="Relationship"
                  value={sriLankaRelationship}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSriLankaRelationship(e.target.value)
                  }
                />
              </div>
              <div className="w-full my-4">
                <p className="text-xl mb-1">Address of Employee</p>
                <div className="w-full my-2 bg-gray-200 p-4 rounded-lg border border-gray-400">
                  <div className="w-full my-2">
                    <MobileTextInput
                      label="House Number"
                      value={sriLankaHouseNumber}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSriLankaHouseNumber(e.target.value)
                      }
                    />
                  </div>
                  <div className="w-full my-2">
                    <MobileTextInput
                      label="Street"
                      value={sriLankaStreet}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSriLankaStreet(e.target.value)
                      }
                    />
                  </div>
                  <div className="w-full my-2">
                    <MobileTextInput
                      label="City"
                      value={sriLankaCity}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSriLankaCity(e.target.value)
                      }
                    />
                  </div>
                  <div className="w-full my-2">
                    <MobileTextInput
                      label="Postal code"
                      value={sriLankaPostalCode}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSriLankaPostalCode(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-2 flex items-center justify-end">
              <div className="border-4 border-[#094b59] rounded-full p-1">
                <PlusIcon
                  className="h-6 w-6 text-[#094b59] stroke-1 cursor-pointer"
                  id="secondPlusIcon"
                  onClick={() => logDetails(false)}
                />
              </div>
            </div>
          </div>
        </CSSTransition>
        {/* This country section ends */}
      </div>

      <div className="w-full p-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
        <Link href="/mobile/wallet-details">
        <Button
          color="blue"
          fullWidth={true}
          style={{ backgroundColor: '#094b59' }}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Next
        </Button>
        </Link>
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

export default EmergencyContacts;
