"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const uploadDocuments = () => {
  const [photographName, setPhotographName] = useState<string | null>(null);
  const [passportName, setPassportName] = useState<string | null>(null);
  const [fingerprintName, setFingerprintName] = useState<string | null>(null);
  const [signatureName, setSignatureName] = useState<string | null>(null);

  const handlePhotographUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhotographName(file.name);
    } else {
      setPhotographName(null);
    }
  };

  const handlePassportUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPassportName(file.name);
    } else {
      setPassportName(null);
    }
  };

  const handleFingerprintUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFingerprintName(file.name);
    } else {
      setFingerprintName(null);
    }
  };

  const handleSignatureUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSignatureName(file.name);
    } else {
      setSignatureName(null);
    }
  };

  return (
    <div className="w-full px-3 my-6">
      <p className="text-3xl font-semibold text-oceanBlue">Upload Documents</p>
      <div className="bg-gray-300 rounded-r-lg p-4 grow my-5">
        <div className="w-full my-4">
          <p className="text-xl mb-1">Your Photograph</p>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ width: "100%", height: "50px" }}
            style={{ backgroundColor: "#213A57", color: "white" }}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={handlePhotographUpload}
            />
          </Button>

          {photographName && (
            <div className="mt-2">
              <p>Uploaded File: {photographName}</p>
            </div>
          )}
        </div>

        <div className="w-full my-4">
          <p className="text-xl mb-1">Your Passport</p>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ width: "100%", height: "50px" }}
            style={{ backgroundColor: "#213A57", color: "white" }}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handlePassportUpload} />
          </Button>

          {passportName && (
            <div className="mt-2">
              <p>Uploaded File: {passportName}</p>
            </div>
          )}
        </div>

        <div className="w-full my-4">
          <p className="text-xl mb-1">Your Fingerprint</p>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ width: "100%", height: "50px" }}
            style={{ backgroundColor: "#213A57", color: "white" }}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={handleFingerprintUpload}
            />
          </Button>

          {fingerprintName && (
            <div className="mt-2">
              <p>Uploaded File: {fingerprintName}</p>
            </div>
          )}
        </div>

        <div className="w-full my-4">
          <p className="text-xl mb-1">Your Signature</p>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ width: "100%", height: "50px" }}
            style={{ backgroundColor: "#213A57", color: "white" }}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleSignatureUpload} />
          </Button>

          {signatureName && (
            <div className="mt-2">
              <p>Uploaded File: {signatureName}</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full my-4">
        <Button
          style={{ backgroundColor: "#213A57", color: "white" }}
          fullWidth
          className="font-poppins font-bold"
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          fullWidth
          className="font-poppins font-bold mt-3"
          style={{ color: "#0C6478" }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default uploadDocuments;
