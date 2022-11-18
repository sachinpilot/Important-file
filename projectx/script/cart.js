let cartData=JSON.parse(localStorage.getItem("cArtLs")) || []
let container=document.getElementById('box')
let money=document.getElementById('money')
let item=document.getElementById('item')

item.innerText=cartData.length;

let empty=document.getElementById('empty_Cart')
empty.style.display='none'

if(cartData.length==0){
    empty.style.display='block'
    container.style.display='none'
    money.style.display='none'

}


let total=document.getElementById('paisa')
 const appendData=(data)=>{
     container.innerHTML='';
     total.innerText=0;
     let sum=0;
  data.forEach((el,index)=>{
    empty.style.display='none'
     sum+=el.price;
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
      btn.innerText='remove'
      btn.id='delt'
      btn.addEventListener("click",function(){
          deletefun(el,index)
      })

      div.append(img,name,price,catagory,btn)
      container.append(div)
      total.innerText=sum;
      total.style.color='red'
      total.style.fontWeight='bold'
  })
}

appendData(cartData)

function deletefun(el,index){
    cartData.splice(index,1)
    localStorage.setItem("cArtLs",JSON.stringify(cartData))
    appendData(cartData)
}