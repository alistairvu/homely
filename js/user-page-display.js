import { house } from "./housedata.js";
import { rent } from "./rentdata.js";

let listingNum = 0;

let infoHouse = document.getElementById("list-houses-user");

for (let i = 0; i < house.length; i++) {
  const houseNum = house[i];
  if (houseNum.houseid == localStorage.getItem("login-status")) {
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
    listingNum++;
  }
}

for (let i = 0; i < localStorage.length; i++) {
  let item = localStorage.key(i);
  if (JSON.parse(item).houseid == localStorage.getItem("login-status")) {
    const houseNum = JSON.parse(item);
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
    listingNum++;
  }
}

infoHouse = document.getElementById("list-houses-user");
for (let i = 0; i < rent.length; i++) {
  const rentNum = rent[i];
  if (rentNum.rentid === localStorage.getItem("login-status")) {
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
    listingNum++;
  }
}

for (let i = 0; i < localStorage.length; i++) {
  let item = localStorage.key(i);
  if (JSON.parse(item).rentid == localStorage.getItem("login-status")) {
    const rentNum = JSON.parse(item);
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
    listingNum++;
  }
}

window.disableFunction = function disableFunction(nameButton) {
  document.getElementById(nameButton).disabled = true;
  document.getElementById(nameButton).innerHTML = "Deleted";
};

document.getElementById("listing-number").innerHTML = listingNum;
