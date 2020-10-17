import { rent } from "./rentdata.js";
import { house } from "./housedata.js";

let rentSale = document.getElementById("rentSale");

let newListing = {};
rentSale.onchange = function () {
  let rentSaleSelection = rentSale.options[rentSale.selectedIndex].text;
  switch (rentSaleSelection) {
    case "Rental":
      newListing.rentId = 5;
      newListing.rentPrice = document.getElementById("price").value;
      newListing.rentBedroom = document.getElementById("Bedroom").value;
      newListing.rentBathroom = document.getElementById("bathRoom").value;
      newListing.rentFloor = document.getElementById("floor").value;
      newListing.rentPhone = document.getElementById("phoneNumber").value;
      newListing.rentSquare = document.getElementById("area").value;
      newListing.rentAddress = document.getElementById("address").value;
      newListing.rentAddDis = document.getElementById("districtPick").value;
      newListing.rentAddCity = document.getElementById("city-pick").value;
      newListing.rentTitle = document.getElementById("title").value;
      newListing.rentDescript = document.getElementById("description").value;
      newListing.rentImg = document.getElementById("images").value;
      rent.push(newListing);
      console.log(rent);
      break;
    case "For Sale":
      newListing.houseId = 0;
      newListing.housePrice = document.getElementById("price").value;
      newListing.houseBedroom = document.getElementById("Bedroom").value;
      newListing.houseBathroom = document.getElementById("bathRoom").value;
      newListing.houseFloor = document.getElementById("floor").value;
      newListing.housePhone = document.getElementById("phoneNumber").value;
      newListing.houseSquare = document.getElementById("area").value;
      newListing.houseAddress = document.getElementById("address").value;
      newListing.houseAddDis = document.getElementById("districtPick").value;
      newListing.houseAddCity = document.getElementById("city-pick").value;
      newListing.houseTitle = document.getElementById("title").value;
      newListing.houseDescript = document.getElementById("description").value;
      newListing.houseImg = document.getElementById("images").value;
      house.push(newListing);
      console.log(house);
      break;
  }
};
