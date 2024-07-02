import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

//children here means jo bhi arha hai usko as it is use krlo/return krwa do/aage pass krdo
const UserContextProvider = ({children}) => {
  const [user,setUser]=useState(null)
  return (
    <>
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    </>
  );
};
export default UserContextProvider;
  