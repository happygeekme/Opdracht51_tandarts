import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";

function Home() {

    const dentists = useSelector((state) => state.dentists)
    const dispatch = useDispatch()
    
    return(
        <div className="home">
            <form className="dentist">
            <label for="dentistSick">Select if dentist is sick</label>
            <select name="dentistSick">

            </select>
            </form>
        </div>
    )
    
}

export default Home
