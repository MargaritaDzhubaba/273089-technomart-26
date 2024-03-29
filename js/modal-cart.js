var CartLink = document.querySelector(".cart-btn");

var CartPopup = document.querySelector(".modal-cart");
var CartClose = CartPopup.querySelector(".modal-close");

CartLink .addEventListener("click", function (evt) {
	evt.preventDefault();
	CartPopup.classList.add("modal-show");
});

CartClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	CartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (CartPopup.classList.contains("modal-show")) {
			CartPopup.classList.remove("modal-show");
		}
	}
});