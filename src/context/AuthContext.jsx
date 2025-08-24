import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    // token state
    const existingToken = localStorage.getItem("authToken")
    const [token, setToken] = useState(existingToken )
    // user detail state
    const existingUser = localStorage.getItem("authUser")
    const [user, setUser] = useState(JSON.parse(existingUser))
    const [searchData, setSearchData] = useState([])
    const [isFound, setIsfound] = useState(false)
    const [data, setData] = useState([])

    const Login = (usrDetail) => {
        setToken(usrDetail.token)
        localStorage.setItem("authToken", usrDetail.token)
        const userData = {
            firstName : usrDetail.firstName,
            lastName : usrDetail.lastName,
            profilePicture : usrDetail.profilePicture,
        }
        setUser(userData)
        localStorage.setItem("authUser", JSON.stringify(userData))
    }
    const logOut = () => {
        localStorage.removeItem("authToken")
        localStorage.removeItem("authUser")
        setToken(null)
        setUser(null)
    }
  return (
    <AuthContext.Provider value={{token, user, logOut, Login, setSearchData, searchData, setIsfound, isFound, data, setData}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider