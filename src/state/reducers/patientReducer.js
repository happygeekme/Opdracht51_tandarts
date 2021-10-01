import { patients } from "../../data/patients";

const initialState = patients

const patientReducer = (state = initialState, action) => {
   
    switch(action.type) {
        
        case "ADDPATIENT":
            return state.concat(action.payload)
            
        case "SICKP": {
            return state.map(patient => {
                    if (patient.id !== action.payload) {
                        return patient
                    }
                    return {
                        ...patient,
                        sick: true
                    }
                })
            
         
        }
     
      
        default:
            return state;
    }
}

export default patientReducer