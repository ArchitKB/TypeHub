import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes


import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default function App(){
    return (
        <Router>
            <div>
                
                <Routes>
                <Route path="/" element={<Header/>}/>

                    <Route path="/login" element={<Login/>}/> {/* Use "path" instead of "exact path" */}
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
               
            </div>
        </Router>
    );
  
};
