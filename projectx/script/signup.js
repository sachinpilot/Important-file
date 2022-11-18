


let signupData=JSON.parse(localStorage.getItem("signLs")) || []

let form=document.getElementById('signform')
form.addEventListener('submit',signfunction)

let alt=document.getElementById('alt')


function signfunction(){
    event.preventDefault()
    
    let sObj={
        fName:document.getElementById('fst_name').value,
        lName:document.getElementById('lst_name').value,
        email:document.getElementById('email').value,
        passw:document.getElementById('pswd').value,
        cpaswd:document.getElementById('pswD').value
    }
  if(sObj.fName=="" || sObj.lName==='' || sObj.email=='' || sObj.passw==='' || sObj.cpaswd==''){
      alert('Please Fill All details')
      return;
  }
   if(sObj.cpaswd!==sObj.passw){
    alt.style.display='block'
    alt.style.color='red'

   }
  else{
      signupData.push(sObj)
      localStorage.setItem("signLs",JSON.stringify(signupData))
      console.log(signupData)
      alt.style.display='none'

      alert('signup sucess')

    form.reset()
    window.location.href='login.html'

  }

}