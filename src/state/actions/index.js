export const addDentist = (person) => {
    return (dispatch) => {
        dispatch({
            type: 'addDentist',
            payload: person
        })
    }
}

export const dentistIsIll = (dentistId) => {
    return (dispatch) => {
        dispatch({
            type: 'makeDentistIll',
            payload: dentistId
        })
    }
}

export const addPatient = (person) => {
    return (dispatch) => {
        dispatch({
            type: 'addPatient',
            payload: person
        })
    }
}

export const patientIsIll = (dentistId) => {
    return (dispatch) => {
        dispatch({
            type: 'makeDentistIll',
            payload: dentistId
        })
    }
}