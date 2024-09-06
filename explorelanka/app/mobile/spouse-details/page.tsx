"use client";

import React from 'react'
import MobileTextInput from '@/components/mobileTextInput'
import MobileSelect from '@/components/mobileSelect'
import { Checkbox, Button } from "@material-tailwind/react";

const nationalities = [
  { value: 'lk', label: 'Sri Lankan' },
  { value: 'us', label: 'American' },
  { value: 'uk', label: 'British' },
]

const countries = [
  { value: 'lk', label: 'Sri Lanka' },
  { value: 'us', label: 'USA' },
  { value: 'uk', label: 'UK' },
]

const maritalStatus = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
]

const page = () => {
  return (
    <div className='w-full px-3 my-6'>
      <p className="text-3xl font-semibold text-oceanBlue">Spouse Details</p>

      <MobileTextInput label="Full Name" />

      <MobileSelect label="Nationality" options={nationalities} />

      <div className='w-full my-4'>
        <p className='text-xl mb-1'>Postal Address</p>
        <div className='w-full bg-gray-200 px-2 py-2 rounded-lg'>
          <MobileTextInput label="House Number" />
          <MobileTextInput label="Street" />
          <MobileTextInput label="City" />
        </div>
      </div>
      
      <MobileTextInput label="Passport Number" />

      <MobileTextInput label="Expiry Date" />

      <div className='w-full my-4'>
        <Button color="blue" fullWidth>
          Next
        </Button>
        <Button color="blue" className='mt-4' fullWidth variant='outlined'> 
          Back
        </Button>
      </div>
    </div>
  )
}

export default page
