import { generateRandomAppointments } from '../..utils';

const appointmentsWithDupes = generateRandomAppointments();
console.log(appointmentsWithDupes)
// const appointments = () => {
//     appointmentsWithDupes.filter(appointment => {
//         if (appointment.)
//     })
// }

const appointmentReducer = (state = appointments, action) => {
    switch(action.type) {

        case "ADDAPPOINTMENT":
            return state.concat(action.payload)

        case "CANCELAPPOINTMENT":
            return state.filter(appointment => appointment.id !== action.payload)

        default:
            return state;
    }
}

export default appointmentReducer