'use client';

import React from 'react';
import MobileTextInput from '@/components/mobileTextInput';
import MobileSelect from '@/components/mobileSelect';
import { Checkbox, Button } from '@material-tailwind/react';

const nationalities = [
  { value: 'lk', label: 'Sri Lankan' },
  { value: 'us', label: 'American' },
  { value: 'uk', label: 'British' },
];

const countries = [
  { value: 'lk', label: 'Sri Lanka' },
  { value: 'us', label: 'USA' },
  { value: 'uk', label: 'UK' },
];

const page = () => {
  return (
    <div className="w-full px-3 my-6">
      <p className="text-3xl font-semibold text-oceanBlue">
        Personal Information
      </p>

      <MobileTextInput label="Full Name" />

      <MobileSelect label="Nationality" options={nationalities} />

      <div className="w-full my-4">
        <p className="text-xl mb-1">Gender</p>
        <div className="flex">
          <div className="bg-blue-400 text-white rounded-l-lg p-4 text-center grow">
            Male
          </div>
          <div className="bg-gray-400 rounded-r-lg p-4 text-center grow">
            Female
          </div>
        </div>
      </div>

      <div className="w-full my-4 flex items-center">
        <p className="text-xl mb-1">Naturalized</p>
        <Checkbox />
      </div>

      <div className="w-full my-4">
        <p className="text-xl mb-1">Birth Info</p>
        <div className="w-full bg-gray-200 px-2 py-2 rounded-lg">
          <MobileTextInput label="Date" />
          <MobileTextInput label="Place" />
          <MobileSelect label="Country" options={countries} />
        </div>
      </div>

      <div className="w-full my-4">
        <Button color="blue" fullWidth>
          Next
        </Button>
      </div>
    </div>
  );
};

export default page;
