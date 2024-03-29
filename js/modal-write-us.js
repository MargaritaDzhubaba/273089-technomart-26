var link = document.querySelector(".location-btn");

var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
	storage = localStorage.getItem("email");
	storage = localStorage.getItem("text");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
		}

	if (storage) {
			email.value = storage;
			text.focus();
		} else {
			email.focus();
		} 
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value || !text.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("login", login.value);
		}
	}

	 if (!login.value || !email.value || !text.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("email", email.value);
		}
	}
	
		if (!login.value || !email.value || !text.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("text", text.value);
		}
	} 
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});