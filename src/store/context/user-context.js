import { createContext, useState } from "react";


export const UserContext = createContext({
  username: '',
  login: (username, password) => {},
  logout: () => {}
})

const UserProvider = ({children}) => {

  const [username, setUsername] = useState('')

  const signIn = (username, password) => {

  }

  const signOut  = () => {

  }

  const value = {
    username: username,
    login: signIn,
    logout: signOut
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}