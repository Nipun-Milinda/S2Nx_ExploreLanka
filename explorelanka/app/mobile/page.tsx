"use client";

import { Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const MyComponent = () => {
  // Implement your component logic here

  return (
    <div className="bg-cover bg-center h-screen w-full bg-[url('/images/visaBackground.png')]">
      {/* Your content here */}

      <div className="flex justify-center items-center h-full">
        <div className='w-2/3 text-center h-5/6 flex flex-col justify-between items-center'>

          <div className='w-full flex flex-col justify-between items-center'>
            <Image src='/images/sl_logo.png' width={120} height={120} />
            <Typography color="yellow" variant="h3" className='mt-6'>Welcome to the Visa Application Portal</Typography>
          </div>

          <div className="w-full">
            <Link href="/mobile/personal-information-1">
            <Button color='green' ripple='light' rounded='full' size='lg'>Get Started</Button>
            </Link>
            <Typography color="white" variant="p" className='mt-6'>By getting stared you agreeing to Terms & Conditions</Typography>
          </div>

        </div>


      </div>
    </div>
  );
};

export default MyComponent;