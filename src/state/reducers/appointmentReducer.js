import appointments from "../../data/utils";


const appointmentReducer = (state = appointments, action) => {
    console.log(appointments)
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