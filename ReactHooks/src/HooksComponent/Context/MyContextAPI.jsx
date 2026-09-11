import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext();

export const MyContextAPI = ({children}) => {

    const [user,setUser] = useState({
        firstName: "Arif",
        lastName: "Khan",
        email: "arif@gmail.com"
    })


  return (
    <GlobalContext.Provider value={{user}}>
            {children}
    </GlobalContext.Provider>
  )
}


export const userData = ()=> useContext(GlobalContext)