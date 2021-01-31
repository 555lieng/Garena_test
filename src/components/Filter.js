import React from "react";

const Filter = () => {

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("All");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryRegion = document.querySelectorAll(".country-region");

      countryRegion.forEach((region) => {
        region.parentElement.parentElement.style.display = "block";
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("Africa");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryRegion = document.querySelectorAll(".country-region");

      countryRegion.forEach((region) => {
        if (region.innerText.includes("Africa")) {
          region.parentElement.parentElement.style.display = "block";
          console.log(region);
        } else {
          region.parentElement.parentElement.style.display = "none";
        }
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("America");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryRegion = document.querySelectorAll(".country-region");

      countryRegion.forEach((region) => {
        if (region.innerText.includes("America")) {
          region.parentElement.parentElement.style.display = "block";
          console.log(region);
        } else {
          region.parentElement.parentElement.style.display = "none";
        }
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("Asia");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryRegion = document.querySelectorAll(".country-region");

      countryRegion.forEach((region) => {
        if (region.innerText.includes("Asia")) {
          region.parentElement.parentElement.style.display = "block";
          console.log(region);
        } else {
          region.parentElement.parentElement.style.display = "none";
        }
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("Europe");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryRegion = document.querySelectorAll(".country-region");

      countryRegion.forEach((region) => {
        if (region.innerText.includes("Europe")) {
          region.parentElement.parentElement.style.display = "block";
          console.log(region);
        } else {
          region.parentElement.parentElement.style.display = "none";
        }
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("Oceania");

    filterBtn.addEventListener("click", () => {
      const countryRegion = document.querySelectorAll(".country-region");

      countryRegion.forEach((region) => {
        if (region.innerText.includes("Oceania")) {
          region.parentElement.parentElement.style.display = "block";
          console.log(region);
        } else {
          region.parentElement.parentElement.style.display = "none";
        }
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("1");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryPop = document.querySelectorAll(".country-population");

      countryPop.forEach((pop) => {
        if (pop.innerText.slice(12,pop.innerText.lenght) < 70000000) {
          pop.parentElement.parentElement.style.display = "block";
          //   console.log(pop);
        } else {
          pop.parentElement.parentElement.style.display = "none";
        //   console.log("none");
        }
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("2");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryPop = document.querySelectorAll(".country-population");

      countryPop.forEach((pop) => {
        if (pop.innerText.slice(12,pop.innerText.lenght) >= 70000000 && pop.innerText.slice(12,pop.innerText.lenght) < 100000000) {
          pop.parentElement.parentElement.style.display = "block";
          //   console.log(pop);
        } else {
          pop.parentElement.parentElement.style.display = "none";
        //   console.log("none");
        }
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("3");

    filterBtn.addEventListener("click", () => {
      console.log("click");
      const countryPop = document.querySelectorAll(".country-population");

      countryPop.forEach((pop) => {
        if (pop.innerText.slice(12,pop.innerText.lenght) > 100000000) {
          pop.parentElement.parentElement.style.display = "block";
          //   console.log(pop);
        } else {
          pop.parentElement.parentElement.style.display = "none";
        //   console.log("none");
        }
      });
    });
  });

  return (
    <div className="filter ">
      <section className="region">
        <button id="All">All</button>
        <button id="Africa">Africa</button>
        <button id="America">America</button>
        <button id="Asia">Asia</button>
        <button id="Europe">Europe</button>
        <button id="Oceania">Oceania</button>
      </section>
      <section className="population">
        <button id="1">below 70,000,000</button>
        <button id="2">between 70,000,000 and 100,000,000</button>
        <button id="3">more than 100,000,000</button>
      </section>
    </div>
  )
};

export default Filter;
