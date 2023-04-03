import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import HomeContainer from "./home";

 const Feed =()=>{

    return(
        <>
       <Navbar/>
      
        <Outlet />
        </>
    )
}

export default Feed;