import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistant }) => (
<li className="appointment">
  <div className="time">{format_time(time)}</div>
  <div className="patient">Patiënt: {patient.first_name} {patient.last_name}</div>
  <div className="dentist">Tandarts: {dentist.first_name} {dentist.last_name}</div>
  <div className="assistant">Assistent: {assistant.first_name} {assistant.last_name}</div>
</li>
);
