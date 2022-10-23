let cartData=JSON.parse(localStorage.getItem("cArtLs")) || []
let box=document.getElementById("showcart")
let total=document.getElementById("count")
total.textContent=0;

let emptyCart=document.getElementById("empty_Cart")
let go=document.getElementById("go")
let totaL=document.getElementById("paisa")

if(cartData.length===0){
emptyCart.style.display="block"
 go.style.display="none"
 totaL.style.display="none"
 //document.body.style.background="#88cdab"
}


function viewCart(data){
    box.innerHTML=null;
    let money=0;
    total.textContent=0;
  data.forEach(function(el,index){
      money=money+Number(el.price)
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image;
    let name=document.createElement("h3")
    name.textContent=el.title;
      let price=document.createElement("p")
    price.innerText=`Price:-${el.price}`
    let btn=document.createElement("button")
    btn.innerText="Delete"
btn.addEventListener("click",function(){
    deletfromCart(el,index)
})

    div.append(img,name,price,btn)
box.append(div)
total.innerText=money;
  })
}
viewCart(cartData)

function deletfromCart(el,index){
    cartData.splice(index,1)
    viewCart(cartData)
    localStorage.setItem("cArtLs",JSON.stringify(cartData))
}