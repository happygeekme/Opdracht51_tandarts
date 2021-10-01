import appointments from "../../data/utils";

const initialState = appointments;

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDAPPOINTMENT":
      return state.concat(action.payload);

    case "CANCEL": 
        return state.filter((appointment) => appointment.key !== action.payload)
           

    default:
      return state;
  
};
}
export default appointmentReducer;
