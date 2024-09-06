"use client";

import React from 'react';
import { Select, Option } from "@material-tailwind/react";

interface Option {
  value: string;
  label: string;
}

interface MobileSelectProps {
  options: Option[],
  label: string,
  value: string,
  onChange: (x: string) => void;
}

const MobileSelect: React.FC<MobileSelectProps> = (props) => {
  return (
    <div className="w-full my-4">
        <p className='text-xl mb-1'>{props.label}</p>
        <Select
          containerProps={{ className:'bg-black/10 rounded-[7px]'}}
          labelProps={{
            className: "before:mr-0 after:ml-0",
          }}
          value={props.value}
          onChange={props.onChange}
        >
          {props.options.map((option, index) => (
            <Option key={index} value={option.value}>{option.label}</Option>
          ))}
        </Select>
    </div>
  );
};

export default MobileSelect;
