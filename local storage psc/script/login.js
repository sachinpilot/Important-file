document.querySelector("form").addEventListener("submit",loginfun)
let userlogindata=JSON.parse(localStorage.getItem("signupls")) || []
function loginfun(){
    event.preventDefault()
    if(userlogindata.length===0){
        alert("No user exist")
        return
    }
    let userobj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#pswd").value
        }
       let flag=false;
      userlogindata.forEach(function(el){
         if(el.email===userobj.email && el.password===userobj.password){
             flag=true;
        localStorage.setItem("loginls",JSON.stringify(el))
        alert("Login Sucessfull")
        window.location.href="index.html"
         }
      })
      if(flag===false){
          alert("Invalid user")
      }
    
}

