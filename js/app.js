fetchCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showCountry(data));
};
fetchCountry();

showCountry = (countries) => {
  const container = document.getElementById("container");
  countries.forEach((country) => {
    const stringified = JSON.stringify(country);
    const { flags, name, capital } = country;
    const div = document.createElement("div");
    div.innerHTML = `
          <img src="${flags.png}" alt="" />
          <h4>Country: ${name.common}</h3>
          <h5>Capital: ${capital ? capital : "No Capital"}</h5>
         <button type="button" onclick='loadDataOfCountry(${stringified})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Details
          </button>
    `;
    container.appendChild(div);
  });
};

loadDataOfCountry = (country) => {
  console.log(country);
  const { flags, name, maps, timezones, independent, landlocked } = country;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
          <div class="card mb-3">
            <img src="${flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${name.common}</h4>
              <p >${maps.googleMaps}
              </p>
              <p >${timezones[0]}</p>
              <p >${independent ? "Independent" : "Occupied"}</p>
              <p >${landlocked ? "Landlocked" : "Coastal"}</p>
            </div>
          </div>
  `;
};
