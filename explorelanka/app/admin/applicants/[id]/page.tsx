"use client";
import React from "react";
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
  Input,
  CardFooter,
  Button
} from "@material-tailwind/react";
import personalInfo from "./personalInfo";

export default function page() {
  const { id } = useParams();
  const [userData, setUserData] = React.useState({
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    nationality: "American",
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

  const PersonalInfo = personalInfo({
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    nationality: "American",
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


  const data = [
    {
      label: "Personal Info",
      value: "perosnal",
      desc: (
        <>
        {PersonalInfo}
        </>
      ),
    },
    {
      label: "Spouse Info",
      value: "spouse",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Contact",
      value: "contact",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Profession",
      value: "profession",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Passport Info",
      value: "passport",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Visit Info",
      value: "visit",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Emergency",
      value: "emergency",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Wallet Info",
      value: "wallet",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Documents",
      value: "documents",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

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
            <Typography variant="paragraph" color="blue-gray" className="">
              Interpol Status
            </Typography>
            <div className="w-5 h-5 bg-red-500 text-white px-2 py-1 rounded-2xl"></div>
          </div>
        </div>
      </CardHeader>
      <hr className="my-4" />

      <CardBody className="w-full">
        <div style={{ width: "100%" }}>
          <Tabs value="html" orientation="vertical">
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
      <CardFooter>
        <div className="flex justify-end">
        <Button color="green" style={{marginRight: 5}}>Approve</Button>
        <Button color="red">Reject</Button>
        </div>
        </CardFooter>
    </Card>
  );
}
