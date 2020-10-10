const districtDisplay = document.getElementById("display-districts");

function displayDistricts() {
  if (document.getElementById("hanoi").checked) {
    districtDisplay.innerHTML = `
    <h5>Districts:</h5>
    <label for="caugiay">
      <input type="checkbox" name="districts-hn" id="caugiay"> Cầu Giấy
    </label> <br>
    <label for="thanhxuan">
      <input type="checkbox" name="districts-hn" id="thanhxuan"> Thanh Xuân
    </label> <br>
    <label for="hoankiem">
      <input type="checkbox" name="districts-hn" id="hoankiem"> Hoàn Kiếm
    </label>
    `;
  } else if (document.getElementById("danang").checked) {
    districtDisplay.innerHTML = `
    <h5>Districts:</h5>
    <label for="sontra">
      <input type="checkbox" name="districts-dn" id="sontra"> Sơn Trà
    </label> <br>
    <label for="haichau">
      <input type="checkbox" name="districts-dn" id="haichau"> Hải Châu
    </label>
    `;
  } else if (document.getElementById("hcmc").checked) {
    districtDisplay.innerHTML = `
    <h5>Districts:</h5>
    <label for="district-1">
      <input type="checkbox" name="districts-hcmc" id="district-1"> Quận 1
    </label> <br>
    <label for="districts-2">
      <input type="checkbox" name="districts-hcmc" id="district-2"> Quận 2
    </label>`;
  } else {
    districtDisplay.innerHTML = `
    Please select a city.`;
  }
}
