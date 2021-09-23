import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addPatient } from '../state/actions/index'
import { v4 as uuidv4 } from 'uuid';

const Patientform = () => {   
    
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [birthYear, setBirthYear] = useState("Birth Year");
    const [phone, setPhone] = useState("Phone");
    const [email, setEmail] = useState("Email");

    const dispatch = useDispatch();    

    const onInputFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const onInputLastName = (event) => {
        setLastName(event.target.value)
    }

    const onInputBirthYear = (event) => {
        setBirthYear(event.target.value)
    }

    const onInputPhone = (event) => {
        setPhone(event.target.value)
    }

    const onInputEmail = (event) => {
        setEmail(event.target.value)
    }

  

    const onSubmit = (event) => {
        event.preventDefault();
        const newPatient = {
            first_name: firstName,
            last_name: lastName,
            birth_year: birthYear,
            phone: phone,
            email: email,
            isSick: false,
            id: uuidv4(),
        }
        dispatch(addPatient(newPatient))
    }

return(
    <div className="patientForms">
                    <h4>Add new patient</h4>
                    <form 
                        className="newPatient"
                        onSubmit={onSubmit}
                    >
                        <input
                            className="formItem"
                            placeholder={firstName}
                            type="text"
                            name="first_name"
                            onInput={onInputFirstName}
                            
                        />
                         <input
                            className="formItem"
                            placeholder={lastName}
                            type="text"
                            name="last_name"
                            onInput={onInputLastName}
                        />
                         <input
                            className="formItem"
                            placeholder={birthYear}
                            type="text"
                            name="birt_year"
                            onInput={onInputBirthYear}
                        />
                         <input
                            className="formItem"
                            placeholder={phone}
                            type="text"
                            name="phone"
                            onInput={onInputPhone}
                        />
                        <input
                            className="formItem"
                            placeholder={email}
                            type="text"
                            name="email"
                            onInput={onInputEmail}
                        />
                        <input type="submit" value="Add"/>  
                    </form>

                </div>
)
}



export default Patientform