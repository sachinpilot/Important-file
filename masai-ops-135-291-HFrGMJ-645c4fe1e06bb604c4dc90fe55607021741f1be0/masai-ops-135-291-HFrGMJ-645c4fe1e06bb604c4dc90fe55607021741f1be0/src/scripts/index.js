// The items should be stored in local storage with key :- “items”
// API :- https://mock-server-js.onrender.com/api/groceries


async function findproduct(){
    let totalproduct=document.querySelector("#item_count")
    try{
        let data=await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries')
        let res=await data.json()
        let real_data=res.data;
        totalproduct.textContent=real_data.length;
        appendproduct(real_data)
        console.log(real_data)
    }
    catch(err){
      console.log('err',err)
    }   
}
findproduct()

let cartData=JSON.parse(localStorage.getItem("items")) || []

let cont=document.querySelector("#items")
function appendproduct(data){
    cont.innerHTML=null;
data.forEach(function(el){
    let box=document.createElement("div")
    box.class="item"
    let img=document.createElement("img")
    img.src=el.image;
   let name=document.createElement("h2")
   name.textContent=el.name
 let price=document.createElement("p")
 price.textContent=`Price:-${el.price}`
let btn=document.createElement("button")
btn.textContent="Add to Cart"
btn.addEventListener("click",function(){
 addtoCart(el)
})

 box.append(img,name,price,btn)
 cont.append(box)
})

}

function addtoCart(el){
    let cartFlag=false;
    for(let i=0;i<=cartData.length-1;i++){
     if(cartData[i].id===el.id){
         cartFlag=true;
         alert("Product Already exist in cart")
         break;
     }
    }
    if(cartFlag===false){
        cartData.push(el)
        localStorage.setItem("items",JSON.stringify(cartData))
        alert("Product Added Sucessfully")
    }
}