import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(({ time, patient }, index) => (
    <AppointmentInMonth time={time} patient={patient} key={index} />
  ));
  const appointmentsJSXsorted = appointmentsJSX.sort((a,b) => a.props.time - b.props.time)

  return <div className="day">{appointmentsJSXsorted}</div>;
};