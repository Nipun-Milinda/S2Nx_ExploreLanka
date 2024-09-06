"use client";

import React from "react";
import { Typography, Chip, Input, Textarea } from "@material-tailwind/react";

type ContactDetails = {
  telephone: string;
  mobile: string;
  email: string;
  fax: string;
};

export default function ({ telephone, mobile, email, fax }: ContactDetails) {
  return (
    <div className="w-full flex">
      <div style={{ width: "50%" }}>
        <div style={{ margin: 5 }}>
          <div>Telephone</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={telephone}
            disabled
          />
        </div>
        <div style={{ margin: 5 }}>
          <div>Mobile</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={mobile}
            disabled
          />
        </div>
      </div>
      <div style={{ width: "50%" }}>
      <div style={{ margin: 5 }}>
          <div>Fax</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={fax}
            disabled
          />
        </div>
        <div style={{ margin: 5 }}>
          <div>E-mail</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={email}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
