
import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InformationModal from '../Modals/InformationModal';
import ButtonSignIn from './ButtonSignIn';
import ButtonCreate from './ButtonCreate';


export default function SignInForm() {
  return (
    <div className='outer-signin-form'>
      <Card className='inner-signin-form'>
      <Typography className='inner-signin-form-title'>Sign In</Typography>
        <Divider inset="none" />
          <CardContent>
            <ul className='inner-signin-buttons'>
              <li>
                <ButtonSignIn
                icon={<GoogleIcon />} 
                link={process.env.REACT_APP_GOOGLE_AUTH} 
                authProvider='Google'
                />
              </li>
              <li>   
              <ButtonSignIn
              icon={<TwitterIcon />} 
              link={process.env.REACT_APP_TWITTER_AUTH}
              authProvider='Twitter' 
              />     
              </li>
              <li>
                <ButtonSignIn
                icon={<GitHubIcon />} 
                link={process.env.REACT_APP_GITHUB_AUTH} 
                authProvider='GitHub' 
                />   
              </li>
            </ul>
          <Divider inset="none" />
            <Typography className='inner-signin-form-section-title'>Or</Typography>
            <ul className='inner-create-buttons'>
              <li>
                <ButtonCreate
                icon={<GoogleIcon />} 
                link='https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp' 
                authProvider='Google' />
              </li>
              <li>
              <ButtonCreate
                icon={<TwitterIcon />} 
                link='https://twitter.com/i/flow/signup' 
                authProvider='Twitter' />       
              </li>
              <li>
              <ButtonCreate
                icon={<GitHubIcon />} 
                link='https://github.com/signup?source=login' 
                authProvider='GitHub' />      
              </li>
            </ul>
              <div className='inner-signin-form-modal'>
                <InformationModal icon={<QuestionMarkIcon />}
                title='Authentication Method' 
                text='Select authentication method in order to proceed to the Task Manager' />
              </div>
          </CardContent>
      </Card>
    </div>
  );
};