import React, { useState } from 'react';
import { create } from '../../utils/userService.js';

import { pollStyle } from '../../Styles/Styled.jsx';

const RegistrereBruker = ({ inlogget, setInnlogget, setInnloggetData }) => {
  const [userData, setUserData] = useState({ email: '' });
  const [error, setError] = useState(null);

  const updateValue = (event) => {
    if (inlogget === true) {
      if (confirm('Du er allerede innlogget, hva med å ta en quiz?')) {
        window.location.replace('/');
      }
    } else {
      const inputValue = { [event.target.name]: event.target.value };
      setUserData((prev) => ({
        ...prev,
        ...inputValue,
      }));
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    const createData = async () => {
      const { data, error } = await create(userData);
      if (error) {
        console.log(error);
        setError(error);
      } else {
        setInnlogget(true);
        setInnloggetData({ id: `${data._id}`, email: `${data.email}` });
      }
    };
    createData();
  };
  return (
    <>
      <pollStyle.Container>
        <h2>Opprette bruker</h2>
        <pollStyle.Form onSubmit={submitHandle}>
          <label htmlFor="txtEmail">Email: </label>
          <pollStyle.Input
            id="txtEmail"
            name="email"
            type="text"
            value={userData.email}
            onChange={updateValue}
          />
          <pollStyle.Knapp type="submit">Submit</pollStyle.Knapp>
        </pollStyle.Form>
      </pollStyle.Container>
    </>
  );
};
export default RegistrereBruker;
