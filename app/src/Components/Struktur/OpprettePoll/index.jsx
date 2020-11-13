import React, { useState } from 'react';
import { create } from '../../utils/pollService.js';

import { pollStyle } from '../../Styles/Styled.jsx';

const OpprettePoll = ({ inlogget, inloggetData }) => {
  const [pollData, setPollData] = useState({
    sporsmal: '',
    author: `${inloggetData.id}`,
  }); // Ikke sikker
  const [error, setError] = useState(null);

  const updateValue = (event) => {
    if (inlogget === false) {
      if (confirm('Du må være logget inn for å opprette en Poll!')) {
        window.location.replace('/signup');
      }
    } else {
      const inputValue = { [event.target.name]: event.target.value };
      setPollData((prev) => ({
        ...prev,
        ...inputValue,
      }));
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    const createData = async () => {
      const { data, error } = await create(pollData);
      if (error) {
        console.log(error);
        setError(error);
      } else {
        setPollData(data);
      }
    };
    createData();
  };
  return (
    <>
      <pollStyle.Container>
        <h2>Lag Poll</h2>
        <pollStyle.Form onSubmit={submitHandle}>
          <label htmlFor="txtSporsmal">Spørsmål: </label>
          <pollStyle.Input
            id="txtSporsmal"
            name="sporsmal"
            type="text"
            value={pollData.sporsmal} // Ikke sikker
            onChange={updateValue} // Ikke sikker
          />
          <pollStyle.Knapp type="submit">Submit</pollStyle.Knapp>
        </pollStyle.Form>
      </pollStyle.Container>
    </>
  );
};

export default OpprettePoll;
