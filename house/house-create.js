import { house } from "../js/housedata.js";

let houseIndex = document.getElementById("house-index").innerHTML;
const listing = house[houseIndex];
console.log(listing);
let housedisplay = document.getElementById("house");

housedisplay.innerHTML += `<div id="intro">
    <h1>${listing.houseTitle}</h1>
    <p>See more details for this rental listing below.</p>
  </div>
<!-- info-->
<div class="row" id="house-display">
  <!--Listing info-->
  <div class="col-sm-9" id="listing-info">
    <div id="img-container" class="d-flex justify-content-center" >
      <img class="img-fluid" src="${listing.houseImg}" width="600" height="800" style="padding-bottom:50px;">
    </div>
    <h4>Address:</h4>
    <p class="text-center">${listing.houseAddress}<br>
    ${listing.houseAddDis}, ${listing.houseAddCity}</p>
    <h4>Quick information:</h4>
    <div class="row text-center" id="quick-info">
      <div class="col-sm-3">
        <h5>Price</h5>
        <p>${listing.housePrice}bil</p>
      </div>
      <div class="col-sm-3">
        <h5>Bedrooms</h5>
        <p>${listing.houseBedroom}</p>
      </div>
      <div class="col-sm-3">
        <h5>Bathrooms</h5>
        <p>${listing.houseBathroom}</p>
      </div>
      <div class="col-sm-3">
        <h5>Area</h5>
        <p>${listing.houseSquare} m<sup>2</sup></p>
      </div>
    </div>
    <h4>Description:</h4>
    <p>${listing.houseDescript}</p>
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
  phoneNum.innerHTML = `${listing.housePhone}`;
});
