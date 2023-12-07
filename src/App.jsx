import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"


export default () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}


