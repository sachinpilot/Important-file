let cartData=JSON.parse(localStorage.getItem("CarTlS")) || [];
localStorage.setItem("mycart",JSON.stringify(cartData))
let Product=JSON.parse(localStorage.getItem("mycart")) || []

let cont=document.querySelector("#cart")
let totalPrice=document.querySelector("#cart_total")

let checout=document.querySelector("#checkout")
let empty=document.querySelector("#empty_Cart")
if(Product.length===0){
   empty.style.display="block"
   totalPrice.style.display="none"
   checout.style.display="none"
}

function cartdisplay(data){
    cont.innerHTML=null;
    let total=0;
    totalPrice.innerText=0;
 data.forEach(function(el,i){
     total=total+Number(el.price)
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image;
     let name=document.createElement("p")
     name.textContent=el.name;
     let price=document.createElement("p")
     price.textContent=`Price:-${el.price}`
      let btn=document.createElement("button")
      btn.innerText="Remove"
      btn.addEventListener("click",function(){
       deletecart(el,i)
      }) 

     div.append(img,name,price,btn)
     cont.append(div)
     totalPrice.innerText=total;
 })
}
cartdisplay(Product)

function deletecart(el,i){
  Product.splice(i,1)
  cartdisplay(Product)
}