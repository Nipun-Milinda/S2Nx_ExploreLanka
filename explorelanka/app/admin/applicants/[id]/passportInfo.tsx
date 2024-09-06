"use client";

import { Typography, Input } from "@material-tailwind/react";
import React from "react";

type PassportDetails = {
  present_passport_no: string;
  present_passport_issued_place: string;
  present_passport_issued_date: string;
  present_passport_expiry_date: string;
  pre_passport_no: string;
  pre_passport_issued_place: string;
  pre_passport_issued_date: string;
  pre_passport_expiry_date: string;
};

const input_margin = { margin: 5 };

export default function passportInfo({
  present_passport_no,
  present_passport_issued_place,
  present_passport_issued_date,
  present_passport_expiry_date,
  pre_passport_no,
  pre_passport_issued_place,
  pre_passport_issued_date,
  pre_passport_expiry_date,
}: PassportDetails) {
  return (
    <div className="w-full flex">
      <div style={{ width: "50%" }}>
        <Typography color="gray" variant="h6">Present Passport</Typography>
        <hr />
        <div style={input_margin}>
          <div>Passport Number</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={present_passport_no}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Place of Issue</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={present_passport_issued_place}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Date of Issue</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={present_passport_issued_date}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Date of Expiry</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={present_passport_expiry_date}
            disabled
          />
        </div>
      </div>
      <div style={{ width: "50%" }}>
      <Typography color="gray" variant="h6">Previous Passport</Typography>
        <hr />
        <div style={input_margin}>
          <div>Passport Number</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={pre_passport_no}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Place of Issue</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={pre_passport_issued_place}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Date of Issue</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={pre_passport_issued_date}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Date of Expiry</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={pre_passport_expiry_date}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
