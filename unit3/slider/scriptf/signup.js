document.querySelector("form").addEventListener("submit",signupfun)
let userData=JSON.parse(localStorage.getItem("U3SignLs")) || []

function signupfun(){
    event.preventDefault()
    let signObj={
         email:document.querySelector("#email").value,
        uID:document.querySelector("#usr").value,
        password:document.querySelector("#pswd").value
    }
    if(signObj.email==="" || signObj.uID=="" || signObj.password===""){
        alert("Please Fill All Details")
        return;
    }
    else{
        userData.push(signObj)
        localStorage.setItem("U3SignLs",JSON.stringify(userData))
        alert("Signup Sucess")
        window.location.href="./login.html"
    }
}