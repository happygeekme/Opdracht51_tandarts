import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddDentistForm = () => {

  const [dentist, setDentist] = useState({
    id: uuidv4(),
    first_name: "First Name",
    last_name: "Last Name",
    phone: "Phone",
    email: "Email",
    sick: false,
  });

  const onInput = (event) => {
    const property = event.target.name;
    setDentist({
      ...dentist,
      [property]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitNewDentist = (event) => {
    event.preventDefault();

    const action = {
      type: "ADDDENTIST",
      payload: dentist,
    };
    dispatch(action);
  };

  return (
    <div className="form">
      <div className="formItem">
        <form onSubmit={submitNewDentist}>
          <h4>Add new Dentist</h4>
          <input
            type="text"
            name="first_name"
            placeholder={dentist.first_name}
            onInput={onInput}
          />

          <input
            type="text"
            name="last_name"
            placeholder={dentist.last_name}
            onInput={onInput}
          />

          <input
            type="text"
            name="phone"
            placeholder={dentist.phone}
            onInput={onInput}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default AddDentistForm;
