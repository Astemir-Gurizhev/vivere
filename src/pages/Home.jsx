import React from "react";
import Kbr from "../components/Kbr/Kbr"
import First from "../components/First/First"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Install from "../components/Install/Install"
const Home = () => {
    return (
        <>
        <Header/>
           <First/>
           <Kbr/> 
           <Install/>
           <Footer/>
        </>
    )
}

export default Home