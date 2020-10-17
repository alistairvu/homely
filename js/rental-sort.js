import { rent } from "./rentdata.js";

const sortBtn = document.getElementById("sort-btn");
const limit = rent.length;
console.log(limit);

// Variables for city
const hanoi = document.getElementById("hanoi");
const hcmc = document.getElementById("hcmc");

// Sort by city
function districtSort() {
  let arr = [];
  for (let i = 0; i < limit; i++) {
    let listing = rent[i];
    if (hanoi.checked) {
      const thanhxuan = document.getElementById("thanhxuan");
      const hoankiem = document.getElementById("hoankiem");
      if (
        !thanhxuan.checked &&
        !hoankiem.checked &&
        listing.rentAddCity == "Hà Nội"
      ) {
        arr.push(listing);
      } else {
        if (thanhxuan.checked && listing.rentAddDis == "Thanh Xuân") {
          arr.push(listing);
        }
        if (hoankiem.checked && listing.rentAddDis == "Hoàn Kiếm") {
          arr.push(listing);
        }
      }
    } else if (hcmc.checked) {
      const district1 = document.getElementById("district-1");
      const district2 = document.getElementById("district-2");
      if (
        !district1.checked &&
        !district2.checked &&
        listing.rentAddCity == "Hồ Chí Minh"
      ) {
        arr.push(listing);
      } else {
        if (district1.checked && listing.rentAddDis == "Quận 1") {
          arr.push(listing);
        }
        if (district2.checked && listing.rentAddDis == "Quận 2") {
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
      sortArr.push(rent[i]);
    }
  } else {
    sortArr = districtSort();
  }

  if (minPrice.value.length > 0) {
    sortArr = sortArr.filter((x) => x.rentPrice >= minPrice.value);
  }
  if (maxPrice.value.length > 0) {
    sortArr = sortArr.filter((x) => x.rentPrice <= maxPrice.value);
  }

  if (minArea.value.length > 0) {
    sortArr = sortArr.filter((x) => x.rentSquare >= minArea.value);
  }
  if (maxArea.value.length > 0) {
    sortArr = sortArr.filter((x) => x.rentSquare <= maxArea.value);
  }
  console.log(sortArr);
  return sortArr;
}

// display sorted listings!!

function rentalSort() {
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
      "listing-intro"
    ).innerHTML = `1 rental listing for you.`;
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
            <img src="${
              listing.rentImg
            }" class="card-img-top" width="150" height="200"/>
            <h5 class="listing-title"> <a href="rental/${
              rent.indexOf(listing) + 1
            }.html"> ${listing.rentTitle}</a> </h5>
            <p class="brief-info">
              Price: ${listing.rentPrice}m/mo | Bedrooms: ${
          listing.rentBedroom
        } <br />
              Bathrooms: ${listing.rentBathroom} | Area: ${
          listing.rentSquare
        } m<sup>2</sup>
            </p>
            <p style="font-family: 'Playfair Display', serif">
              ${listing.rentAddress} <br>
              ${listing.rentAddDis}, ${listing.rentAddCity}
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
sortBtn.addEventListener("click", rentalSort);
