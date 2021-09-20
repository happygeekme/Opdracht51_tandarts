export const addDentist = (person) => {
    return (dispatch) => {
        dispatch({
            type: 'addDentist',
            payload: person
        })
    }
}

export const makeDentistIll = (dentistId) => {
    return (dispatch) => {
        dispatch({
            type: 'makeDentistIll',
            payload: dentistId
        })
    }
}