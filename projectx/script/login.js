


let from=document.getElementById('from')
from.addEventListener('submit',loginfun)

let signupData=JSON.parse(localStorage.getItem("signLs")) || []
let logindata=JSON.parse(localStorage.getItem("loginLS")) || []

function loginfun(){
    event.preventDefault()
    if(signupData.length==0){
        alert('No user Found')
        window.location.href='signup.html'
        return;
    }

   let lObj={
       email:document.getElementById('email').value,
       password:document.getElementById('pswd').value
   }
if(lObj.email=='' || lObj.password==''){
    alert('Fill All details')
    return;
}
   let flag=false;

   signupData.forEach(function(el){
       if(lObj.email===el.email && lObj.password===el.cpaswd){
           flag=true;
           logindata.push(el)
           localStorage.setItem("loginLS",JSON.stringify(logindata))
           alert('login sucess')
           from.reset()
           window.location.href='index.html'
       }
   })
   if(flag===false){
       alert('Please Check Your email or password')
       return;
   }

}