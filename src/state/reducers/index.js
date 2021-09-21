import { combineReducers } from "redux";
import dentistReducer from "./dentistReducers";
import patientsReducer from "./patientReducer";
import appointmentReducer from "./patientReducer"


const reducers = combineReducers ({
    dentists: dentistReducer,
    patients: patientsReducer,
    appointments: appointmentReducer
})

export default reducers