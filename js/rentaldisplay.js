import { RENT } from "./rentdata.js";

const limit = RENT.length;
const houseResults = document.getElementById("house-results");

for (let i = 0; i < limit; i += 3) {
  let listingHTML = ``;
  for (let j = i; j < i + 3; j++) {
    if (j < limit) {
      let listing = RENT[i];
      listingHTML += `
      <div class="card col-sm-4">
        <div class="card-body">
          <img src="${listing.rentImg} class="card-img-top"/>
          <h5 class="listing-title"> <a href="listing-sample.html"> ${listing.rentDescript}</a> </h5>
          <p class="brief-info">
            Price: $${listing.rentPrice}/mo | Bedrooms: ${listing.rentBedroom} <br />
            Bathrooms: ${listing.rentBathroom} | Area: ${listing.rentSquare} m<sup>2</sup>
          </p>
          <p style="font-family: 'Playfair Display', serif">
            ${listing.rentAddDis}, ${listing.rentAddCity}
          </p>
          <p class="listing-description">
            ${listing.rentDescript}
          </p>
          </div>
        </div>
      `;
    }
  }
  houseResults.innerHTML += `
  <div class="row">
  ${listingHTML}
  </div>`;
}
