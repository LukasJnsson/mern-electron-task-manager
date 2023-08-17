
import React from 'react';
import TitleBar from '../components/Bars/TitleBar';
import SideBar from '../components/Bars/SideBar';


export default function AuthenticatedLayout({ children }) {
  return (
    <>
    <TitleBar />
      <div className='outer-authenticated-container'>
        <SideBar />
        <div className='inner-authenticated-container'>
          {children}
        </div>
      </div>
    </>
  );
};