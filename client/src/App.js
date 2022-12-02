import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Write from "./components/write/Write";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import SignUp from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import SinglePost from "./components/singlePost/SinglePost";
// import {useContext} from "react";
// import {Context} from "./context/Context";

function App() {
   //const { user } = useContext(Context);
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    
    </>
  );
}

export default App;
