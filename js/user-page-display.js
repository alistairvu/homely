import { HOUSE } from './housedata.js';
import { rent } from './rentdata.js';

let inforHouse = document.getElementById("list-houses-user");
const ID = 2;
for (let i = 0; i < HOUSE.length; i++) {
    const houseNum = HOUSE[i];
    let displayInfor = `
        <div class="card col-sm-3">
        <div class="card-body">
          <img
            src="${houseNum.houseImg}"
            alt="house"
            class="card-img-top"
          />
          <h5>
            <a href="#">Giao bán nhà mới</a>
          </h5>
          <p class="brief-info">
            Price: $1000 | Bedroom: 2 <br />
            Bathrooms: 2 | Area: 100m <sup>2</sup>
          </p>
          <button disabled="disabled" >Deleted</button>
        </div>
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
          <h5>
            <a href="#">Giao bán nhà mới</a>
          </h5>
          <p class="brief-info">
            Price: $1000 | Bedroom: 2 <br />
            Bathrooms: 2 | Area: 100m <sup>2</sup>
          </p>
          <button disabled="disabled" >Deleted</button>
        </div>
      </div>`;
    inforHouse.innerHTML += displayInfor;
}