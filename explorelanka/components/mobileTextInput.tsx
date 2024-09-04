"use client";

import React from 'react';
import { Input } from "@material-tailwind/react";

interface MobileTextInputProps {
  label: string;
}

const MobileTextInput: React.FC<MobileTextInputProps> = (props) => {
  // Implement your component logic here

  return (
    <div className="w-full my-4">
        <p className='text-xl mb-1'>{props.label}</p>
        <Input
          containerProps={{ className:'bg-black/10 rounded-[7px]'}}
          labelProps={{
            className: "before:mr-0 after:ml-0",
          }}
          />
    </div>
  );
};

export default MobileTextInput;