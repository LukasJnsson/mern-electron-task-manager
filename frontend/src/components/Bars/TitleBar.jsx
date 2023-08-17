
import React from 'react';
import InformationModal from '../Modals/InformationModal';


export default function TitleBar() {
  return (
    <div className='outer-title-bar'>
      <p className='inner-title-bar-title'>Task Manager</p>
      <div className='inner-title-bar-modal'>
          <InformationModal />
      </div>
    </div>
  );
};