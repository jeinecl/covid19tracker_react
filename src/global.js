import React, { useState, useEffect } from "react";
import axios from "axios";
import { number } from "./utils/fileformat";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

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
  return (<Card className="text-center">
  <Card.Body>
    <Card.Text>
    <div>
      <h2>Global</h2>
      <CardGroup>
  <Card>
    <Card.Body>
    <h5>Confirmed Case: {number.format(global.caseconfirmed)}</h5>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
    <h5>Death Case: {number.format(global.casedeath)}</h5>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
    <h5>Recovered Case: {number.format(global.caserecovered)}</h5>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>
      
     
      
    </div>
    </Card.Text>
  </Card.Body>
</Card>
  );
};

export default Global;
