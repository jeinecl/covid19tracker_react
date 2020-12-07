import React, { useState, useEffect } from "react";
import axios from "axios";
import {number} from './utils/fileformat'

const Provincy = () => {
  const [prov, setProv] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProv(res.data.data);
      })
      .catch((err) => console.log(err));
  });
  <tr>
    <td>load</td>
    <td>load</td>
    <td>load</td>
    <td>load</td>
  </tr>;
  const Value = (prov) => {
    if (prov.length !== 0) {
      let a = 0;
      return prov.map((provinsi) => (
        <tr key={provinsi.fid}>
          <td>{++a}</td>
          <td>{provinsi.provinsi}</td>
          <td>{number.format(provinsi.kasusPosi)}</td>
          <td>{number.format(provinsi.kasusSemb)}</td>
          <td>{number.format(provinsi.kasusMeni)}</td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td>load</td>

          <td>load</td>
          <td>load</td>
          <td>load</td>
        </tr>
      );
    }
  };
  return (
    <div>
      Provinsi
      <table>
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Provincy</th>
            <th scope="col">Case Confirmed</th>
            <th scope="col">Case Recovered</th>
            <th scope="col">Case Death</th>
          </tr>
        </thead>
        <tbody>
        {Value(prov)}
        </tbody>
      </table>
    </div>
  );
};

export default Provincy;
