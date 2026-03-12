document.getElementById("orderForm").addEventListener("submit", function(e){

e.preventDefault();

let message = "Hello I want to order invitation design";

let phone = "916381928864";

let url = "https://wa.me/"+phone+"?text="+encodeURIComponent(message);

window.open(url);

});
