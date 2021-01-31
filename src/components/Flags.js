import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../flag.css";

const url = `https://restcountries.eu/rest/v2/`;

const Flags = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      //   console.log(countries);
      setLoading(false);
    };
    fetchCountryData();
  }, []);

  const x = countries.filter((c) => {
    return c.population >= 47000000;
  });

  x.sort((a, b) => b.population - a.population);

  const nextCountry = () => {
    if (count < 28) {
      setCount(count + 1);
    }
  };

  const backCountry = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="box2">
        <button className="btn-back" id="back" onClick={backCountry}>
          &lt;
        </button>
        <button className="btn-next" id="next" onClick={nextCountry}>
          &gt;
        </button>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <Link className="link" to={`/countries/${x[count].name}`}>
            <div className="flag">
              <img src={x[count].flag} alt={x[count].name} />
            </div>
            <h1>{x[count].name}</h1>
          </Link>
        )}
      </div>
    </>
  );
};

export default Flags;
