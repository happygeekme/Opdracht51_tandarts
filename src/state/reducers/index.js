import { combineReducers } from "redux";
import dentistReducer from "./dentistReducers"

const reducers = combineReducers ({
    denist: dentistReducer
})

export default reducers