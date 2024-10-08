"use client";

import React, { useEffect } from 'react'
import {  Button } from "@material-tailwind/react";
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between px-3 py-6 border border-black'>
      <p className="text-3xl font-semibold text-oceanBlue">Passport Details</p>

      
      <p className='text-xl mb-1 my-6'>Present Passport</p>
      <TextField className='w-full my-2 text-oceanBlue"'
          id="outlined-textarea"
          label="Passport Number" 
          placeholder="23434567"
          multiline
        />
        <TextField className='w-full my-2 text-oceanBlue"'
          id="outlined-textarea"
          label="Place of Issue" 
          placeholder="New South Whales"
          multiline
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Issue" />
      </DemoContainer>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Expiry" />
      </DemoContainer>
    </LocalizationProvider>

    <p className='text-xl mb-1 my-6'>Previous Passport</p>
      <TextField className='w-full my-2 text-oceanBlue"'
          id="outlined-textarea"
          label="Passport Number" 
          placeholder="23434567"
          multiline
        />
        <TextField className='w-full my-2 text-oceanBlue"'
          id="outlined-textarea"
          label="Place of Issue" 
          placeholder="New South Whales"
          multiline
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Issue" />
      </DemoContainer>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Expiry" />
      </DemoContainer>
    </LocalizationProvider>

      
<div className='w-full mt-auto flex flex-col gap-2'>
        <Link href={"/mobile/Visit-details"}>
        <Button color="blue" fullWidth>
          Next
        </Button>
        </Link>
        <Button variant="outlined" color="blue" fullWidth>
          Back
        </Button>
      </div>

    </div>
  )
}

export default Page
