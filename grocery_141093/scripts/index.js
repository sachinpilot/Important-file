// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

let count_div=document.querySelector("#item_count")
async function acessdata(){

    try{
        let data=await fetch('https://grocery-mock-api.herokuapp.com/items')
         let res=await data.json()
      
        let final_data=res.data;
        count_div.textContent=final_data.length;
        grocerystore(final_data)
        console.log(final_data)
    }
    catch(err){
    console.log('err',err)
    }

}
acessdata()
let cartData=JSON.parse(localStorage.getItem("CarTlS")) || []
let cont=document.getElementById('items')

function grocerystore(data){
 
    data.forEach(function(el){
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image;
        let name=document.createElement("h3")
        name.textContent=el.name;
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
    let flag=false;
 for(let i=0;i<=cartData.length-1;i++){
     if(cartData[i]._id===el._id){
         flag=true;
         alert("Already exist in cart")
         break;
     }
 }
 if(flag==false){
     cartData.push(el)
     localStorage.setItem("CarTlS",JSON.stringify(cartData))
     alert("Product Add to cart sucessfully")
 }

}