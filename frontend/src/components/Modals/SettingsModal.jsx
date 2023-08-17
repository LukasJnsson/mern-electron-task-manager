
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplaySettings } from '../../features/settings/settings.feature';
import DarkMode from '../Default/DarkMode';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import SettingsIcon from '@mui/icons-material/Settings';


export default function SettingsModal() {

  const dispatch = useDispatch();
  const { displaySettings } = useSelector((state) => state.settings);

  /**
   * Function that handle the visibility of the settings modal 
   * by setting the visability to the state
   */
  const handleDisplaySettings = () => {
    const visability = displaySettings ? false : true;
    dispatch(setDisplaySettings(visability));
  };

  return (
    <div className='outer-settings-modal'>
      <Button className='inner-modal' onClick={handleDisplaySettings}><SettingsIcon /></Button>
        <Modal open={!!displaySettings} onClose={handleDisplaySettings}>
          <ModalDialog aria-labelledby="variant-modal-title">
            <ModalClose />
                <Typography id="variant-modal-title" component="h2">Settings</Typography>
                <Typography component="label" endDecorator={<DarkMode /> }>Dark Mode</Typography>
            </ModalDialog>
        </Modal>
    </div>
  );
};