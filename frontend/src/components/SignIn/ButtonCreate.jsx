
import React from 'react';
import FormControl from '@mui/joy/FormControl';
import Button from '@mui/joy/Button';
import LinkMUI from '@mui/joy/Link';


export default function ButtonCreate(props) {

  const { link, icon, authProvider } = props;

  return (
    <FormControl>
        <LinkMUI href={link} target='_blank' underline='none'>
          <Button className='inner-signin-create-form-button'>
            {icon}{`Create ${authProvider} Account`}
          </Button>
        </LinkMUI>
    </FormControl>
  );
};