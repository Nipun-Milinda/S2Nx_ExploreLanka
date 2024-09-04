"use client";

import React from 'react';
import { Select, Option } from "@material-tailwind/react";

interface Option {
  value: string;
  label: string;
}

interface MobileSelectProps {
  options: Option[],
  label: string
}

const MobileSelect: React.FC<MobileSelectProps> = (props) => {
  // Implement your component logic here

  return (
    <div className="w-full my-4">
        <p className='text-xl mb-1'>{props.label}</p>
        <Select
          containerProps={{ className:'bg-black/10 rounded-[7px]'}}
          labelProps={{
            className: "before:mr-0 after:ml-0",
          }}
        >
          {props.options.map((option, index) => (
            <Option key={index} value={option.value}>{option.label}</Option>
          ))}

        </Select>
    </div>
  );
};

export default MobileSelect;