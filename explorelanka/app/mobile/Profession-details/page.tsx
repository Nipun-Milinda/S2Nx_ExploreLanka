"use client";

import React from 'react'
import MobileTextInput from '@/components/mobileTextInput'
import MobileSelect from '@/components/mobileSelect'
import { Checkbox, Button } from "@material-tailwind/react";
import TextField from '@mui/material/TextField';



const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between px-3 py-6 border border-black'>
      <p className="text-3xl font-semibold text-oceanBlue">Profession</p>

      <MobileTextInput label="Name of Employee" />
      <p className='text-xl mb-1'>Address of Employee</p>
      <TextField className='w-full my-2 text-oceanBlue"'
          id="outlined-textarea"
          label="House Number" 
          placeholder="234"
          multiline
        />
        <TextField className='w-full my-2 text-oceanBlue"'
          id="outlined-textarea"
          label="Street" 
          placeholder="2nd Lane"
          multiline
        />
        <TextField className='w-full my-2 text-oceanBlue"'
          id="outlined-textarea"
          label="City" 
          placeholder="New South Whales"
          multiline
        />
<MobileTextInput label="If Business, where business is" />
      
<MobileTextInput label="Fax" />
<MobileTextInput label="Email" />
      
<div className='w-full mt-auto flex flex-col gap-2'>
        <Button color="blue" fullWidth>
          Next
        </Button>
        <Button variant="outlined" color="blue" fullWidth>
          Back
        </Button>
      </div>

    </div>
  )
}

export default page
