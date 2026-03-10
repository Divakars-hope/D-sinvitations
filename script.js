document.getElementById("orderForm").addEventListener("submit",function(e){

e.preventDefault()

var name=document.getElementById("name").value
var phone=document.getElementById("phone").value
var type=document.getElementById("type").value
var custom=document.getElementById("custom").value

var message="New Invitation Order%0A"

message+="Name: "+name+"%0A"
message+="Phone: "+phone+"%0A"
message+="Card Type: "+type+"%0A"
message+="Customization: "+custom

window.open("https://wa.me/916381928864?text="+message)

})
