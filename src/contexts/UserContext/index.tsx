import { createContext, useState, ReactNode } from 'react';
import { UserData } from '../../Types/UserData';

interface UserContextProps {
  userData?: UserData;
  setUserData?: React.Dispatch<React.SetStateAction<UserData>>;
}

type UserProviderType = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider: React.FC<UserProviderType> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({} as UserData);


  const contextValue: UserContextProps = {
    userData,
    setUserData
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};