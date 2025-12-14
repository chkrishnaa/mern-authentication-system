import axios from "axios";
import { createContext, use, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppContext = createContext();
const AppContextProvider = (props)=>{

    axios.defaults.withCredentials=true;
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userData, setUserData]=useState(false);


const getAuthStatus = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
            if(data.success){
                setIsLoggedIn(true);
                getUserData();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

const getUserData= async()=>{
    try{
        const {data} = await axios.get(backendUrl+"/api/user/data");
        data.success?setUserData(data.userData)
        :toast.error(data.message);

        setUserData(data);
    }catch(error){
        toast.error(error.message);
    }
}

useEffect(()=>{
    getAuthStatus();
},[]);

    const value={
        backendUrl,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData, getUserData,
    }
    return(
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}