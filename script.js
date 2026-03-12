function filterSelection(category){

let cards=document.getElementsByClassName("card");

if(category=="all") category="";

for(let i=0;i<cards.length;i++){

cards[i].style.display="none";

if(cards[i].className.indexOf(category)>-1){

cards[i].style.display="block";

}

}

}

filterSelection("all");
