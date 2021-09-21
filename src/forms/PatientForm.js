import React from "react";
import { useSelector } from "react-redux";


class Patientform extends React.Component{
    constructor(){
        super()
    }

    render() {
        const patients = useSelector(state => state.patients)

        return(
            
                    <form className="newPatient">
                        <input
                            className="formItem"
                            placeholder="first_name"
                            type="text"
                        />
                         <input
                            className="formItem"
                            placeholder="last_name"
                            type="text"
                        />
                         <input
                            className="formItem"
                            placeholder="birthyear"
                            type="text"
                        />
                        <input
                            className="formItem"
                            placeholder="email-address"
                            type="text"
                        />
                        <button type="submit"/>  
                    </form>
                )
        }
}

export default Patientform