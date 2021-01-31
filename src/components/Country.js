import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../country.css";
import Covid from "./Covid.js";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      // console.log(country)
    };
    fetchCountryData();
  }, []);
  return (
    <>
      <header className="header-garena">
        บริษัท การีนา ออนไลน์ (ประเทศไทย) จำกัด 89 อาคารเอไอเอ แคปปิตอล
        เซ็นเตอร์ ชั้น 24 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กทม. 10400
      </header>
      <Link to="/" className="link btn-light">
        back
      </Link>
      <section className="country">
        {country.map((c) => {
          const {
            numericCode,
            name,
            flag,
            alpha3Code,
            region,
            currencies,
            timezones,
          } = c;

          return (
            <article className={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="country-details">
                <h2>{name}</h2>
                <h5>
                  Alpha3 Code: <span>{alpha3Code}</span>
                </h5>
                <h5>
                  Region: <span>{region}</span>
                </h5>
                <h5>
                  Currencies: <span>{currencies[0].name}</span>
                </h5>
                <h5>
                  Timezone: <span>{timezones[0]}</span>
                </h5>
              </div>
            </article>
          );
        })}
      </section>
      <Covid />
      <footer>
        <h3>Remark: {Date()}</h3>
      </footer>
    </>
  );
};

export default Country;
