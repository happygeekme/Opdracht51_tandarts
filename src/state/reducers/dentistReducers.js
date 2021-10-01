import { dentists } from "../../data/dentists";

const initialState = dentists

const dentistReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case "ADDDENTIST": 
            return state.concat(action.payload);
    
        case "SICKD": {
            return state.map(dentist=> {
                    if (dentist.id !== action.payload) {
                        return dentist
                    }
                    return {
                        ...dentist,
                        sick: true
                    }
                })
            }
         
        
            
            
        default:
            return state;
    }
}

export default dentistReducer