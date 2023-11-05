import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Body from "./Components/Body";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default function App(){
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login/>}/> {/* Use "path" instead of "exact path" */}
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
                <Body />
            </div>
        </Router>
    );
};
