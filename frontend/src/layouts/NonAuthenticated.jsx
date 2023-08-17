
import React from 'react';
import TitleBar from '../components/Bars/TitleBar';


export default function NonAuthenticatedLayout({ children }) {
  return (
    <>
      <TitleBar />
        <div className='inner-non-authenticated-container'>
          {children}
        </div>
    </>
  );
};