import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Global = () => {
const [world, setWorld] = useState({confirm:NaN,death:NaN,recovered:NaN})

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setWorld({
          confirm:res.data.confirmed.value,
          death:res.data.deaths.value,
          recovered:res.data.recovered.value
        });
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>Global</h2>
  <p>Case Confirmed: {world.confirm}</p>
  <p>Case Death: {world.death}</p>
  <p>Case Recovered: {world.recovered}</p>
    </div>
  );
}

export default Global;
