import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import { useAuth0 } from "@auth0/auth0-react";

interface UserDetails{
  email: string,
  role: string
}

export function useAuth() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>();
  const { user, logout: auth0Logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if(isAuthenticated){
        setUserDetails({
            email: user?.email || '',
            role: 'USER'
        });
        setAuthToken(null);
    }
    else{
        const token = localStorage.getItem("authToken");
        if (token) {
        const decodedToken:any = jwtDecode(token);
        setUserDetails({
            email: decodedToken.sub,
            role: decodedToken.role
        })
        setAuthToken(token);
        }
    }
  }, [isAuthenticated]);

  const logout = () => {
    if(isAuthenticated){
        auth0Logout({ logoutParams: { returnTo: window.location.origin } });
    }
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setUserDetails(null);
  };

  return {
    authToken,
    userDetails,
    user,
    logout,
  };
}
