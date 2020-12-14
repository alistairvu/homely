const cityPick = document.getElementById("city-pick");
console.log(cityPick)
const districtOptions = document.getElementById("district-options");

cityPick.onchange = function  () {
  let citySelection = cityPick.options[cityPick.selectedIndex].text;
  console.log(citySelection)
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
    case "Ho Chi Minh City":
      districtOptions.insertAdjacentHTML(
        "afterend",
        
        `
      <option class="districtHCM">Quận 1</option>
      <option class="districtHCM">Quận 2</option>`
      );
      break;
    case "Da Nang":
      districtOptions.insertAdjacentHTML(
        "afterend",
        
        `
      <option class="districtDN">Sơn Trà</option>
      <option class="districtDN">Hải Châu</option>`
      
      );
      break;
  }
};
  