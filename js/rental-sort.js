import { rent } from "./rentdata.js";

const sortBtn = document.getElementById("sort-btn");
const limit = rent.length;
console.log(limit);

// Sort by city
function districtSort() {
  let arr = [];
  for (let i = 0; i < limit; i++) {
    let listing = rent[i];
    if (document.getElementById("hanoi").checked) {
      if (
        (document.getElementById("thanhxuan").checked &&
          listing.rentAddDis == "Thanh Xuân") ||
        (document.getElementById("hoankiem").checked &&
          listing.rentAddDis == "Hoàn Kiếm")
      ) {
        arr.push(i);
      } else if (listing.rentAddCity == "Hà Nội") {
        arr.push(i);
      }
    } else if (document.getElementById("hcmc").checked) {
      if (
        (document.getElementById("district-1") &&
          listing.rentAddDis == "Quận 1") ||
        (document.getElementById("district-2").checked &&
          listing.rentAddDis == "Quận 2")
      ) {
        arr.push(i);
      } else if (listing.rentAddCity == "Hồ Chí Minh") {
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
    let listing = rent[i];
    if (minPrice.value.length > 0 && minPrice.value <= listing.rentPrice) {
      if (maxPrice.value.length > 0 && maxPrice.value >= listing.rentPrice) {
        arr.push(i);
      } else {
        arr.push(i);
      }
    } else {
      if (maxPrice.value >= listing.rentPrice) {
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
    let listing = rent[i];
    if (minArea.value.length > 0 && minArea.value <= listing.rentSquare) {
      if (maxArea.value.length > 0 && maxArea.value >= listing.rentSquare) {
        arr.push(i);
      } else {
        arr.push(i);
      }
    } else {
      if (maxArea.value >= listing.rentSquare) {
        arr.push(i);
      }
    }
  }
  return arr;
}

// display sorted listings!!

function rentalSort() {
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
        let listing = rent[arr[j]];
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
              ${listing.rentAddDis}, ${listing.rentAddCity}
            </p>
            <p class="listing-description">
              ${listing.rentDescript}
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
sortBtn.addEventListener("click", rentalSort);
