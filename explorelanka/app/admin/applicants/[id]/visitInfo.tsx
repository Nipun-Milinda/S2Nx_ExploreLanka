"use client";
import React from "react";
import { Typography, Input, Textarea } from "@material-tailwind/react";

type PresentVisitInfo = {
  object_of_visit: string;
  other_reason_of_visit: string;
  route_of_visit: string;
  mode_of_visit: string;
  visa_period: string;
  reason_to_urge: string;
  prevoiusly_in_sri_lanka: string;
};

type PreviousVisitInfo = {
  pre_visa_id: string;
  pre_visa_issued_date: string;
  pre_visa_type: string;
  leaving_date: string;
  from: string;
  to: string;
  purpose: string;
  last_residence_l1: string;
  last_residence_l2: string;
  last_residence_l3: string;
};

const input_margin = { margin: 8 };

export default function visitInfo({
  object_of_visit,
  other_reason_of_visit,
  route_of_visit,
  mode_of_visit,
  visa_period,
  reason_to_urge,
  prevoiusly_in_sri_lanka,
  pre_visa_id,
  pre_visa_issued_date,
  pre_visa_type,
  leaving_date,
  from,
  to,
  purpose,
  last_residence_l1,
  last_residence_l2,
  last_residence_l3,
}: PresentVisitInfo & PreviousVisitInfo) {
  return (
    <div className="w-full flex">
      <div style={{ width: "50%" }}>
        <Typography color="gray" variant="h6">
          Present Visit
        </Typography>
        <hr />
        <div style={input_margin}>
          <div>Object of Visit</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={object_of_visit}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Other Reason of Visit</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={other_reason_of_visit}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Route of Visit</div>
          <Textarea
            variant="outlined"
            label="Date of Birth"
            value={route_of_visit}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Mode of Visit</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={mode_of_visit}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Visa Required Period</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={visa_period}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Reason to Urge</div>
          <Textarea
            variant="outlined"
            label="Date of Birth"
            value={reason_to_urge}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Prevoiusly in Sri Lanka?</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={prevoiusly_in_sri_lanka}
            disabled
          />
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <Typography color="gray" variant="h6">
          Previous Visit
        </Typography>
        <hr />
        <div style={input_margin}>
          <div>Visa ID</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={pre_visa_id}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Date of Issue</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={pre_visa_issued_date}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Visa Type</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={pre_visa_type}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Leaving Date</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={leaving_date}
            disabled
          />
        </div>

        <div style={input_margin}>
          <div>Period in Sri Lanka</div>
          <Input
            variant="outlined"
            label="Date of Birth"
            value={from + " to " + to}
            disabled
          />
        </div>

        <div style={input_margin}>
          <div>Purpose</div>
          <Textarea
            variant="outlined"
            label="Date of Birth"
            value={purpose}
            disabled
          />
        </div>
        <div style={input_margin}>
          <div>Address of Last Residence</div>
          <Textarea
            variant="outlined"
            label="Date of Birth"
            value={last_residence_l1 + "\n" + last_residence_l2 + "\n" + last_residence_l3}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
