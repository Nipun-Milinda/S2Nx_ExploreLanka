"use client";

import React from 'react';
import MobileTextInput from '@/components/mobileTextInput';
import { Button } from "@material-tailwind/react";
import { MuiTelInput } from "mui-tel-input";


const Page = () => {
  

  const MyComponent = () => {
    const [value, setValue] = React.useState('');
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    return <MuiTelInput value={value} onChange={handleChange} className='my-5 w-full' placeholder="Enter mobile number" />;
  };
  

  return (
    <div className='w-full min-h-screen flex flex-col justify-between px-3 py-6 border border-black'>
      <div>
        <p className="text-3xl font-semibold text-oceanBlue">Contact Details</p>

       
        <MobileTextInput label="Telephone" placeholder="091 2286256" />

        <p className='text-xl mb-1'>Mobile Number</p>

       
        <MyComponent />

      
        <MobileTextInput label="Fax" placeholder="041 2286256" />

      
        <MobileTextInput label="E-mail" placeholder="john@gmail.com" />
      </div>

      <div className='w-full mt-auto flex flex-col gap-2'>
        <Button color="blue" fullWidth>
          Next
        </Button>
        <Button variant="outlined" color="blue" fullWidth>
          Back
        </Button>
      </div>
    </div>
  );
};

export default Page;
