let btn = document.querySelector(".mainbtn");
let mbtn = document.querySelector(".minbtn");
let pbtn = document.querySelector(".pusbtn");
let form = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.innerHTML = "1";
  form.style.backgroundColor = "aliceblue";
});

mbtn.addEventListener("click", () => {
  var b = parseInt(btn.innerHTML);
  if (b) {
    btn.innerHTML = b - 1;
  }
  if (btn.innerHTML == "0") {
    btn.innerHTML = "ADD TO CART";
    form.style.backgroundColor = "#f83e25";
  }
});

pbtn.addEventListener("click", () => {
  var a = parseInt(btn.innerHTML);
  if (a) {
    btn.innerHTML = a + 1;
  }
});
