import { house } from "./housedata.js";

const sortBtn = document.getElementById("sort-btn");
const limit = house.length;
console.log(limit);

// Variables for city
const hanoi = document.getElementById("hanoi");
const hcmc = document.getElementById("hcmc");
const danang = document.getElementById("danang");

// Sort by city
function districtSort() {
  let arr = [];
  for (let i = 0; i < limit; i++) {
    let listing = house[i];
    if (hanoi.checked) {
      const thanhxuan = document.getElementById("thanhxuan");
      const hoankiem = document.getElementById("hoankiem");
      if (
        !thanhxuan.checked &&
        !hoankiem.checked &&
        listing.houseAddCity == "Hà Nội"
      ) {
        arr.push(listing);
      } else {
        if (thanhxuan.checked && listing.houseAddDis == "Thanh Xuân") {
          arr.push(listing);
        }
        if (hoankiem.checked && listing.houseAddDis == "Hoàn Kiếm") {
          arr.push(listing);
        }
      }
    } else if (hcmc.checked) {
      const district1 = document.getElementById("district-1");
      const district2 = document.getElementById("district-2");
      if (
        !district1.checked &&
        !district2.checked &&
        listing.houseAddCity == "Hồ Chí Minh"
      ) {
        arr.push(listing);
      } else {
        if (district1.checked && listing.houseAddDis == "Quận 1") {
          arr.push(listing);
        }
        if (district2.checked && listing.houseAddDis == "Quận 2") {
          arr.push(listing);
        }
      }
    } else if (danang.checked) {
      const sontra = document.getElementById("sontra");
      const haichau = document.getElementById("haichau");
      if (
        !sontra.checked &&
        !haichau.checked &&
        listing.houseAddCity == "Đà Nẵng"
      ) {
        arr.push(listing);
      } else {
        if (sontra.checked && listing.houseAddDis == "Sơn Trà") {
          arr.push(listing);
        }
        if (haichau.checked && listing.houseAddDis == "Hải Châu") {
          arr.push(listing);
        }
      }
    }
  }
  return arr;
}

// Sort by price range
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const minArea = document.getElementById("min-area");
const maxArea = document.getElementById("max-area");

function priceAreaSort() {
  let sortArr = [];
  if (districtSort().length == 0) {
    for (let i = 0; i < limit; i++) {
      sortArr.push(house[i]);
    }
  } else {
    sortArr = districtSort();
  }

  if (minPrice.value.length > 0) {
    sortArr = sortArr.filter((x) => x.housePrice >= minPrice.value);
  }
  if (maxPrice.value.length > 0) {
    sortArr = sortArr.filter((x) => x.housePrice <= maxPrice.value);
  }

  if (minArea.value.length > 0) {
    sortArr = sortArr.filter((x) => x.houseSquare >= minArea.value);
  }
  if (maxArea.value.length > 0) {
    sortArr = sortArr.filter((x) => x.houseSquare <= maxArea.value);
  }
  console.log(sortArr);
  return sortArr;
}

// display sorted listings!!

function houseSort() {
  let arr = priceAreaSort();
  let limit = arr.length;
  const houseResults = document.getElementById("house-results");
  if (limit == 0) {
    document.getElementById("listing-number").innerHTML = "No";
    houseResults.innerHTML =
      "<h4><u>No results.</u></h4><br><p>Please try again.</p>";
    return;
  }
  if (limit == 1) {
    document.getElementById(
      "house-intro"
    ).innerHTML = `1 house on sale for you.`;
  } else {
    document.getElementById("listing-number").innerHTML = limit;
  }
  houseResults.innerHTML = "<h4><u>Results:</u></h4>";
  for (let i = 0; i < limit; i += 3) {
    let listingHTML = ``;
    for (let j = i; j < i + 3; j++) {
      if (j < limit) {
        let listing = arr[j];
        listingHTML += `
        <div class="card col-sm-4">
          <div class="card-body">
            <img src="${listing.houseImg}" class="card-img-top"/>
            <h5 class="listing-title"> <a href="house/${
              house.indexOf(listing) + 1
            }.html"> ${listing.houseTitle}</a> </h5>
            <p class="brief-info">
              Price: ${listing.housePrice}bil | Bedrooms: ${
          listing.houseBedroom
        } <br />
              Bathrooms: ${listing.houseBathroom} | Area: ${
          listing.houseSquare
        } m<sup>2</sup>
            </p>
            <p style="font-family: 'Playfair Display', serif">
              ${listing.houseAddress}
              ${listing.houseAddDis}, ${listing.houseAddCity}
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
  return;
}

// Add event listener
sortBtn.addEventListener("click", houseSort);
