import React from 'react'
import Header from "../pages/Header/Header.jsx";
import Footer from "../pages/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Root(){
    return(
        <>
        <Header/>
        <div className={"bg-[#111827]"}>
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}