import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddPatientForm = () => {

    const [newPatient, setPatient] = useState({
        id: uuidv4(),
        first_name: "First Name",
        last_name: "Last Name",
        birth_year: "Year of Birth",
        phone: "Phone",
        email: "E-mail",
        sick: false,
      });
    
      
      
    const onInput = (event) => {
        const property = event.target.name;
        setPatient({
          ...newPatient,
          [property]: event.target.value,
        });
    };
    
    const dispatch = useDispatch();
    
    const onSubmit = (event) => {
        event.preventDefault();
    
        const action = {
        type: "ADDPATIENT",
        payload: newPatient,
        };
        dispatch(action);
    };
    
            
    return (
        <div className="formItem">
            <h4>Add new patient</h4>
            <form className="newPatient" onSubmit={onSubmit}>
                <input
                placeholder={newPatient.first_name}
                type="text"
                name="first_name"
                onInput={onInput}
                />
                
                <input
                placeholder={newPatient.last_name}
                type="text"
                name="last_name"
                onInput={onInput}
                />
                
                <input
                placeholder={newPatient.birth_year}
                type="text"
                name="birt_year"
                onInput={onInput}
                />
                
                <input
                placeholder={newPatient.phone}
                type="text"
                name="phone"
                onInput={onInput}
                />
                
                <input
                    placeholder={newPatient.email}
                    type="text"
                    name="email"
                    onInput={onInput}
                />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
    
}

export default AddPatientForm