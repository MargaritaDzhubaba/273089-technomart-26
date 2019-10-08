var MapLink = document.querySelector(".location-img-btn");

var MapPopup = document.querySelector(".modal-map");
var MapClose = MapPopup.querySelector(".modal-close");

MapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  MapPopup.classList.add("modal-show");
});

MapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  MapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (MapPopup.classList.contains("modal-show")) {
      MapPopup.classList.remove("modal-show");
    }
  }
});