import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Payment } from "./Payment";
import { NavBar } from "./NavBar";
import { Booking } from "./Booking";
import { Units } from "./Units";
import { Statements } from "./Statements";

export const Rout=()=>{
    return(
        <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="Dash" element={<Dashboard/>}/>
            <Route path="Pay" element={<Payment/>}/>
            <Route path="Book" element={<Booking/>}/>
            <Route path="Units" element={<Units/>}/>
            <Route path="State" element={<Statements/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}