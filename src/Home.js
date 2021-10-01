import React, { useState }from "react";
import "./App.css";
import AddPatientForm from "./forms/AddPatientForm";
import AddDentistForm from "./forms/AddDentistForm";
import AppointmentList from "./AppointmentList"
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const dentists = useSelector(state => state.dentists);
  const appointments  = useSelector(state => state.appointments);
  const patients = useSelector(state => state.patients)
  const [localAppointments, setAppointments ] = useState([...appointments]);
  const [id, setId] = useState("");
  const [localPatient, setPatient] = useState({})
  const [newAppointment, setNewAppointment] = useState({
        day: null,
        time: null,
        patient: {},
        dentist: {},
        key: uuidv4()
  })

  const dispatch = useDispatch();
 
  const onInput = (event) => {
    const lastName = event.target.value.toLowerCase();
    const patient = patients.find(patient => patient.last_name.toLowerCase() === lastName)
    console.log(patient)
    setNewAppointment({
      ...newAppointment,
      patient: patient
    })
};

  const selectDentist = (event) => {
    const id = event.target.value;
    const dentist = dentists.find(dentist => dentist.id === id)
    setNewAppointment({
      ...newAppointment,
      dentist: dentist
    })
  }

  const selectDay = (event) => {
    const day = event.target.value;
    setNewAppointment({
      ...newAppointment,
      day: day
    })
  }

  const checkAvailable = (event) => {
    event.preventDefault()
    console.log(newAppointment)
    console.log(appointments)
    const times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    const id = newAppointment.dentist.id
    const appointmentsThisDay = appointments.filter(appointment => appointment.day === parseInt(newAppointment.day) && appointment.dentist.id === id)
    const appoinmentTimesThisDay = appointmentsThisDay.map(appointment => appointment.time)
    const availableTimes = times.filter(time => !appoinmentTimesThisDay.includes(time))
    /// popup met available times die je aan kan klikken?
     }
   

  const handleSelect = (event) => {
    event.preventDefault()
    const filtered = appointments.filter(appointment => {
      return appointment.dentist.id === event.target.value
    })
    setAppointments(filtered)
    setId(event.target.value)
  }

  const reportSick = (event) => {
    event.preventDefault()
    const action = {
      type: "SICKD",
      payload: id
    }
    dispatch(action) 
  }

  const getName = (event) => {
    event.preventDefault()
    const lastName = event.target.value.toLowerCase();
    const filtered = appointments.filter(app => app.patient.last_name.toLowerCase() === lastName);
    setAppointments(filtered)
    setPatient({last_name: lastName})  
  }

  const patientIsSick = (event) => {
    event.preventDefault()
    const patient = patients.find(patient => patient.last_name.toLowerCase() === localPatient.last_name.toLowerCase())
   
    const action = {
      type: "SICKP",
      payload: patient.id
    }
    dispatch(action)
    setAppointments([...appointments])
  }

  const handleClick = async (event) => {
    event.preventDefault()
    const id = event.target.value
    const action = {
        type: "CANCEL",
        payload: id
    }
    dispatch(action)
    setAppointments([...appointments])
  }
    

    return(
      <div className='Home'>
          <AddPatientForm />
          <AddDentistForm />

          <div className="formItem">
            
            <form onSubmit={checkAvailable}>
                <h4>Make new appointment</h4>
                
                <input type="text" placeholder="Last Name" onChange={onInput}/>
                
                <select onChange={selectDay}>
                  <option>Select Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
              </select>

              <select onChange={selectDentist}>
                  <option>Select Dentist</option>
                    {dentists.map((dentist) => {
                      return (
                        <option value={dentist.id} key={dentist.id} >
                          {dentist.first_name} {dentist.last_name}
                        </option>
                  );
                })}
              </select>                
              
              <input type="submit" value="Check availability" />
            
            </form>
          </div>
        
          <div className="formItem">
            <form onSubmit={reportSick}>
              <h4>Dentist is sick</h4>
              
              <select onChange={handleSelect}>
                  <option>Select Dentist</option>
                    {dentists.map((dentist) => {
                      return (
                        <option value={dentist.id} key={dentist.id} >
                          {dentist.first_name} {dentist.last_name}
                        </option>
                  );
                })}
              </select>

              <input type="submit" value="Report Sick" />
          </form>
      </div>

      <div className="formItem">
          <form onSubmit={patientIsSick}>
                <input type="text" placeholder="Patient Last Name" onInput={getName}/>
                <input type="submit" value="Report Sick"/>
          </form>
      </div>

      <table className="appointment-table">
          <tbody>
            <tr className="appointment-header">
              <th className="column-patient">Patient</th>
              <th className="column-dentist">Dentist</th>
              <th className="column-assistant">Assistant</th>
              <th className="column-date">Date</th>
              <th className="column-time">Time</th>
              <th className="column-remove"></th>
            </tr>
          </tbody>
          
          <AppointmentList appointments={localAppointments} handleClick={handleClick} />
          
      </table>
    </div>
  )
}

export default Home
