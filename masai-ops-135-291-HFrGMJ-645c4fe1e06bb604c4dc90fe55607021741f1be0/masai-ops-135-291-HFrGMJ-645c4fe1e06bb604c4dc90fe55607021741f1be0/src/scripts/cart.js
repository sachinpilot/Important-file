

let cartData=JSON.parse(localStorage.getItem("items")) || []
localStorage.setItem("CartLs",JSON.stringify(cartData))
let final_data=JSON.parse(localStorage.getItem("CartLs"))
console.log(final_data)

let totalcartprice=document.querySelector("#cart_total")
totalcartprice.innerText=0;
//totalcartItem.textContent=final_data.length;
let cont=document.querySelector("#cart")
function cartdisplay(data){
cont.innerHTML=null;
let total=0;
totalcartprice.innerText=0;
    data.forEach(function(el,index){
        
        total+=Number(el.price)
        let cartbox=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image;
        let name=document.createElement("p")
        name.textContent=el.name;
        let price=document.createElement("p")
        price.innerText=`Price:-${el.price}`
     let deltbtn=document.createElement("button")
     deltbtn.innerText="Remove"
deltbtn.addEventListener("click",function(){
    removeitem(el,index)
})


        cartbox.append(img,name,price,deltbtn)
  cont.append(cartbox)
 totalcartprice.innerText=total;
    })
}
cartdisplay(final_data)

function removeitem(el,index){
  final_data.splice(index,1)
  localStorage.setItem("CartLs",JSON.stringify(final_data))
cartdisplay(final_data)
}
