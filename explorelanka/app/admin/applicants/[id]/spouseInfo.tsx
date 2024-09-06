"use client"

import React from 'react'
import { Typography, Chip, Input, Textarea } from "@material-tailwind/react";

type SpouseDetails ={
    name: string;
    nationality: string;
    postal_address_l1: string;
    postal_address_l2: string;
    postal_address_l3: string;
    passport_no: string;
    expiry_date: string;
}

export default function spouseInfo({name, nationality, postal_address_l1, postal_address_l2, postal_address_l3, passport_no, expiry_date}: SpouseDetails) {
  return (
    <div className='w-full flex'>
        <div style={{width: "50%"}}>
        <div style={{ margin: 5 }}>
            <div>Spouse's Name</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={name}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Spouse's Nationality</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={nationality}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Spouse's Postal Address</div>
            <Textarea
              variant="outlined"
              label="Date of Birth"
              value={postal_address_l1 + "\n" + postal_address_l2 + "\n" + postal_address_l3}
              disabled
            />
          </div>
        </div>
        <div style={{width: "50%"}}>
        <div style={{ margin: 5 }}>
            <div>Spouse's Passport Number</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={passport_no}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Passport Expiry Date</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={expiry_date}
              disabled
            />
          </div>
        </div>
    </div>
  )
}
