import { house } from "./housedata.js";

const sortBtn = document.getElementById("sort-btn");
const limit = house.length;
console.log(limit);

// Sort by city
function districtSort() {
  let arr = [];
  for (let i = 0; i < limit; i++) {
    let listing = house[i];
    if (document.getElementById("hanoi").checked) {
      if (
        (document.getElementById("thanhxuan").checked &&
          listing.houseAddDis == "Thanh Xuân") ||
        (document.getElementById("hoankiem").checked &&
          listing.houseAddDis == "Hoàn Kiếm")
      ) {
        arr.push(i);
      } else if (listing.houseAddCity == "Hà Nội") {
        arr.push(i);
      }
    } else if (document.getElementById("hcmc").checked) {
      if (
        (document.getElementById("district-1") &&
          listing.houseAddDis == "Quận 1") ||
        (document.getElementById("district-2").checked &&
          listing.houseAddDis == "Quận 2")
      ) {
        arr.push(i);
      } else if (listing.houseAddCity == "Hồ Chí Minh") {
        arr.push(i);
      }
    }
  }
  return arr;
}

// Sort by price range
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");

function priceSort() {
  let sortArr = [];
  if (districtSort().length == 0) {
    for (let i = 0; i < limit; i++) {
      sortArr.push(i);
    }
  } else {
    sortArr = districtSort();
  }
  if (maxPrice.value.length == 0 && minPrice.value.length == 0) {
    return sortArr;
  }
  let arr = [];
  for (let i of sortArr) {
    let listing = house[i];
    if (minPrice.value.length > 0 && minPrice.value <= listing.housePrice) {
      if (maxPrice.value.length > 0 && maxPrice.value >= listing.housePrice) {
        arr.push(i);
      } else {
        arr.push(i);
      }
    } else {
      if (maxPrice.value >= listing.housePrice) {
        arr.push(i);
      }
    }
  }
  return arr;
}

// sort by area
const minArea = document.getElementById("min-area");
const maxArea = document.getElementById("max-area");

function areaSort() {
  let sortArr = [];
  if (priceSort().length == 0) {
    for (let i = 0; i < limit; i++) {
      sortArr.push(i);
    }
  } else {
    sortArr = priceSort();
  }
  if (minArea.value.length == 0 && maxArea.value.length == 0) {
    return sortArr;
  }
  let arr = [];
  for (let i of sortArr) {
    let listing = house[i];
    if (minArea.value.length > 0 && minArea.value <= listing.houseSquare) {
      if (maxArea.value.length > 0 && maxArea.value >= listing.houseSquare) {
        arr.push(i);
      } else {
        arr.push(i);
      }
    } else {
      if (maxArea.value >= listing.houseSquare) {
        arr.push(i);
      }
    }
  }
  return arr;
}

// display sorted listings!!

function housealSort() {
  let arr = areaSort();
  let limit = arr.length;
  if (limit == 0) {
    document.getElementById("listing-number").innerHTML = "No";
    houseResults.innerHTML = "<h4><u>No results.</u></h4>";
    return;
  }
  document.getElementById("listing-number").innerHTML = limit;
  const houseResults = document.getElementById("house-results");
  houseResults.innerHTML = "<h4><u>Results:</u></h4>";
  for (let i = 0; i < limit; i += 3) {
    let listingHTML = ``;
    for (let j = i; j < i + 3; j++) {
      if (j < limit) {
        let listing = house[arr[j]];
        listingHTML += `
        <div class="card col-sm-4">
          <div class="card-body">
            <img src="${listing.houseImg}" class="card-img-top"/>
            <h5 class="listing-title"> <a href="listing-sample.html"> ${listing.houseTitle}</a> </h5>
            <p class="brief-info">
              Price: ${listing.housePrice}bil | Bedrooms: ${listing.houseBedroom} <br />
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
}

// Add event listener
sortBtn.addEventListener("click", housealSort);
