
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AuthSuccess() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigate('/');
    }, 100);
  }, [navigate]);

  return (
    <div>
        Authenticated
    </div>
  );
};