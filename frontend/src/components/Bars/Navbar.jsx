
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoginIcon from '@mui/icons-material/Login';


export default function Navbar() {
  return (
    <nav className='outer-navbar'>
      <ul className='inner-navlinks'>
        <li>
        <NavLink to='/'><HomeIcon /></NavLink>
        </li>
        <li>
        <NavLink to='/calendar'><CalendarMonthIcon /></NavLink>
        </li>
        <li>
        <NavLink to='/signin'><LoginIcon /></NavLink>
        </li>
      </ul>
    </nav>
  );
};