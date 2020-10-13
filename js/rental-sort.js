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
  let arr = [];
  console.log(sortArr);
  console.log(minPrice.value);
  console.log(maxPrice.value);
  for (let i of sortArr) {
    let listing = rent[i];
    if (minPrice.value.length > 0 && minPrice.value <= listing.rentPrice) {
      if (maxPrice.value.length > 0 && maxPrice.value >= listing.rentPrice) {
        console.log(listing.rentPrice);
        arr.push(i);
      } else {
        console.log(listing.rentPrice);
        arr.push(i);
      }
    } else {
      if (maxPrice.value.length > 0 && maxPrice.value >= listing.rentPrice) {
        arr.push(i);
      } else {
        arr.push(i);
      }
    }
  }
  console.log(arr);
  return arr;
}

// Add event listener
sortBtn.addEventListener("click", priceSort);
