import { HOUSE } from "./housedata.js";

const limit = HOUSE.length;
const houseResults = document.getElementById("house-results");

document.getElementById("listing-number").innerHTML = limit;

for (let i = 0; i < limit; i += 3) {
  let listingHTML = ``;
  for (let j = i; j < i + 3; j++) {
    if (j < limit) {
      let listing = HOUSE[j];
      listingHTML += `
      <div class="card col-sm-4">
        <div class="card-body">
          <img src="${listing.houseImg} class="card-img-top"/>
          <h5 class="listing-title"> <a href="listing-sample.html"> ${listing.houseTitle}</a> </h5>
          <p class="brief-info">
            Price: VND ${listing.housePrice} bil | Bedrooms: ${listing.houseBedroom} <br />
            Bathrooms: ${listing.houseBathroom} | Area: ${listing.houseSquare} m<sup>2</sup>
          </p>
          <p style="font-family: 'Playfair Display', serif">
            ${listing.houseAddDis}, ${listing.houseAddCity}
          </p>
          <p class="listing-description">
            ${listing.houseDescript}
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
