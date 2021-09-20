import { dentists } from "../../data/dentists";

const dentistReducer = (state = dentists, action) => {
    switch (action.type) {
        case "addDentist": 
            return state.concat(action.payload);
    
        case "makeDentistIll":
            return state;

        default:
            return state;
    }
}

export default dentistReducer