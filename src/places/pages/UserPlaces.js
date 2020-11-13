import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [    
  {
  id: 'p1',
  title: 'Balfour',
  imageUrl: 'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/7543B6729DBB07E7B5A7CCD81A6CB59A_800x392.20200808T214133.jpg',
  address: 'Paris sq. Jerusalem, Israel',
  location: {
      lat: 31.7749837,
      lng: 35.219797
      },
      creator: 'u1'
  },
  {
      id: 'p2',
      title: 'Rabin Square',
      imageUrl: 'https://img.wcdn.co.il/f_auto,w_1200,t_54/3/0/4/3/3043003-46.jpg',
      address: 'Rabin sq. Tel Aviv, Israel',
      location: {
          lat: 32.0806046,
          lng: 34.7826345
          },
          creator: 'u2'
      } 
];

const UserPlaces = () => {
  const userId = useParams().userId;
  console.log(userId)
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
