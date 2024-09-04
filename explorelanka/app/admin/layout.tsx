import React from 'react';
import SideNav from './sidenav';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex w-full h-screen">
      <div className='h-screen' style={{width: "20%", padding: 10}}>
        <SideNav />
      </div>
      <div className="flex flex-col overflow-auto" style={{width: "80%"}}>
        <div className="flex-grow p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
