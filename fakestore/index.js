



 async function findproduct(){
     let count=document.getElementById("total")

    try{
     let data=await fetch('https://fakestoreapi.com/products')
     let res=await data.json()
     count.innerText=res.length;
     store(res)
     console.log(res)
    }
    catch(err){
  console.log(err)
    }
}
findproduct()
container=document.getElementById("bag")
let cartData=JSON.parse(localStorage.getItem("cArtLs")) || []
function store(data){
data.forEach(function(el){
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image;
    let name=document.createElement("h3")
    name.textContent=el.title;
      let price=document.createElement("p")
    price.innerText=`Price:-${el.price}`
    let btn=document.createElement("button")
    btn.innerText="Add to Favt"
 
    btn.addEventListener("click",function(){
        addtocart(el)
    })

div.append(img,name,price,btn)
container.append(div)
})
}


function addtocart(el){
    let flag=false;
    for(let i=0;i<=cartData.length-1;i++){
        if(cartData[i].id===el.id){
            flag=true;
            alert("Product in Cart")
        }
    }
    if(flag===false){
        cartData.push(el)
        localStorage.setItem("cArtLs",JSON.stringify(cartData))
        alert("Product add to cart sucessfully")
    }
}