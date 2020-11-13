import React, { useEffect, useState } from 'react';
import { update } from '../../utils/pollService.js';
import {pollStyle} from '../../Styles/Styled.jsx';
import { list } from '../../utils/pollService.js';

const TaPoll = ({ inlogget, inloggetData }) => {
  const [pollData, setPollData] = useState([]);
  const [error, setError] = useState(null);
  const [svarData, setSvarData] = useState({
    id: `${pollData._id}`,
    answer: [{ user: '', text: '' }],
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setPollData(...data);
      }
    };
    fetchData();
  }, []);

  const updateValue = (event) => {
    if (inlogget === false) {
      if (confirm('Du må være logget inn for å svare på pollen!')) {
        window.location.replace('/signup');
      }
    } else {
      const inputValue = { [event.target.name]: event.target.value };
      setSvarData({
        answer: [{ user: `${inloggetData.id}`, text: `${inputValue}` }],
      });
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    const updateData = async () => {
      const { data, error } = await update(svarData);
      if (error) {
        console.log(error);
        setError(error);
      } else {
        alert('Takk for Svar!');
        console.log(data);
      }
    };
    updateData();
  };
  console.log(pollData);
  console.log(pollData.sporsmal);
  console.log(pollData._id);
  return (
    <>
      <h2>Hello Poll</h2>
      <p>{pollData ? pollData.sporsmal : 'Det er ikke lagd en Poll.'}</p>
      <pollStyle.Form onSubmit={submitHandle}>
        <label htmlFor="txtSvar">Svar: </label>
        <pollStyle.Input
          id="txtSvar"
          name="svar"
          type="text"
          value={svarData.svar}
          onChange={updateValue}
        />
        <pollStyle.Knapp type="submit">Submit</pollStyle.Knapp>
      </pollStyle.Form>
    </>
  );
};

export default TaPoll;
