import React, { useState, useEffect } from "react";
import axios from "axios";
import {number} from './utils/fileformat'
import Card from 'react-bootstrap/Card';

const Indonesia = () => {
  const [ina, setIna] = useState({
    caseconfirm: null,
    casedeath: null,
    caserecovered: null,
  });

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIna({
          caseconfirmed: res.data.jumlahKasus,
          casedeath: res.data.meninggal,
          caserecovered: res.data.sembuh,
        });
      })
      .catch((err) => console.log(err));
  });
  return (
    <Card className="text-center">
    <Card.Body>
      <Card.Text>
      <div>
      <h2>Indonesia</h2>
      <p>Confirmed Case: {number.format(ina.caseconfirmed)}</p>
      <p>Recovered Case: {number.format(ina.caserecovered)}</p>
      <p>Death Case: {number.format(ina.casedeath)}</p>
    </div>
      </Card.Text>
    </Card.Body>
  </Card>
    
  );
};

export default Indonesia;
