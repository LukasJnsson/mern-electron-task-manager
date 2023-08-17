
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../features/settings/settings.feature';
import Switch from '@mui/joy/Switch';


export default function DarkMode() {

  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.settings);

  /**
   * Function that handle dark mode change by setting the mode to the state
   */
  const handleDarkModeChange = () => {
    const mode = darkMode ? false : true;
    dispatch(setDarkMode(mode));
  };

  return (
    <>
      <Switch checked={darkMode} onChange={handleDarkModeChange}/>
    </>
  );
};