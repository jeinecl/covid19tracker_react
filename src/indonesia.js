import React, { useState, useEffect } from "react";
import axios from "axios";
import {number} from './utils/fileformat'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardGroup';

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
      <CardDeck>
  <Card>
    <Card.Body>
    <h5>Confirmed Case: {number.format(ina.caseconfirmed)}</h5>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
    <h5>Recovered Case: {number.format(ina.caserecovered)}</h5>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
    <h5>Death Case: {number.format(ina.casedeath)}</h5>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
      </Card.Text>
    </Card.Body>
  </Card>
    
  );
};

export default Indonesia;
