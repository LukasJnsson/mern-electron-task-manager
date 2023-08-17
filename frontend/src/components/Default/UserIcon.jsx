
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';


export default function UserIcon() {

  const { username, userImage } = useSelector((state) => state.auth.user);

  return (
    <Avatar alt={username} src={userImage} />
  );
};