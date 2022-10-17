var product=[
    {
        url:"https://n.nordstrommedia.com/id/sr3/ec782a05-3b43-4194-9d52-cf5657e33244.jpeg?h=365&w=240&dpr=2",
        name:"Steve Madden",
        price:2999,
        catagory:"fashion",
        productId:"Women1"
    },
    {
        url:"https://n.nordstrommedia.com/id/sr3/0f59f48f-8948-4696-a0da-cd04b87eea9a.jpeg?h=365&w=240&dpr=2",
        name:"lulus",
        price:2499,
        catagory:"festive",
        productId:"Women2"
    },
    {
        url:"https://n.nordstrommedia.com/id/sr3/930042c5-72ad-4178-bc4d-96befa68427e.jpeg?h=365&w=240&dpr=2",
        name:"Winter Queen",
        price:3599,
        catagory:"casual",
        productId:"Women3"
    },
    {
        url:"https://n.nordstrommedia.com/id/sr3/3407abe5-2ca0-4447-ab93-d2f2d42b64df.jpeg?h=365&w=240&dpr=2",
        name:"Formal divns",
        price:1099,
        catagory:"casual",
        productId:"Women4"
    },
    {
        url:"https://n.nordstrommedia.com/id/sr3/80e6d8dc-a3cc-4eef-919e-c9dd9d37d870.jpeg?h=365&w=240&dpr=2",
        name:"Grown women",
        price:7589,
        catagory:"Trending",
        productId:"Women4"
    },
    {
        url:"https://n.nordstrommedia.com/id/sr3/1ac5ff80-b000-4737-9935-19c84e43c297.jpeg?h=365&w=240&dpr=2",
        name:"Fairy style",
        price:4440,
        catagory:"fashion",
        productId:"Women5"
    },
    {
        url:"https://n.nordstrommedia.com/id/sr3/69e4651a-c726-44f5-a840-e4459a204ebe.jpeg?h=365&w=240&dpr=2",
        name:"Liitle chunk",
        price:999,
        catagory:"Trending",
        productId:"Women6"
    }
]

let container=document.querySelector("#main")
let filter=document.querySelector("#selecat")
let cartdata=JSON.parse(localStorage.getItem("cartls")) || []

displaytable(product)
function displaytable(data){
    container.innerHTML=null;
  data.forEach(function(el){
      let box=document.createElement("div")
      box.id="apple"
      let img=document.createElement("img");
      img.src=el.url;
      let name=document.createElement("h2");
      name.innerText=el.name;
      let price=document.createElement("p")
      price.innerText=el.price;
      let catagory=document.createElement("p")
      catagory.innerText=el.catagory;
      let btn=document.createElement("button")
      btn.innerText="Add to cart"
      btn.addEventListener("click",function(){
      cartfunction(el)
      })

      box.append(img,name,price,catagory,btn)
      container.append(box)
  })
}

filter.addEventListener("change",selectfun)

function selectfun(){
    if(filter.value===""){
        displaytable(product)
    }else{

    
        let filterArray=product.filter(function(el){
            return el.catagory==filter.value;
        })
        displaytable(filterArray)
    }
   
 
}



function cartfunction(el){
    let flag=false;
    for(let i=0;i<=cartdata.length-1;i++){
        if(cartdata[i].productId===el.productId){
            flag=true;
            alert("prodct already exist")
            break;
        }
    }
    if(flag===false){

    
    cartdata.push(el)
    alert("product added succesfully")
    console.log(cartdata)
    localStorage.setItem("cartls",JSON.stringify(cartdata))
    }
    }

//sorting and filter;
let btn1=document.querySelector("#btn1")
btn1.addEventListener("click",priceLtoH)

function priceLtoH(){
product_filter=product.sort((x,y) => x.price-y.price)
displaytable(product_filter)
}

let btn2=document.querySelector("#btn2")
btn2.addEventListener("click",priceHtoL)

function priceHtoL(){
    product_filter=product.sort((a,b) => b.price-a.price)
    displaytable(product_filter)
}