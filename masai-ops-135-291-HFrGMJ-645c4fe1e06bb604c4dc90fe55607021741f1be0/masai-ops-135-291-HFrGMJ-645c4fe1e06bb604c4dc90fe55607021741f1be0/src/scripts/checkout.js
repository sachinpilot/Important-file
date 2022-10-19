
document.querySelector("#place-order").addEventListener("click",checkoutfun)
let msg=document.getElementById("order-message")
function checkoutfun(){
   let name=document.getElementById("name").value;
   let number=document.querySelector("#number").value;
   let adress=document.querySelector("#address").value;
//    console.log(name,number,adress)
let animate=document.getElementById("gif")

if(name=="" || number=="" || adress==""){
    alert("Please Put all Details")
    return;
}if(number.length<10 || number.length>10){
    alert("Enter A vaild Mobile Number")
    return;
}
else{
    msg.textContent="Your Order Is Sucessfully Placed"
    //window.location.href="index.html"
    
   
    animate.style.display="block"
}

}