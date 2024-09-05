"use client";
import { useState } from "react";
import {
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, EyeIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const TABS = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Monitored", value: "monitored" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

const TABLE_HEAD = ["Applicant", "Country", "Status", "Applied At", "", ""];

const TABLE_ROWS = [
  {
    req_id: "ap001",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    nationality: "American",
    country: "USA",
    status: "approved",
    applied_date: "23/04/18",
    applied_time: "10:30 AM",
  },
  {
    req_id: "ap002",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    nationality: "British",
    country: "UK",
    status: "monitored",
    applied_date: "23/04/18",
    applied_time: "11:15 AM",
  },
  {
    req_id: "ap003",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    nationality: "French",
    country: "France",
    status: "rejected",
    applied_date: "19/09/17",
    applied_time: "02:45 PM",
  },
  {
    req_id: "ap004",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    nationality: "Canadian",
    country: "Canada",
    status: "approved",
    applied_date: "24/12/08",
    applied_time: "08:20 AM",
  },
  {
    req_id: "ap005",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    nationality: "Australian",
    country: "Australia",
    status: "pending",
    applied_date: "04/10/21",
    applied_time: "09:30 AM",
  },
  {
    req_id: "ap006",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "John Williams",
    nationality: "Australian",
    country: "Australia",
    status: "pending",
    applied_date: "04/10/21",
    applied_time: "09:30 AM",
  },
];

export default function SortableTable() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredRows =
    selectedTab === "all"
      ? TABLE_ROWS
      : TABLE_ROWS.filter((row) => row.status === selectedTab);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-5" style={{ marginBottom: 10 }}>
              Manage Visa Applicants
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value={selectedTab} className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={() => setSelectedTab(value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72"></div>
        </div>
      </CardHeader>
      <CardBody className="overflow-y-auto h-80 px-0"> {/* Set fixed height here */}
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}
                    {index !== TABLE_HEAD.length-1 && index !== TABLE_HEAD.length-2 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(
              ({ req_id, img, name, nationality, country, status, applied_date, applied_time }, index) => {
                const isLast = index === filteredRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                const statusColor = {
                  pending: "orange",
                  monitored: "blue",
                  approved: "green",
                  rejected: "red",
                }[status];

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {nationality}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {country}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status}
                          color={statusColor}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {applied_date} {applied_time}
                      </Typography>
                    </td>
                    <td className={classes} style={{textAlign: "center"}}>
                      <Tooltip content="View User">
                        <IconButton variant="text" onClick={()=>{router.push(`/admin/applicants/${req_id}`)}}>
                          <EyeIcon className="h-6 w-6" />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Delete User">
                        <IconButton variant="text">
                          <TrashIcon className="h-6 w-6" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
