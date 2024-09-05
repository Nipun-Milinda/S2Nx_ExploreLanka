"use client";
import { Input } from "@material-tailwind/react";
import React from "react";

type WalletDetails = {
  money_available_arrival: string;
  card_name: string;
  amount_spent: string;
};

const input_margin = { margin: 5 };

export default function walletInfo({
  money_available_arrival,
  card_name,
  amount_spent,
}: WalletDetails) {
  return(
  <div className="w-full flex">
    <div style={{ width: "50%" }}>
      <div style={input_margin}>
        <div>Money Available on Arrival</div>
        <Input
          variant="outlined"
          label="Date of Birth"
          value={money_available_arrival}
          disabled
        />
      </div>
    </div>
    <div style={{ width: "50%" }}>
      <div style={input_margin}>
        <div>Card Name</div>
        <Input
          variant="outlined"
          label="Date of Birth"
          value={card_name}
          disabled
        />
      </div>
      <div style={input_margin}>
        <div>Amount Spent</div>
        <Input
          variant="outlined"
          label="Date of Birth"
          value={amount_spent}
          disabled
        />
      </div>
    </div>
  </div>
  )
}
