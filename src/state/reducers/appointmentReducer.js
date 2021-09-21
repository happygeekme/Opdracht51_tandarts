import generateRandomAppointments from '../..utils';

const appointments = generateRandomAppointments;

const appointmentReducer = (state = appointments, action) => {
    switch(action.type) {
        case "addAppointment":
            return state.concat(action.payload)
        case "cancelAppointment":
            return state.filter(appointment => appointment.id !== action.payload)
        default:
            return state;
    }
}

export default appointmentReducer