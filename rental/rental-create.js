import { rent } from "../js/rentdata.js";

let rentIndex = document.getElementById("rental-index").innerHTML;
const listing = rent[rentIndex];
console.log(listing);
let rental = document.getElementById("rental");

rental.innerHTML += `<div id="intro">
    <h1>${listing.rentTitle}</h1>
    <p>See more details for this rental listing below.</p>
  </div>
<!-- info-->
<div class="row" id="house-display">
  <!--Listing info-->
  <div class="col-sm-9" id="listing-info">
    <div id="img-container" class="d-flex justify-content-center">
      <img class="img-fluid" src="${listing.rentImg}">
    </div>
    <h4 style="padding-top: 1rem;">Address:</h4>
    <p class="text-center">${listing.rentAddress}<br>
    ${listing.rentAddDis}, ${listing.rentAddCity}</p>
    <h4 style="padding-top: 1rem;">Quick information:</h4>
    <div class="row text-center" id="quick-info">
      <div class="col-sm-3">
        <h5>Price</h5>
        <p>${listing.rentPrice}m/mo</p>
      </div>
      <div class="col-sm-3">
        <h5>Bedrooms</h5>
        <p>${listing.rentBedroom}</p>
      </div>
      <div class="col-sm-3">
        <h5>Bathrooms</h5>
        <p>${listing.rentBathroom}</p>
      </div>
      <div class="col-sm-3">
        <h5>Area</h5>
        <p>${listing.rentSquare} m<sup>2</sup></p>
      </div>
    </div>
    <h4 style="padding-top: 1rem;">Description:</h4>
    <p>${listing.rentDescript}</p>
  </div>
  <div class="col-sm-3">
    <div id="poster-info">
      <h4>Contact information</h4>
      <p>
        <b>Phone number:</b>
        <span id="phone-number"
          ><btn href="#" id="reveal-btn">Click to reveal</a></span
        >
        <br />
        <b>Email:</b>
        <a href="mailto:user1@gmail.com"> user1@gmail.com </a>
      </p>
    </div>     
  </div>
</div>
`;

const revealBtn = document.getElementById("reveal-btn");
const phoneNum = document.getElementById("phone-number");

revealBtn.addEventListener("click", function () {
  phoneNum.innerHTML = `${listing.rentPhone}`;
});
