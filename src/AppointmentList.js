import React from "react";
import Appointment from "./Appointment";


function AppointmentList(props) {
  
    const appointments = props.appointments

    const listedAppointments = appointments.map(appointment => {
     
        return (
            <Appointment
            key={appointment.key}
            patient={appointment.patient}
            dentist={appointment.dentist}
            assistant={appointment.assistant}
            day={appointment.day}
            time={appointment.time}
            id={appointment.key}
            handleClick={props.handleClick}
        />
        );
    });

    return <tbody>{listedAppointments}</tbody>;
    
}

export default AppointmentList