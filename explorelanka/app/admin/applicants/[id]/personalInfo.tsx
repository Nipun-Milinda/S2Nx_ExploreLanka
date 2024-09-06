"use client";
import { Typography, Chip, Input, Textarea } from "@material-tailwind/react";
import React from "react";

type personalInfoProps = {
  img: string;
  name: string;
  nationality: string;
  gender: string;
  dob: string;
  birth_place: string;
  birth_country: string;
  naturalized_place: string;
  naturalized_date: string;
  former_nationality: string;
  height: string;
  married_status: string;
  country_of_domicle_add_l1: string;
  country_of_domicle_add_l2: string;
  country_of_domicle_add_l3: string;
  plan_on_accomodation_of_visit: string;
  relatives_add_l1: string;
  relatives_add_l2: string;
  relatives_add_l3: string;
  req_status: string;
};

export default function personalInfo({
  img,
  name,
  nationality,
  gender,
  dob,
  birth_place,
  birth_country,
  naturalized_place,
  naturalized_date,
  former_nationality,
  height,
  married_status,
  country_of_domicle_add_l1,
  country_of_domicle_add_l2,
  country_of_domicle_add_l3,
  plan_on_accomodation_of_visit,
  relatives_add_l1,
  relatives_add_l2,
  relatives_add_l3,
  req_status,
}: personalInfoProps) {
  const statusColor = {
    pending: "orange",
    monitored: "blue",
    approved: "green",
    rejected: "red",
  }[req_status];
  return (
    <div className="w-full">
      <div className="flex items-center w-full">
        <img
          src={img}
          alt={name}
          style={{ width: "100px", height: "100px", marginRight: 20 }}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <Typography variant="h5">{name}</Typography>
          <Typography variant="paragraph">{nationality}</Typography>
          <Chip
            variant="ghost"
            size="sm"
            value={req_status}
            color={statusColor}
          />
        </div>
      </div>
      <div className="w-full flex" style={{ marginTop: 15 }}>
        <div style={{ width: "50%" }}>
          <div style={{ margin: 5 }}>
            <div>Date of Birth</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={dob}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Place of Birth</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={birth_place}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Country of Birth</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={birth_country}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Country of Domicile</div>
            <Textarea
              variant="outlined"
              label="Date of Birth"
              value={country_of_domicle_add_l1 + "\n" + country_of_domicle_add_l2 + "\n" + country_of_domicle_add_l3}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Plan on Accomodation of Visit</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={plan_on_accomodation_of_visit}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Relative's Address</div>
            <Textarea
              variant="outlined"
              label="Date of Birth"
              value={relatives_add_l1 + "\n" + relatives_add_l2 + "\n" + relatives_add_l3}
              disabled
            />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ margin: 5 }}>
            <div>Height (cm)</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={height}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Gender</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={gender}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Social Status</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={married_status}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Naturalized Date</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={naturalized_date}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Naturalized Place</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={naturalized_place}
              disabled
            />
          </div>
          <div style={{ margin: 5 }}>
            <div>Former Nationality</div>
            <Input
              variant="outlined"
              label="Date of Birth"
              value={former_nationality}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
