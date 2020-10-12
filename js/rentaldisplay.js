import { RENT } from "./rentdata.js";

const limit = RENT.length;
const houseResults = document.getElementById("house-results");

for (let i = 0; i < limit; i += 3) {
  let listing = RENT[i];
  console.log(i);
  if (i % 3 == 0) {
    houseResults.innerHTML += `<div class="row">`;
    console.log("New row added.");
  }
  houseResults.innerHTML += `
  <div class="card col-sm-4">
    <div class="card-body">
      <img src="${listing.rentImg} class="card-img-top"/>
      <h5> <a href="listing-sample.html" class="listing-title"> ${listing.rentDescript}</a> </h5>
      <p class="brief-info">
        Price: $${listing.rentPrice}/mo | Bedrooms: ${listing.rentBedroom} <br />
        Bathrooms: ${listing.rentBathroom} | Area: ${listing.rentSquare} m<sup>2</sup>
      </p>
      <p style="font-family: 'Playfair Display', serif">
        ${listing.rentAddDis}, ${listing.rentAddCity}
      </p>
      <p class="listing-description">
        ${listing.rentAddDis}
      </p>
      </div>
    </div>
  `;
  if (i % 3 == 2 || i == limit - 1) {
    houseResults.innerHTML += `</div>`;
  }
}
