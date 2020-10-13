import { rent } from "./rentdata.js";

const limit = rent.length;
const houseResults = document.getElementById("house-results");

document.getElementById("listing-number").innerHTML = limit;

for (let i = 0; i < limit; i += 3) {
  let listingHTML = ``;
  for (let j = i; j < i + 3; j++) {
    if (j < limit) {
      let listing = rent[j];
      listingHTML += `
      <div class="card col-sm-4">
        <div class="card-body">
          <img src="${listing.rentImg}" class="card-img-top"/>
          <h5 class="listing-title"> <a href="listing-sample.html"> ${listing.rentTitle}</a> </h5>
          <p class="brief-info">
            Price: ${listing.rentPrice}m/mo | Bedrooms: ${listing.rentBedroom} <br />
            Bathrooms: ${listing.rentBathroom} | Area: ${listing.rentSquare} m<sup>2</sup>
          </p>
          <p style="font-family: 'Playfair Display', serif">
            ${listing.rentAddress}
            ${listing.rentAddDis}, ${listing.rentAddCity}
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
