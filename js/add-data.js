import { rent } from "./rentdata.js";
import { house } from "./housedata.js";

let rentSale = document.getElementById("rentSale");

let newListing = {};
rentSale.onchange = function () {
  let rentSaleSelection = rentSale.options[rentSale.selectedIndex].text;
  switch (rentSaleSelection) {
    case "Rental":
      newListing.rentid = 5;
      newListing.rentPrice = document.getElementById("price").data;
      newListing.rentBedroom = document.getElementById("Bedroom").data;
      newListing.rentBathroom = document.getElementById("bathRoom").data;
      newListing.rentFloor = document.getElementById("floor").data;
      newListing.rentPhone = document.getElementById("phoneNumber").data;
      newListing.rentSquare = document.getElementById("area").data;
      newListing.rentAddress = document.getElementById("address").data;
      newListing.rentAddDis = document.getElementById("districtPick").data;
      newListing.rentAddCity = document.getElementById("city-pick").data;
      newListing.rentTitle = document.getElementById("title").data;
      newListing.rentDescript = document.getElementById("description").data;
      newListing.rentImg = document.getElementById("images").data;
      rent.push(newListing);
      console.log(rent);
      break;
    case "For Sale":
      newListing.houseid = 0;
      newListing.housePrice = document.getElementById("price").data;
      newListing.houseBedroom = document.getElementById("Bedroom").data;
      newListing.houseBathroom = document.getElementById("bathRoom").data;
      newListing.houseFloor = document.getElementById("floor").data;
      newListing.housePhone = document.getElementById("phoneNumber").data;
      newListing.houseSquare = document.getElementById("area").data;
      newListing.houseAddress = document.getElementById("address").data;
      newListing.houseAddDis = document.getElementById("districtPick").data;
      newListing.houseAddCity = document.getElementById("city-pick").data;
      newListing.houseTitle = document.getElementById("title").data;
      newListing.houseDescript = document.getElementById("description").data;
      newListing.houseImg = document.getElementById("images").data;
      house.push(newListing);
      console.log(house);
      break;
  }
};
