import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { addDentist, makeDentistIll } from './state/actions'
import "./App.css";

function Home() {

    const dentists = useSelector((state) => state.dentists)
    const dispatch = useDispatch()
    
    // dentists.forEach(dentist => {
    //     const ul = document.getElementByid("dentists")
    //     const name = dentist.first_name
    // });

    return(
        <div className='Home'>
            <ul id="dentists"><h3>Dentists:</h3></ul>
        </div>
    )

//    for(let i = 0; i < dentists.length; i++) {
//         const name = dentists[i].last_name;
//         const id = dentists[i].id
//         const dropdownList = document.getElementById("dentistSick")
//         const option = document.createElement("option");
//         option.textContent = name;
//         option.value = name;
//         option.id = id;
//         console.log(dropdownList)
//    }
    

//     return(
//         <div className="home">
//             <form className="dentist">
//             <select id="dentistSick">
//             <option>Select dentist if sick</option>
//             </select>
//             </form>
//         </div>
//     )
    
}

export default Home
