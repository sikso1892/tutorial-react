import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const users = [
    {
      id: 1,
      username: 'sikso',
      email: 'public.sikso@gmail.com'
    }, {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    }, {
      id: 3,
      username: 'liz',
      email: 'liz@gmail.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  }

  return (
    <>
      <UserList users={users}/>
    </>
  );
}

export default App;
