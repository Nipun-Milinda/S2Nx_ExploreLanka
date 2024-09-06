"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardHeader,
  Typography,
  Chip,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  CardFooter,
  Button,
} from "@material-tailwind/react";
// import { CheckIcon } from "@heroicons/24/outline";
import personalInfo from "./personalInfo";
import spouseInfo from "./spouseInfo";
import contactInfo from "./contactInfo";
import professionInfo from "./professionInfo";
import passportInfo from "./passportInfo";
import visitInfo from "./visitInfo";
import emergencyInfo from "./emergencyInfo";
import walletInfo from "./walletInfo";
import documents from "./documents";

// import {countries} from 'country-data';
import { countries } from 'country-data';

export default function page() {
  const { id } = useParams();
  const [openReject, setOpenReject] = React.useState(false);
  const [openAccept, setOpenAccept] = React.useState(false);
  const [interpolData, setInterpolData] = React.useState({});
  const [interpoleStaus, setInterpoleStatus] = React.useState("Fine");
  const [userData, setUserData] = React.useState({
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "Manley Solide",
    nationality: "Haiti",
    gender: "Male",
    dob: "12/12/1990",
    birth_place: "USA",
    birth_country: "USA",
    naturalized_place: "USA",
    naturalized_date: "12/12/1990",
    former_nationality: "USA",
    height: "169cm",
    married_status: "Married",
    country_of_domicle_add_l1: "USA",
    country_of_domicle_add_l2: "USA",
    country_of_domicle_add_l3: "USA",
    plan_on_accomodation_of_visit: "Relative",
    relatives_add_l1: "No.90",
    relatives_add_l2: "Colombo",
    relatives_add_l3: "Sri Lanka",
    req_status: "approved",
  });

  const [spouseData, setSpouseData] = React.useState({
    spouse_name: "Jane Michael",
    spouse_nationality: "American",
    spouse_address_l1: "No.90",
    spouse_address_l2: "USA",
    spouse_address_l3: "USA",
    spouse_passport_no: "123456",
    spouse_expiry_date: "12/12/2020",
  });

  const [contactData, setContactData] = React.useState({
    telephone: "0112345678",
    contact_no: "0712345678",
    email: "john@gmail.com",
    fax: "0112345678",
  });

  const [professionData, setProfessionData] = React.useState({
    employee_name: "John Michael",
    employee_address_l1: "No.90",
    employee_address_l2: "Colombo",
    employee_address_l3: "Sri Lanka",
    where_business_is: "USA",
    fax: "0112345678",
    email: "abc@gmail.com",
  });

  const [passportData, setPassportData] = React.useState({
    present_passport_no: "123456",
    present_passport_expiry_date: "12/12/2020",
    present_passport_issued_date: "12/12/2018",
    present_passport_issued_place: "USA",
    pre_passport_no: "123456",
    pre_passport_expiry_date: "12/12/2020",
    pre_passport_issued_date: "12/12/2018",
    pre_passport_issued_place: "USA",
  });

  const [presentVisitData, setPresentVisitData] = React.useState({
    object_of_visit: "Tourism",
    other_reason_of_visit: "Visiting Relatives",
    route_of_visit: "Direct",
    mode_of_visit: "Air",
    visa_period: "30 Days",
    reason_to_urge: "Family",
    prevoiusly_in_sri_lanka: "Yes",
  });

  const [previousVisitData, setPreviousVisitData] = React.useState({
    pre_visa_id: "123456",
    pre_visa_issued_date: "12/12/2018",
    pre_visa_type: "Tourist",
    leaving_date: "12/12/2019",
    from: "12/12/2019",
    to: "12/12/2019",
    purpose: "Tourism",
    last_residence_l1: "No.90",
    last_residence_l2: "Colombo",
    last_residence_l3: "Sri Lanka",
  });

  const [emergencyData, setEmergencyData] = React.useState([
    {
      name: "John Michael",
      mobile: "0712345678",
      relationship: "Father",
      address_l1: "No.90",
      address_l2: "Colombo",
      address_l3: "Sri Lanka",
    },
    {
      name: "Jane Michael",
      mobile: "0712345678",
      relationship: "Mother",
      address_l1: "No.90",
      address_l2: "Colombo",
      address_l3: "Sri Lanka",
    },
  ]);

  const [emergencyDataSl, setEmergencyDataSl] = React.useState([
    {
      name: "John Michael",
      mobile: "0712345678",
      relationship: "Father",
      address_l1: "No.90",
      address_l2: "Colombo",
      address_l3: "Sri Lanka",
    },
    {
      name: "Jane Michael",
      mobile: "0712345678",
      relationship: "Mother",
      address_l1: "No.90",
      address_l2: "Colombo",
      address_l3: "Sri Lanka",
    },
  ]);

  const [walletData, setWalletData] = React.useState({
    available_money: "10000",
    card_name: "Visa",
    amount_spent: "2000",
  });

  const [documentsData, setDocumentsData] = React.useState({
    profile_img:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    passport_img:
      "https://i1.wp.com/media.globalnews.ca/videostatic/news/4m4viy623q-fyim7z1d4p/JPEG_ONLINE_PASSPORT_KE.jpg?w=1200&quality=70&strip=all",
    signature:
      "https://repository-images.githubusercontent.com/8805592/85279ffa-7f4a-4880-8e41-59e8032b0f71",
    fingerprint:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY3My0wNjktdi5qcGc.jpg",
  });

  const getCountryCode = (countryName: string): string | null => {
    const country = countries.all.find((c) => c.name.toLowerCase() === countryName.toLowerCase());
    return country ? country.alpha2 : null;
  };

  const checkInterpolStatus = async () => {
    const resRed = await fetch(`https://ws-public.interpol.int/notices/v1/red?forename=${userData.name.split(' ')[0]}&name=${userData.name.split(' ')[1]}&nationality=${getCountryCode(userData.nationality)}&page=1&resultPerPage=200`);
    const dataRed = await resRed.json();

    console.log("Nationality", getCountryCode("France"));
    // console.log("Interpole", data.total);
    const resYellow = await fetch(`https://ws-public.interpol.int/notices/v1/yellow?forename=${userData.name.split(' ')[0]}&name=${userData.name.split(' ')[1]}&nationality=${getCountryCode(userData.nationality)}&page=1&resultPerPage=200`);
    const dataYellow = await resYellow.json();

    if (dataRed.total > 0){
        setInterpoleStatus("Red");
    }
    else if (dataYellow.total > 0){
        setInterpoleStatus("Yellow");
    }
    else{
        setInterpoleStatus("Fine");
    }
    setInterpolData(data);
  }

  useEffect(() => {
    checkInterpolStatus();
  }, [id, userData.name, userData.nationality]);


  const ownCountryRows = emergencyData.map((data, index) => ({
    name: data.name,
    mobile: data.mobile,
    relationship: data.relationship,
    address: data.address_l1 + "\n" + data.address_l2 + "\n" + data.address_l3,
  }));

  const sriLankaRows = emergencyDataSl.map((data, index) => ({
    name: data.name,
    mobile: data.mobile,
    relationship: data.relationship,
    address: data.address_l1 + "\n" + data.address_l2 + "\n" + data.address_l3,
  }));

  const PersonalInfo = personalInfo({
    img: userData.img,
    name: userData.name,
    nationality: userData.nationality,
    gender: userData.gender,
    dob: userData.dob,
    birth_place: userData.birth_place,
    birth_country: userData.birth_country,
    naturalized_place: userData.birth_place,
    naturalized_date: userData.naturalized_date,
    former_nationality: "USA",
    height: "169cm",
    married_status: "Married",
    country_of_domicle_add_l1: "USA",
    country_of_domicle_add_l2: "USA",
    country_of_domicle_add_l3: "USA",
    plan_on_accomodation_of_visit: "Relative",
    relatives_add_l1: "No.90",
    relatives_add_l2: "Colombo",
    relatives_add_l3: "Sri Lanka",
    req_status: "approved",
  });

  const SpouseInfo = spouseInfo({
    name: "Jane Michael",
    nationality: "American",
    postal_address_l1: "No.90",
    postal_address_l2: "USA",
    postal_address_l3: "USA",
    passport_no: "123456",
    expiry_date: "12/12/2020",
  });

  const ContactInfo = contactInfo({
    telephone: "0112345678",
    mobile: "0712345678",
    email: "john@gmail.com",
    fax: "0112345678",
  });

  const ProfessionInfo = professionInfo({
    employee_name: "John Michael",
    employee_address_l1: "No.90",
    employee_address_l2: "Colombo",
    employee_address_l3: "Sri Lanka",
    where_business_is: "USA",
    fax: "0112345678",
    email: "abc@gmail.com",
  });

  const PassportInfo = passportInfo({
    present_passport_no: "123456",
    present_passport_expiry_date: "12/12/2020",
    present_passport_issued_date: "12/12/2018",
    present_passport_issued_place: "USA",
    pre_passport_no: "123456",
    pre_passport_expiry_date: "12/12/2020",
    pre_passport_issued_date: "12/12/2018",
    pre_passport_issued_place: "USA",
  });

  const VisitInfo = visitInfo({
    object_of_visit: "Tourism",
    other_reason_of_visit: "Visiting Relatives",
    route_of_visit: "Direct",
    mode_of_visit: "Air",
    visa_period: "30 Days",
    reason_to_urge: "Family",
    prevoiusly_in_sri_lanka: "Yes",
    pre_visa_id: "123456",
    pre_visa_issued_date: "12/12/2018",
    pre_visa_type: "Tourist",
    leaving_date: "12/12/2019",
    from: "12/12/2019",
    to: "12/12/2019",
    purpose: "Tourism",
    last_residence_l1: "No.90",
    last_residence_l2: "Colombo",
    last_residence_l3: "Sri Lanka",
  });

  const WalletInfo = walletInfo({
    money_available_arrival: "10000",
    card_name: "Visa",
    amount_spent: "2000",
  });

  const EmergencyInfo = emergencyInfo({
    tableRows: ownCountryRows,
    tableRowsSl: sriLankaRows,
  });

  const DocumentInfo = documents({
    profile_image: documentsData.profile_img,
    passport_copy: documentsData.passport_img,
    signature: documentsData.signature,
    finger_print: documentsData.fingerprint,
  });

  const statusColor = {
    pending: "orange",
    monitored: "blue",
    approved: "green",
    rejected: "red",
  }[userData.req_status];

  const interPoleColor = {
    Red: "red",
    Yellow: "yellow",
    Fine: "green",
  }[interpoleStaus];

  const data = [
    {
      label: "Personal Info",
      value: "perosnal",
      desc: <>{PersonalInfo}</>,
    },
    {
      label: "Spouse Info",
      value: "spouse",
      desc: <>{SpouseInfo}</>,
    },
    {
      label: "Contact",
      value: "contact",
      desc: <>{ContactInfo}</>,
    },
    {
      label: "Profession",
      value: "profession",
      desc: <>{ProfessionInfo}</>,
    },
    {
      label: "Passport Info",
      value: "passport",
      desc: <>{PassportInfo}</>,
    },
    {
      label: "Visit Info",
      value: "visit",
      desc: <>{VisitInfo}</>,
    },
    {
      label: "Emergency",
      value: "emergency",
      desc: <>{EmergencyInfo}</>,
    },
    {
      label: "Wallet Info",
      value: "wallet",
      desc: <>{WalletInfo}</>,
    },
    {
      label: "Documents",
      value: "documents",
      desc: <>{DocumentInfo}</>,
    },
  ];

  const handleOpenReject = () => setOpenReject(!openReject);
  const handleOpenAccept = () => setOpenAccept(!openAccept);
  return (
    <Card className="h-full w-full p-4">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none"
        style={{ marginBottom: 10 }}
      >
        <div className="flex items-center justify-between gap-8">
          <div className="flex gap-3 items-center">
            <Typography variant="h5" color="blue-gray" className="">
              Application ID :
            </Typography>
            <Chip value={id} />
          </div>

          <div className="flex gap-3 items-center">
            <Chip
              variant="ghost"
              size="sm"
              value={userData.req_status}
              color={statusColor}
            />
            <Chip
              variant="ghost"
              size="sm"
              value={interpoleStaus}
              color={interPoleColor}
            />
          </div>
        </div>
      </CardHeader>
      <hr className="my-4" />

      <CardBody className="w-full">
        <div style={{ width: "100%" }}>
          <Tabs value="perosnal" orientation="vertical">
            <div style={{ width: "80%" }}>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value} className="py-0">
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
            <div style={{ width: "20%" }}>
              <TabsHeader>
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value} defaultValue="personal">
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </div>
          </Tabs>
        </div>
      </CardBody>
      <hr className="my-4" />
      <CardFooter>
        <div className="flex justify-end">
          <Button
            color="red"
            className="flex items-center gap-3"
            style={{ marginRight: 5 }}
            onClick={handleOpenReject}
          >
            Reject
          </Button>
          <Button
            color="green"
            className="flex items-center gap-3"
            onClick={handleOpenAccept}
          >
            Approve
            {/* <CheckIcon class="h-6 w-6 text-gray-500" /> */}
          </Button>
        </div>
      </CardFooter>
      <Dialog open={openReject} size="lg" handler={handleOpenReject}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Reject Application {id}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpenReject}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Write the reason of rejecting the application.
          </Typography>

          <Chip
            variant="ghost"
            size="sm"
            value={contactData.email}
            color="black"
            style={{ width: "auto" }}
          />
          <div className="">
            <div style={{ marginBottom: 10, marginTop: 10 }}>
              <Textarea label="Reason" />
            </div>

            <Textarea label="Message" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpenReject}>
            cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={handleOpenReject}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>

      <Dialog open={openAccept} size="lg" handler={handleOpenAccept}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Accept Application {id}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpenReject}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Chip
            variant="ghost"
            size="sm"
            value={contactData.email}
            color="black"
            style={{ width: "auto" }}
          />
          <div className="">
            <div style={{ marginBottom: 10, marginTop: 10 }}>
              <Input label="Visa Charges" />
            </div>

            <Textarea label="Message" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpenAccept}>
            cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={handleOpenAccept}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </Card>
  );
}
