function sendOrder(){

let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let design=document.getElementById("design").value

let message=`Hello D's Invitations,

I want to order this design.

Design: ${design}

Name: ${name}
Phone: ${phone}

Please confirm availability.`

let url=`https://wa.me/916381928864?text=${encodeURIComponent(message)}`

window.open(url)

}
