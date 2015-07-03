var formButton = document.querySelector("#submit");

formButton.addEventListener("click", function() {
	var formSubject = document.querySelector("#name");
	var formEmail = document.querySelector("#email");
	var formMessage = document.querySelector("#message");
	event.preventDefault();
	alert("Thanks for submitting a form! Your message will read: " + formSubject.innerText + "From: " + formEmail.innerText);
});


var projectBtn = document.querySelector("#projectBtn"); 
 
//when you click the Project Button
projectBtn.addEventListener("click", function(event) { 
  // show #projectSection
  document.querySelector("#projectSection").style.display = "block"; 
  // hide all other tab contents 
  document.querySelector("#contactMe").style.display = "none"; 
  document.querySelector("#aboutSection").style.display = "none"; 
}); 


var contactBtn = document.querySelector("#contactBtn"); 
 
//when you click the Contact Button
contactBtn.addEventListener("click", function(event) { 
  
  // show #contactSection
  document.querySelector("#contactMe").style.display = "block"; 
  // hide all other tab contents 
  document.querySelector("#projectSection").style.display = "none"; 
  document.querySelector("#aboutSection").style.display = "none"; 
}); 

var aboutBtn = document.querySelector("#aboutBtn");

//when you click the About Me Button
aboutBtn.addEventListener("click", function(event) { 
  
  // show #projectSection
  document.querySelector("#aboutSection").style.display = "block"; 

  // hide all other tab contents 
  document.querySelector("#projectSection").style.display = "none"; 
  document.querySelector("#contactMe").style.display = "none"; 

}); 






