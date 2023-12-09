import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Layout from "./components/Layout"


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='/Learn' element={<Learn/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
