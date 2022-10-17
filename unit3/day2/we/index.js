
function product(n,p){
  this.name=n,
  this.price=p
}
document.querySelector("form").addEventListener("submit",prodfun)
let pData=JSON.parse(localStorage.getItem("proDLs"))  || []

function prodfun(){
    event.preventDefault()
    let name=document.querySelector("#name").value;
    let price=document.querySelector("#price").value;
   if(name==="" ||  price==""){
       alert("Fill all detail")
   }else{
       let prdct=new product(name,price)
       pData.push(prdct)
   localStorage.setItem("proDLs",JSON.stringify(pData))
   form.reset()
   alert("Aded sucess")
   console.log(pData)
   }
}