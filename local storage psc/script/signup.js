document.querySelector("form").addEventListener("submit",signupfun)
let userData=JSON.parse(localStorage.getItem("signupls")) || []

function signupfun(){
    event.preventDefault()
    let user={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#pswd").value
    }
    if(user.name=="" || user.email==="" || user.password===""){
        alert("fill all details")
    }else{
        userData.push(user)
        localStorage.setItem("signupls",JSON.stringify(userData))
        alert("Login Sucessfull")
        window.location.href="login.html"
    }
}