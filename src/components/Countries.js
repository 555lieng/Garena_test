import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter.js";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      //   console.log(countries);
    };
    fetchCountryData();
  }, []);

  const countriesPopulationFilter = countries.filter((c) => {
    return c.population >= 47000000;
  });

  const sort = countriesPopulationFilter.sort((a,b) => b.population-a.population)

  return (
    <>
      <Filter />
      <div className="bg-image">
        <section className="grid">
          {sort.map((country) => {
            const { numericCode, name, population, region, flag } = country;

            return (
              <>
                <Link className="link" to={`/countries/${name}`}>
                  <article key={numericCode}>
                    <div>
                      <img src={flag} alt={name} />
                      <div className="detail">
                        <h4 className="country-name">{name}</h4>
                        <h5 className="country-population">
                          Population: <span>{population}</span>
                        </h5>
                        <h5 className="country-region">
                          Region: <span>{region}</span>
                        </h5>
                        {/* <Link className="btn" to={`/countries/${name}`}>
                    Learn more
                  </Link> */}
                      </div>
                    </div>
                  </article>
                </Link>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Countries;
