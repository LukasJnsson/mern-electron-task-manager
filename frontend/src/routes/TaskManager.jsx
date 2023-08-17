
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import SignIn from './SignIn';
import NotFound from './NotFound';
import AuthSuccess from './AuthSuccess';
import AuthFailed from './AuthFailed';


export default function TaskManager() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route index exact path='/' element={<Home />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/auth/success' element={<AuthSuccess />} />
            <Route path='/auth/failed' element={<AuthFailed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};