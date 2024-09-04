"use client";
import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  DocumentTextIcon,
  UsersIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function SideNav() {
  return (
    <Card className="h-full w-full max-w-[20rem] p-4 border border-black-500 shadow-xxl shadow-black-900">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Explore Lanka Admin
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <DocumentTextIcon className="h-5 w-5" />
          </ListItemPrefix>
          Manage Visa
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UsersIcon className="h-5 w-5" />
          </ListItemPrefix>
          Applicants
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
