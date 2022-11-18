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

let container=document.getElementById('box')
let cartData=JSON.parse(localStorage.getItem("cArtLs")) || []
let signupData=JSON.parse(localStorage.getItem("signLs")) || []
let logindata=JSON.parse(localStorage.getItem("loginLS")) || []
let uname=document.getElementById('uname')

let nam=document.getElementById('nam')
if(signupData.length==0){
    uname.style.display='none'
}else{
    uname.style.display='block'
}

for(let i=0;i<=logindata.length-1;i++){
  uname.style.display='block'
    nam.innerText=`${logindata[i].fName}`;

    nam.style.color='red'
}

const appendData=(data)=>{
    container.innerHTML='';
    data.forEach((el)=>{

        let div=document.createElement('div')
        div.className='box'
        let img=document.createElement('img')
        img.src=el.url;
        let name=document.createElement('p')
        name.textContent=el.name;
        let price=document.createElement('p')
        price.innerText=`Price:-${el.price}`;
        let catagory=document.createElement('p')
        catagory.innerText=el.catagory;
        let btn=document.createElement('button')
        btn.innerText='Cart'
        btn.id='cat'
        btn.addEventListener("click",function(){
            cartfunction(el)
     })

        div.append(img,name,price,catagory,btn)
        container.append(div)
    })
}

appendData(product)

function cartfunction(el){
    if(signupData.length===0){
        alert('please signup for shopping')
        window.location.href='signup.html'
        return;
    }
    let flag=false;
    for(let i=0;i<=cartData.length-1;i++){
        if(cartData[i].productId===el.productId){
            flag=true;
            alert('product already in cart')
return;
        }
    }
    if(flag==false){
        cartData.push(el)
        localStorage.setItem("cArtLs",JSON.stringify(cartData))
        alert('product added sucessfully')
    }
}

let btn1=document.getElementById('sort_LH')
let btn2=document.getElementById('sort_HL')

btn1.addEventListener("click", sortlh)
btn2.addEventListener('click',sorthl)

function sortlh(){
    let res=product;
    let ans=product.sort((x,y) =>x.price-y.price)
    appendData(ans)
}

function sorthl(){
    let res=product;
    let ans=res.sort((x,y) =>y.price-x.price)
    appendData(ans)
}