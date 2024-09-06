"use client";

import React, { useEffect } from 'react';
import { Button, Checkbox } from "@material-tailwind/react";
import MobileTextInput from '@/components/mobileTextInput';
import MobileSelect from '@/components/mobileSelect';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { useAppDispatch, useAppSelector } from '@/libs/hooks';
import { setVisaApplication } from '@/libs/features/visaApplication.slice';

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

const maritalStatus = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
];

const Page = () => {
  const [fullName, setFullName] = React.useState<string>('');
  const [nationality, setNationality] = React.useState<string>('');
  const [gender, setGender] = React.useState<string>('Male');
  const [naturalized, setNaturalized] = React.useState<boolean>(false);
  const [naturalizationDate, setNaturalizationDate] = React.useState<any>(null);
  const [naturalizationPlace, setNaturalizationPlace] = React.useState<string>('');
  const [formerNationality, setFormerNationality] = React.useState<string>('');
  const [birthDate, setBirthDate] = React.useState<any>(null);
  const [birthPlace, setBirthPlace] = React.useState<string>('');
  const [birthCountry, setBirthCountry] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [status, setStatus] = React.useState<string>('');

  const visaApplication = useAppSelector(state => state.visaApplication);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(setVisaApplication({
      ...visaApplication,
      fullName,
      nationality,
      gender,
      naturalized,
      naturalizationInfo: {
        date: naturalizationDate,
        place: naturalizationPlace,
        formerNationality,
      },
      birthDate: dayjs(birthDate).toISOString(),
      birthPlace,
      birthCountry,
      height,
      maritalStatus: status,
    }));
  };

  useEffect(() => {
    console.log(visaApplication);
  }, [visaApplication]);

  return (
    <div className='w-full px-3 my-6'>
      <p className="text-3xl font-semibold text-oceanBlue">Personal Information</p>

      <MobileTextInput label="Full Name" value={fullName} onChange={setFullName} />

      <MobileSelect label="Nationality" value={nationality} onChange={setNationality} options={nationalities} />

      <div className='w-full my-4'>
        <p className='text-xl mb-1'>Gender</p>
        <div className='flex'>
          <div
            className={`bg-${gender === 'Male' ? 'blue' : 'gray'}-400 text-white rounded-l-lg p-4 text-center grow cursor-pointer`}
            onClick={() => setGender('Male')}
          >
            Male
          </div>
          <div
            className={`bg-${gender === 'Female' ? 'blue' : 'gray'}-400 rounded-r-lg p-4 text-center grow cursor-pointer`}
            onClick={() => setGender('Female')}
          >
            Female
          </div>
        </div>
      </div>

      <div className='w-full my-4 flex items-center'>
        <p className='text-xl mb-1'>Naturalized</p>
        <Checkbox checked={naturalized} onChange={(e) => setNaturalized(e.target.checked)} />
      </div>

      {naturalized && (
        <div className='w-full my-4'>
          <div className='w-full bg-gray-200 px-2 py-2 rounded-lg'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Naturalization"
                value={naturalizationDate}
                onChange={setNaturalizationDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <MobileTextInput label="Place of Naturalization" value={naturalizationPlace} onChange={setNaturalizationPlace} />
            <MobileSelect label="Former Nationality" value={formerNationality} onChange={setFormerNationality} options={countries} />
          </div>
        </div>
      )}

      <div className='w-full my-4'>
        <p className='text-xl mb-1'>Birth Info</p>
        <div className='w-full bg-gray-200 px-2 py-2 rounded-lg'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={birthDate}
              onChange={setBirthDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <MobileTextInput label="Place of Birth" value={birthPlace} onChange={setBirthPlace} />
          <MobileSelect label="Country of Birth" value={birthCountry} onChange={setBirthCountry} options={countries} />
        </div>
      </div>

      <MobileTextInput label="Height (cm)" value={height} onChange={setHeight} />

      <MobileSelect label="Marital Status" value={status} onChange={setStatus} options={maritalStatus} />

      <div className='w-full my-4'>
        <Button color="blue" fullWidth onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Page;
