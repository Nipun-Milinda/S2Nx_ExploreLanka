"use client";

import React from 'react'
import MobileTextInput from '@/components/mobileTextInput'
import MobileSelect from '@/components/mobileSelect'
import { Checkbox, Button } from "@material-tailwind/react";

const countries = [
  { value: 'lk', label: 'Sri Lanka' },
  { value: 'us', label: 'USA' },
  { value: 'uk', label: 'UK' },
]

const accommodation = [
  { value: 'hotels', label: 'Hotels' },
  { value: 'relatives', label: 'Relatives' },
  { value: 'other', label: 'Other' },
]

const page = () => {
  return (
    <div className='w-full px-3 my-6'>
      <p className="text-3xl font-semibold text-oceanBlue">Personal Information</p>

      <div className='w-full my-4'>
        <p className='text-xl mb-1'>Country of Domicile</p>
        <div className='w-full bg-gray-200 px-2 py-2 rounded-lg'>
          <MobileTextInput label="House Number" />
          <MobileTextInput label="Street" />
          <MobileSelect label="City" options={countries} />
        </div>
      </div>

      <MobileSelect label="What is your plan on accommodation of the Visit?" options={accommodation} />

      <div className='w-full my-4'>
        <p className='text-xl mb-1'>Relatives Address</p>
        <div className='w-full bg-gray-200 px-2 py-2 rounded-lg'>
          <MobileTextInput label="House Number" />
          <MobileTextInput label="Street" />
          <MobileSelect label="City" options={countries} />
        </div>
      </div>

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
