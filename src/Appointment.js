import React from 'react';

const Appointment = (props) => {
  
    return (
        <tr>
            <td>{props.patient.first_name} {props.patient.last_name}</td>
            <td>{props.dentist.first_name} {props.dentist.last_name}</td>
            <td>{props.assistant.first_name} {props.assistant.last_name}</td>
            <td>{props.day}</td>
            <td>{props.time}:00</td>
            <td>
                <button value={props.id} onClick={props.handleClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default Appointment