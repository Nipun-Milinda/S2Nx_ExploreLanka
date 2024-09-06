'use client';

import React from 'react';
import { Input } from '@material-tailwind/react';

interface MobileTextInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MobileTextInput: React.FC<MobileTextInputProps> = (props) => {
  return (
    <div className="w-full my-4">
      <p className="text-xl mb-1">{props.label}</p>
      <Input
        containerProps={{ className: 'bg-black/10 rounded-[7px]' }}
        labelProps={{
          className: 'before:mr-0 after:ml-0',
        }}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default MobileTextInput;
