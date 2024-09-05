"use client"
import React from 'react'

type documentsProps = {
    profile_image: string;
    passport_copy: string;
    signature: string;
    finger_print: string;
}

const input_margin = { margin: 5 };

export default function documents({profile_image, passport_copy, signature, finger_print}: documentsProps) {
  return (
    <div className='w-full'>
        <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "50%" }}>
                <div style={input_margin}>
                    <div>Profile Image</div>
                    <img src={profile_image} alt="profile image" />
                </div>
                <div style={input_margin}>
                    <div>Passport Copy</div>
                    <img src={passport_copy} alt="passport copy" />
                </div>
            </div>
            <div style={{ width: "50%" }}>
                <div style={input_margin}>
                    <div>Signature</div>
                    <img src={signature} alt="signature" />
                </div>
                <div style={input_margin}>
                    <div>Finger Print</div>
                    <img src={finger_print} alt="finger print" />
                </div>
            </div>
        </div>
    </div>
  )
}
