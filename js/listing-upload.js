const cityPick = document.getElementById("city-pick");
const districtOptions = document.getElementById("district-options");

cityPick.onchange = function () {
  let citySelection = cityPick.options[cityPick.selectedIndex].text;
  //Change district options
  switch (citySelection) {
    case "Hanoi":
      districtOptions.insertAdjacentHTML(
        "afterend",
        `
      <option class="districtHN">Cầu Giấy</option>
      <option class="districtHN">Thanh Xuân</option>
      <option class="districtHN">Hoàn Kiếm</option>`
      );
      break;
  }
};
