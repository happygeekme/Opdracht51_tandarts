import { patients } from "../../data/patients";

const patientReducer = (state = patients, action) => {
    switch(action.type) {
        case "NEWPATIENT":

        case "ADDPATIENT":
            console.log(action.payload)
            return state.concat(action.payload)

        case "PATIENTISILL":
            return state;
        
        default:
            return state;
    }
}

export default patientReducer