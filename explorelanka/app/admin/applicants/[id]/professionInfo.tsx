"use client";

import React from "react";
import { Input, Textarea } from "@material-tailwind/react";

type professionInfoProps = {
  employee_name: string;
  employee_address_l1: string;
  employee_address_l2: string;
  employee_address_l3: string;
  where_business_is: string;
  fax: string;
  email: string;
};

export default function professionInfo({
  employee_name,
  employee_address_l1,
  employee_address_l2,
  employee_address_l3,
  where_business_is,
  fax,
  email,
}: professionInfoProps) {
  return (
    <div className="w-full flex">
      <div style={{ width: "50%" }}>
        <div style={{ margin: 5 }}>
          <div>Name of Employee</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={employee_name}
            disabled
          />
        </div>
        <div style={{ margin: 5 }}>
            <div>Address of the Employee</div>
            <Textarea
              variant="outlined"
              label="Date of Birth"
              value={employee_address_l1 + "\n" + employee_address_l2 + "\n" + employee_address_l3}
              disabled
            />
          </div>
      </div>
      <div style={{ width: "50%" }}>
        <div style={{ margin: 5 }}>
          <div>If Business, where business is</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={where_business_is}
            disabled
          />
        </div>
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
