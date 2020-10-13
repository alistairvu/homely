import { HOUSE } from "./housedata.js";
import { rent } from "./rentdata.js";

let inforHouse = document.getElementById("list-houses-user");
const ID = 2;
for (let i = 0; i < HOUSE.length; i++) {
  const houseNum = HOUSE[i];
  let displayInfor = `
        <div class="card col-sm-3">
        <div class="card-body" >
          <img
            src="${houseNum.houseImg}"
            alt="house"
            class="card-img-top"
          />
          <h5 class="listing-title">
            <a href="#">${houseNum.houseTitle}</a>
          </h5>
          <p class="brief-info" >
          Price: ${houseNum.housePrice}m/month | Bedroom: ${houseNum.houseBedroom} <br />
          Bathrooms: ${houseNum.houseBathroom} | Area: ${houseNum.houseSquare}m <sup>2</sup>
          </p>
        </div>
        <button class="align-self-end" style="margin: 9px auto;">Deleted</button>
      </div>`;
  inforHouse.innerHTML += displayInfor;
}

inforHouse = document.getElementById("list-houses-user");
for (let i = 0; i < rent.length; i++) {
  const rentNum = rent[i];
  let displayInfor = `
        <div class="card col-sm-3">
        <div class="card-body">
          <img
            src="${rentNum.rentImg}"
            alt="house"
            class="card-img-top"
          />
          <h5 class="listing-title">
            <a href="#">${rentNum.rentTitle}</a>
          </h5>
          <p class="brief-info">
            Price: ${rentNum.rentPrice}m/month | Bedroom: ${rentNum.rentBedroom} <br />
            Bathrooms: ${rentNum.rentBathroom} | Area: ${rentNum.rentSquare}m <sup>2</sup>
          </p>
          </div>
          <button disabled="disabled" class="align-self-end" style="margin: 0px auto 9px;">Deleted</button>
      </div>`;
  inforHouse.innerHTML += displayInfor;
}
