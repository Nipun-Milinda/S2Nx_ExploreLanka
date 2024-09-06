import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    visaApplication: {
        fullName: "",
        nationality: "",
        gender: "",
        naturalized: false,
        birthday: "",
        birthPlace: "",
        birthCountry: "",
        height: 0,
        maritalStatus: "",
        dom_HouseNo: "",
        dom_Street: "",
        dom_City: "",
        dom_PostalCode: "",
        accommodation_Type: "",
        acc_HouseNo: "",
        acc_Street: "",
        acc_City: "",
        acc_PostalCode: "",
        telephone: "",
        mobileNumber: "",
        fax: "",
        email: "",
        visitObjective: "",
        routeToLK: "",
        travelMode: "",
        requiredPeriod: "",
        otherReasons: "",
        previouslyVisited: false,
        other_ReasonToVisit: "",
        pre_VisaID: "",
        pre_VisaIssuedDate: "",
        pre_VisaType: "",
        pre_LeavingDate: "",
        pre_StartDate: "",
        pre_EndDate: "",
        pre_Purpose: "",
        pre_HouseNo: "",
        pre_Street: "",
        pre_City: "",
        moneyOnArrival: 0,
        creditCardAvailable: false,
        nameOfCard: "",
        amountSpent: 0,
        photoURL: "",
        fingerprintURL: "",
        signatureURL: "",
        approvalStatus: "",
        noticeStatus: "",
        userID: ""
    },
    userContact: {
        ownUserContact: {
            emg_Name: "",
            emg_MobileNumber: "",
            emg_Relationship: "",
            emg_HouseNo: "",
            emg_Street: "",
            emg_City: "",
            type: "",
            userID: ""
        },
        lkUserContact: {
            emg_Name: "",
            emg_MobileNumber: "",
            emg_Relationship: "",
            emg_HouseNo: "",
            emg_Street: "",
            emg_City: "",
            type: "",
            userID: ""
        }
    },
    passport: {
        currentPassport: {
            passportNo: "",
            placeOfIssue: "",
            dateOfIssue: "",
            dateOfExpiry: "",
            passportURL: "",
            currentPassport: false,
            userID: ""
        },
        oldPassport: {
            passportNo: "",
            placeOfIssue: "",
            dateOfIssue: "",
            dateOfExpiry: "",
            passportURL: "",
            currentPassport: false,
            userID: ""
        }
    },
    userProfession: {
        employer: "",
        addr_HouseNo: "",
        addr_Street: "",
        addr_City: "",
        postalCode: "",
        location: "",
        fax: "",
        email: "",
        userID: ""
    },
    userSpouse: {
        sp_FullName: "",
        sp_Nationality: "",
        sp_HouseNo: "",
        sp_Street: "",
        sp_City: "",
        sp_PassportNo: "",
        sp_DateOfExpiry: "",
        userID: ""
    }
}

export const visaApplicationSlice = createSlice({
    name: "visaApplication",
    initialState,
    reducers: {
        setVisaApplication: (state, action: PayloadAction<any>) => {
            return {...action.payload};
        },
    }
});

export const { setVisaApplication } = visaApplicationSlice.actions;
export default visaApplicationSlice.reducer;
