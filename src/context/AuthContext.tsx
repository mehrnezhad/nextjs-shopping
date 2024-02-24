'use client'
import { createContext, useState } from "react";
import type {AuthContextProps } from "@/type/authcontext"
export const AuthContext = createContext<AuthContextProps>({
    user :  null , 
    setUser: (user: string| null) => {}
});

export const AuthProvider = ({children} : {children : React.ReactNode})=>{
    const [user , setUser ]= useState<string | null>(null);
  return(
    <AuthContext.Provider value = {{user, setUser}}>
        {children}
    </AuthContext.Provider>

  )

}