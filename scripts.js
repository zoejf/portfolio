var button = document.getElementById("submit");

button.addEventListener("click", function() {
	var formSubject = document.getElementById("name");
	var formEmail = document.getElementById("email");
	var formMessage = document.getElementById("message");
	event.preventDefault();
	alert("Thanks for submitting a form! Your message will read: " + formSubject.innerText + "From: " + formEmail.innerText);
});




