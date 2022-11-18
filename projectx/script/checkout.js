

// let paybtn=document.getElementById('paybtn')
// paybtn.addEventListener('click',payMoney)

let card=document.getElementById('dpc')
card.style.display='none'
let csv=document.getElementById('csvnu')
csv.style.display='none'

let cartData=JSON.parse(localStorage.getItem("cArtLs")) || []
let adressLS=JSON.parse(localStorage.getItem("adrsLS")) || []

let totalBill=document.getElementById('BiLL')
totalBill.innerText=0

let sum=0;
for(let i=0;i<=cartData.length-1;i++){
    sum=sum+cartData[i].price;
    totalBill.innerText=sum;
}

const adrees=()=>{
    let fName=document.getElementById('cName').value;
    let lName=document.getElementById('cLname').value;
    let select=document.getElementById('selct').value;
    let state=document.getElementById('state').value;
    let town=document.getElementById('town').value;
    let street=document.getElementById('strt').value;
    let zip=document.getElementById('zip').value;
    let mobile=document.getElementById('cnum').value;
    let email=document.getElementById('cemail').value;

let adressObj={
    fName:fName,
    Lname:lName,
    choose:select,
    state:state,
    town:town,
    street:street,
    zip:zip,
    mobile:mobile,
    email:email
}
if(adressObj.fName=='' || adressObj.Lname=="" || adressObj.choose=='' || adressObj.state=='' || adressObj.town=='' || adressObj.street==''
|| adressObj.zip=='' || adressObj.mobile=='' || adressObj.email==''){
    alert('Please Fill All details')
    return;
}

else{
    adressLS.push(adressObj)
    localStorage.setItem("adrsLS",JSON.stringify(adressLS))
}
}



//payment
const payMoney=()=>{

    if(adressLS.length===0){
        alert('Fill delivery location')
        return;
    }
    let cardnumber=document.getElementById('cnumber').value;
    let csvNumber=document.getElementById('csv').value;
    let name=document.getElementById('chname').value;
    let month=document.getElementById('month').value;
    // let year=document.getElementById('yer').value;


    if(cardnumber=='' || csvNumber=='' || name==='' || month==='' || year===''){
        alert('Please Fill All details')
        return;
    }


  
  if(cardnumber.length>16 || cardnumber.length<16){
      card.style.display='block'
      card.style.color='red'
  }
  if(csvNumber.length<4 || csvNumber.length>4){
   csv.style.display='block'
    csv.style.color='red'
  }

}



