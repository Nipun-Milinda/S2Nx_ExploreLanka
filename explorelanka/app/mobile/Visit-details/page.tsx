"use client";

import React, { useState } from 'react';
import MobileTextInput from '@/components/mobileTextInput';
import { Checkbox, Button } from "@material-tailwind/react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import FlightIcon from '@mui/icons-material/Flight';
import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const page = () => {
    const [selected, setSelected] = useState('tourist');

    const handleSelection = (option) => {
        setSelected(option);
    };
    const [selectedButton, setSelectedButton] = useState(null);

    const handleClick = (value) => {
        setSelectedButton(value === selectedButton ? null : value); // Toggle selection
    };


    return (
        <div className='w-full min-h-screen flex flex-col justify-between px-3 py-6 border border-black'>
            <p className="text-3xl font-semibold text-oceanBlue">Visit Details</p>
            <p className='text-xl mb-1 my-4'>Objective of present visit</p>
            <div className="w-full flex justify-center my-4">
                <div className="flex w-full border border-blue-600 rounded-md">
                    <Button
                        onClick={() => handleSelection('tourist')}
                        className={`flex-1 flex flex-col items-center px-4 py-2 space-y-1 
                            ${selected === 'tourist' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
                    >
                        <FlightIcon />
                        <span>Tourist</span>
                    </Button>

                    <Button
                        onClick={() => handleSelection('residence')}
                        className={`flex-1 flex flex-col items-center px-4 py-2 space-y-1 
                            ${selected === 'residence' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
                    >
                        <HomeIcon />
                        <span>Applied for Residence Visa</span>
                    </Button>

                    <Button
                        onClick={() => handleSelection('other')}
                        className={`flex-1 flex flex-col items-center px-4 py-2 space-y-1 
                            ${selected === 'other' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
                    >
                        <MoreHorizIcon />
                        <span>Other</span>
                    </Button>
                </div>
            </div>

            
            
            <p className='text-xl mb-1 my-4'>Route of travel to Sri Lanka</p>
            <TextareaAutosize className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black'
                minRows={3}> 
            </TextareaAutosize>
            <MobileTextInput label="Mode of travel to Sri Lanka" />
            <MobileTextInput label="Visa Required period" />
            
            <p className='text-base mb-1 my-4'>Any other reason to urge in support of application</p>
            <TextareaAutosize className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black'
                minRows={3}> 
            </TextareaAutosize>
            <p className='text-xl mb-1 my-4'>Whether previously in Sri Lanka?</p>
            <div className='flex'>
            <button
                className={`p-4 text-center grow rounded-l-lg ${selectedButton === 'Yes' ? 'bg-blue-400 text-white' : 'bg-gray-400 text-black'}`}
                onClick={() => handleClick('Yes')}
            >
                Yes
            </button>
            <button
                className={`p-4 text-center grow rounded-r-lg ${selectedButton === 'No' ? 'bg-blue-400 text-white' : 'bg-gray-400 text-black'}`}
                onClick={() => handleClick('No')}
            >
                No
            </button>
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

export default page;
