
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AuthFailed() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigate('/signin');
    }, 100);
  }, [navigate]);

  return (
    <div>
        Not authenticated
    </div>
  );
};