import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../table.css";

const Covid = () => {
  const [covid, setCovid] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCovidData = async () => {
      const response = await fetch(
        `https://api.covid19api.com/country/${name}/status/confirmed?from=2020-01-01T00:00:00Z&to=2020-05-31T00:00:00Z`
      );
      const covid = await response.json();
      setCovid(covid);
      // console.log(Object.keys(covid));
    };
    fetchCovidData();
  }, []);
  return (
    <div>
      <h1 className='covid-header'>COVID-19 Cases</h1>
      <table className="covid-table" cellSpacing={40} cellPadding={0}>
        <thead>
          <tr>
            <th>Country</th>
            <th>CountryCode</th>
            <th>Province</th>
            <th>City</th>
            <th>CityCode</th>
            <th>Lat</th>
            <th>Lon</th>
            <th>Cases</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {covid.map((c) => {
            const {
              Country,
              CountryCode,
              Province,
              City,
              CityCode,
              Lat,
              Lon,
              Cases,
              Status,
              Date,
            } = c;

            return (
              <tr>
                <td>{Country}</td>
                <td>{CountryCode}</td>
                <td>{Province}</td>
                <td>{City}</td>
                <td>{CityCode}</td>
                <td>{Lat}</td>
                <td>{Lon}</td>
                <td>{Cases}</td>
                <td>{Status}</td>
                <td>{Date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
