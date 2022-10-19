/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
document.querySelector("form").addEventListener("submit",checkoutfun)
let msgdiv=document.querySelector("#msg")
let animate=document.querySelector("#gif")
let clear=document.querySelector("#formId")
function checkoutfun(){
    event.preventDefault()

    let name=document.querySelector("#name").value;
    let phone=document.querySelector("#number").value;
    let address=document.querySelector("#address").value;
    if(name=="" || phone=="" || address==""){
        alert("Please Fill All Details")
        return;
    }
    if(phone.length<10 || phone.length>10){
        alert("Put A Valid Mobile number")
        return;
    }else{
      msgdiv.textContent="Your Order Is Sucessfully Placed 🎈🎈"
     animate.style.display="block"
     clear.reset()
    }
}
