import React from "react";
import appointmentForm from './forms/AppointmentForm';
import dentistForm from './forms/DentistForm';
import patientform from './forms/PatientForm'
import "./App.css";
import Patientform from "./forms/PatientForm";

function Home() {



    return(
        <div className='Home'>
          <Patientform />
        </div>
    )


    
}

export default Home
