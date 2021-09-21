import { patients } from "../../data/patients";

const patientReducer = (state = patients, action) => {
    switch(action.type) {
        case "addPatient":
            return state.concat(action.payload)

        case "patientIsIll":
            return state;
        
        default:
            return state;
    }
}

export default patientReducer