import React, { useState, useEffect } from "react";
import axios from "axios";
import {number} from './utils/fileformat'

const Global = () => {
  const [global, setGlobal] = useState({
    caseconfirmed: null,
    casedeath: null,
    caserecovered: null,
  });

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setGlobal({
          caseconfirmed: res.data.confirmed.value,
          casedeath: res.data.deaths.value,
          caserecovered: res.data.recovered.value,
        });
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>Global</h2>
      <p>Confirmed Case: {number.format(global.caseconfirmed)}</p>
      <p>Death Case{number.format(global.casedeath)}</p>
      <p>Recovered Case{number.format(global.caserecovered)}</p>
    </div>
  );
};

export default Global;
