/* SCROLL ANIMATION */

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".animate").forEach(el=>{
observer.observe(el);
});


/* IMAGE PREVIEW */

const modal=document.getElementById("previewModal");

if(modal){

const modalImg=document.getElementById("previewImg");

document.querySelectorAll(".card img").forEach(img=>{
img.onclick=function(){
modal.style.display="block";
modalImg.src=this.src;
}
});

document.querySelector(".close").onclick=function(){
modal.style.display="none";
}

}
