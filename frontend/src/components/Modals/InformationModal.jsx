
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayInformation } from '../../features/settings/settings.feature';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


export default function InformationModal() {

  const dispatch = useDispatch();
  const { displayInformation } = useSelector((state) => state.settings);

  /**
   * Function that handle the visibility of the information modal 
   * by setting the visibility to the state
   */
  const handleDisplayInformation = () => {
    const visability = displayInformation ? false : true;
    dispatch(setDisplayInformation(visability));
  };

  return (
    <>
      <Button className='inner-modal' color="neutral" onClick={handleDisplayInformation}><QuestionMarkIcon /></Button>
      <Modal open={!!displayInformation} onClose={handleDisplayInformation}>
        <ModalDialog aria-labelledby="variant-modal-title" aria-describedby="variant-modal-description">
          <ModalClose />
              <Typography id="variant-modal-title" component="h2">
                Task Manager
              </Typography>
              <Typography id="variant-modal-description">
                Electron cross-platform desktop application
              </Typography>
          </ModalDialog>
      </Modal>
    </>
  );
};