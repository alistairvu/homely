import { rent } from "./rentdata.js";

const sortBtn = document.getElementById("sort-btn");
const limit = rent.length;
console.log(limit);

// Sort by city
sortBtn.onclick = () => {
  alert("Running");
  let arr = [];
  for (let i = 0; i < limit; i++) {
    let listing = rent[i];
    if (document.getElementById("hanoi").checked) {
      if (listing.rentAddCity == "Hà Nội") {
        arr.push(i);
      }
    } else if (document.getElementById("hcmc").checked) {
      if (listing.rentAddCity == "Hồ Chí Minh City") {
        arr.push(i);
      }
    }
  }
  console.log(arr);
  return arr;
};

// Add event listener
// sortBtn.addEventListener("click", citySort());
