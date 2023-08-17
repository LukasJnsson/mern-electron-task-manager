
import React from 'react';
import useTitle from '../hooks/useTitle';
import NonAuthenticatedLayout from '../layouts/NonAuthenticated';
import SignInForm from '../components/SignIn/SignInForm';


export default function SignIn() {
  useTitle('Sign In');

  return (
    <>
      <NonAuthenticatedLayout>
        <div className='outer-login'>
          <SignInForm />
        </div>
      </NonAuthenticatedLayout>
    </>
  );
};