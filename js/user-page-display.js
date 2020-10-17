import { house } from "./housedata.js";
import { rent } from "./rentdata.js";

let infoHouse = document.getElementById("list-houses-user");
for (let i = 0; i < house.length; i++) {
  const houseNum = house[i];
  let displayInfo = `
        <div class="card col-sm-3">
        <div class="card-body" >
          <img
            src="${houseNum.houseImg}"
            alt="house"
            class="card-img-top rounded"
            style = " width = "100" height ="130";"
          />
          <h5 class="listing-title" style = "margin: 10px auto 9px;"> <a href="house/${
            house.indexOf(houseNum) + 1
          }.html"> ${houseNum.houseTitle}</a> </h5>
          <p class="brief-info" >
          Price: ${houseNum.housePrice}m/month Bedroom: ${
    houseNum.houseBedroom
  } <br>
          Bathrooms: ${houseNum.houseBathroom}<br>Area: ${
    houseNum.houseSquare
  }m <sup>2</sup>
          </p>
        </div>
        <button id="house${i}" class="align-self-end btn btn-outline-secondary" style="margin: -20px auto 9px;" onclick="disableFunction('house${i}')">Delete</button>
      </div>`;
  infoHouse.innerHTML += displayInfo;
}

infoHouse = document.getElementById("list-houses-user");
for (let i = 0; i < rent.length; i++) {
  const rentNum = rent[i];
  let displayInfo = `
        <div class="card col-sm-3">
        <div class="card-body">
          <img
            src="${rentNum.rentImg}"
            alt="house"
            class="card-img-top"
            style = " width = "100" height ="130";"
          />
          <h5 class="listing-title" style = "margin: 10px auto 9px;"> <a href="rental/${
            rent.indexOf(rentNum) + 1
          }.html"> ${rentNum.rentTitle}</a> </h5>
          <p class="brief-info">
            Price: ${rentNum.rentPrice}m/month Bedroom: ${
    rentNum.rentBedroom
  } <br>
            Bathrooms: ${rentNum.rentBathroom} <br>Area: ${
    rentNum.rentSquare
  }m <sup>2</sup>
          </p>
          </div>
          <button id="rent${i}" class="align-self-end btn btn-outline-secondary" style="margin: -20px auto 9px;" onclick="disableFunction('rent${i}')">Delete</button>
      </div>`;
  infoHouse.innerHTML += displayInfo;
}

window.disableFunction = function disableFunction(nameButton) {
  document.getElementById(nameButton).disabled = true;
  document.getElementById(nameButton).innerHTML = "Deleted";
};
