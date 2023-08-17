
import React from 'react';
import FormControl from '@mui/joy/FormControl';
import Button from '@mui/joy/Button';
import LinkMUI from '@mui/joy/Link';


export default function ButtonSignIn(props) {

  const { link, icon, authProvider } = props;

  return (
    <FormControl>
        <LinkMUI href={link} underline='none'>
          <Button className='inner-signin-form-button'>
            {icon}{`Continue with ${authProvider}`}
          </Button>
        </LinkMUI>
    </FormControl>
  );
};