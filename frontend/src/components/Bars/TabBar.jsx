
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import serializeTabPayload from '../../utils/serialization/serializeTabPayload.util.js';
import { setHomeTaskTabDate } from '../../features/dates/dates.feature.js';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';


export default function TabBar() {

  const dispatch = useDispatch();
  const { homeTaskTabDate } = useSelector((state) => state.dates);
  const { selectedTab } = homeTaskTabDate;

  /**
   * Function that handle tab change by setting the selected tab to the state
   * @param {Event} event - The onChange event that invoked the function
   * @param {Number} tab - The selected tab
   */
  const handleTabChange = (event, tab) => {

    const dates = {
      0: dayjs().subtract(1, 'day'),
      1: dayjs(),
      2: dayjs().add(1, 'day')
    };

    const selectedDate = dates[tab];

    dispatch(setHomeTaskTabDate(serializeTabPayload(tab, selectedDate)));
  };

  /**
   * Function that set the active class on the selected tab
   * @param {Number} tab - The value of the selected tab
   * @returns {String} - The active class
   */
  const handleActiveTab = tab => {
    return tab === selectedTab && 'inner-tabs-active';
  };

  return (
    <div className='outer-tabs'>
      <div className='inner-tabs'>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <TabList>
            <Tab value={0} className={handleActiveTab(0)}>Yesterday</Tab>
            <Tab value={1} className={handleActiveTab(1)}>Today</Tab>
            <Tab value={2} className={handleActiveTab(2)}>Tomorrow</Tab>
        </TabList>
      </Tabs>
      </div>
    </div>
  );
};