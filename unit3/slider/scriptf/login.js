


document.querySelector("form").addEventListener("submit",loginfun)
let loginData=JSON.parse(localStorage.getItem("U3SignLs")) || []

let y=document.querySelector("#nam")

function loginfun(){
    event.preventDefault()
    if(loginData.length===0){
        alert("No user Exist")
        return;
    }
    let logobj={
        email:document.querySelector("#email").value,
            password:document.querySelector("#pswd").value
    }
    let flag=false;
    loginData.forEach(function(el){
         if(logobj.email===el.email && logobj.password===el.password){
             
             flag=true;
             localStorage.setItem("LogU3",JSON.stringify(el))
             alert("Login Sucess")
             window.location.href="./index.html"
         }
    })
    if(flag===false){
        alert("Please Put Right Credential")
        return;
    }
    
}
