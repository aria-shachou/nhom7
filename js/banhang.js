var filterSelect = document.getElementById("filter");
var option = document.createElement("option");

option.value = "Mức giá";
option.text = "Mức giá";
filterSelect.add(option);
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const thanhtiens = document.querySelectorAll(".thanhtien");
const dongias = document.querySelectorAll(".donGia");
const tongcong = document.querySelector(".thanhTien.tongcong");

var tong = 0;
function sum(obj) {
  var dongia = obj.parentNode.previousElementSibling.textContent;
  var thanhtien = obj.parentNode.nextElementSibling;
  var soluong = parseInt(obj.value);

  if (isNaN(soluong) || soluong <= 0) {
    t = 0;
    thanhtien.textContent = t;
  } else {
    t = soluong * dongia;
    thanhtien.textContent = t;
  }

  updateToTal();
}

function updateToTal() {
  tong = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    const row = checkbox.parentNode.parentNode;
    const quantityInput = row.querySelector(".soLuong input");
    const thanhtien = row.querySelector(".thanhTien");

    if (checkbox.checked && quantityInput.value > 0) {
      tong += parseInt(thanhtien.textContent);
    }
  }
  tongcong.textContent = tong;
}

// bat/ tat checkbox

for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];

  checkbox.addEventListener("change", function () {
    const row = this.parentNode.parentNode;
    const quantityInput = row.querySelector(".soLuong input");
    const thanhtien = row.querySelector(".thanhTien");
    if (this.checked) {
      quantityInput.removeAttribute("disabled");
    } else {
      quantityInput.setAttribute("disabled", "disabled");
      quantityInput.value = "";
      thanhtien.textContent = "";
    }
    sum(quantityInput);
  });
}
