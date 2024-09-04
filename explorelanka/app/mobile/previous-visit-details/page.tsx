'use client';

import React, { useState, ReactElement } from 'react';
import MobileTextInput from '@/components/mobileTextInput';
import MobileSelect from '@/components/mobileSelect';
import { Checkbox, Button } from '@material-tailwind/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const visitReasons = [
  { value: 'tourism', label: 'Tourism' },
  { value: 'business', label: 'Business' },
  { value: 'education', label: 'Education' },
];

const countriesVisited = [
  { value: 'lk', label: 'Sri Lanka' },
  { value: 'us', label: 'USA' },
  { value: 'uk', label: 'UK' },
];

const visaTypes = [
  { value: 'Tourist', label: 'Tourist' },
  { value: 'Residence', label: 'Residence' },
  { value: 'Other', label: 'Other' },
];

const PreviousVisitDetails = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [leavingDate, setLeavingDate] = useState<Date | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [visaType, setVisaType] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');
  const [houseNumber, setHouseNumber] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleVisaTypeChange = (type: string) => {
    setVisaType(type);
  };

  return (
    <div className="w-full px-3 my-6 flex flex-col justify-center">
      <p className="text-3xl font-semibold text-oceanBlue text-center">
        Previous Visit Details
      </p>

      <MobileTextInput label="Previous Visa ID" />

      <div className="w-full my-4">
        <p className="text-xl mb-1">Issued Date</p>
        <div className="relative w-full bg-black/10 rounded-[7px] p-2 border border-gray-300">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            customInput={
              <div className="flex items-center w-full">
                <FaCalendarAlt className="mr-2 text-gray-500" />
                <input
                  type="text"
                  value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                  readOnly
                  className="bg-transparent outline-none w-full"
                />
              </div>
            }
          />
        </div>
      </div>

      <div className="w-full my-4">
        <p className="text-xl mb-1">Countries Visited</p>
        <div className="w-full bg-gray-200 px-2 py-2 rounded-lg">
          <MobileSelect label="Country" options={countriesVisited} />
        </div>
      </div>

      <div className="w-full my-4 flex items-center">
        <p className="text-xl mb-1">Was the visit satisfactory?</p>
        {/* @ts-ignore */}
        <Checkbox />
      </div>

      <div className="w-full my-4">
        <p className="text-xl mb-1">Visa Type</p>
        <div className="flex flex-wrap justify-start md:flex-row">
          {visaTypes.map((type) => (
            <label
              key={type.value}
              className="flex items-center justify-start w-auto text-lg mr-4 mb-2"
            >
              <input
                type="checkbox"
                checked={visaType === type.value}
                onChange={() => handleVisaTypeChange(type.value)}
                className="mr-2"
              />
              {type.label}
            </label>
          ))}
        </div>
      </div>

      <div className="w-full my-4">
        <p className="text-xl mb-1">Leaving Date</p>
        <div className="relative w-full bg-black/10 rounded-[7px] p-2 border border-gray-300">
          <DatePicker
            selected={leavingDate}
            onChange={(date: Date | null) => setLeavingDate(date)}
            customInput={
              <div className="flex items-center w-full">
                <FaCalendarAlt className="mr-2 text-gray-500" />
                <input
                  type="text"
                  value={leavingDate ? leavingDate.toLocaleDateString() : ''}
                  readOnly
                  className="bg-transparent outline-none w-full"
                />
              </div>
            }
          />
        </div>
      </div>

      <div className="w-full my-4 flex space-x-4">
        <div className="w-1/2">
          <p className="text-xl mb-1">From</p>
          <div className="relative w-full bg-black/10 rounded-[7px] p-2 border border-gray-300">
            <DatePicker
              selected={fromDate}
              onChange={(date: Date | null) => setFromDate(date)}
              customInput={
                <div className="flex items-center w-full">
                  <FaCalendarAlt className="mr-2 text-gray-500" />
                  <input
                    type="text"
                    value={fromDate ? fromDate.toLocaleDateString() : ''}
                    readOnly
                    className="bg-transparent outline-none w-full"
                  />
                </div>
              }
            />
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-xl mb-1">To</p>
          <div className="relative w-full bg-black/10 rounded-[7px] p-2 border border-gray-300">
            <DatePicker
              selected={toDate}
              onChange={(date: Date | null) => setToDate(date)}
              customInput={
                <div className="flex items-center w-full">
                  <FaCalendarAlt className="mr-2 text-gray-500" />
                  <input
                    type="text"
                    value={toDate ? toDate.toLocaleDateString() : ''}
                    readOnly
                    className="bg-transparent outline-none w-full"
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full my-4">
        <p className="text-xl mb-1">Purpose</p>
        <textarea
          className="w-full p-2 bg-black/10 border border-gray-300 rounded-[7px]"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          rows={4}
        />
      </div>

      <div className="w-full my-4">
        <p className="text-xl mb-1">Last Place of Residence</p>
        <div className="w-full my-2 bg-gray-200 p-4 rounded-lg">
          <div className="w-full my-2">
            <MobileTextInput label="House Number" />
          </div>
          <div className="w-full my-2">
            <MobileTextInput label="Street" />
          </div>
          <div className="w-full my-2">
            <MobileTextInput label="City" />
          </div>
        </div>
      </div>
      <div className="w-full my-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
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

export default PreviousVisitDetails;
