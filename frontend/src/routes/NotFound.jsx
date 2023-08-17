
import React from 'react';
import useTitle from '../hooks/useTitle';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';


export default function NotFound() {
  useTitle('Not Found');

  return (
    <>
      <AuthenticatedLayout>
        <div className='outer-not-found'>
          <h1>Not Found...</h1>
        </div>
      </AuthenticatedLayout>
    </>
  );
};