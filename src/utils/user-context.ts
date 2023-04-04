import {createContext} from 'react';

export type UserInfoType = {
  username: string;
  bio: string;
  image_url: string;
};

export const initialUserState = {
  username: 'user',
  bio: 'Hey there!',
  image_url: '',
};

export const UserContext = createContext({
  userInfo: initialUserState,
  setUserInfo: (value: UserInfoType) => {},
});
