import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  
    const USERS = [
      {
        id: 'u1',
        name: 'Yair Shachar',
        image:
          'https://pbs.twimg.com/profile_images/612885975581110272/DwYjP7PB_400x400.jpg',
        places: 2
      }
    ];
  return <UsersList items={USERS} />;
};

export default Users;
