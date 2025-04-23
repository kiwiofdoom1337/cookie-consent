let cookieWindow = document.getElementById("myModal");
let cookieAccept = document.getElementById("confirmBtn");
let cookieClose = document.getElementById("close");

cookieClose.onclick = function() {
  cookieWindow.style.display = "none";
}

cookieAccept.onclick = function() {
  cookieWindow.style.display = "none";
  localStorage.setItem("cookie", true);
}

window.onload = function() {
  if (localStorage.getItem("cookie") === null) {
    cookieWindow.style.display = "block";
  }
}