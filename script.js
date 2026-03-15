const gallery = document.getElementById("gallery");

if(gallery){

const maxDesigns = 100;

for(let i = 1; i <= maxDesigns; i++){

let img = new Image();

img.src = "images/design"+i+".jpg";

img.onload = function(){

let card = document.createElement("div");
card.className = "card";

let image = document.createElement("img");
image.src = img.src;

let orderBtn = document.createElement("a");

let designURL = window.location.origin + "/images/design"+i+".jpg";

orderBtn.href =
"https://wa.me/916381928864?text=Hello I want to order this invitation design: "+designURL+"%0A%0ADescription:";

orderBtn.target = "_blank";

orderBtn.className = "order-btn";

orderBtn.innerText = "Order on WhatsApp";

card.appendChild(image);
card.appendChild(orderBtn);

gallery.appendChild(card);

}

}

}
