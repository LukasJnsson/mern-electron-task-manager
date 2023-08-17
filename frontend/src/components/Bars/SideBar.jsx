
import React from 'react';
import Navbar from './Navbar';
import UserIcon from '../Default/UserIcon';
import SettingsModal from '../Modals/SettingsModal';


export default function SideBar() {
  return (
    <aside className='outer-side-bar'>
        <UserIcon />
        <Navbar />
        <SettingsModal />
    </aside>
  );
};