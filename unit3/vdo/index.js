

function studentfunction(n,c,u,i,b){
  this.name=n,
  this.course=c,
  this.unit=u,
  this.img=i,
  this.batch=b
}


let form=document.querySelector("#from")
form.addEventListener("submit",mainfun)

let data=JSON.parse(localStorage.getItem("LSstu")) || []

function mainfun(){
    event.preventDefault()
    let name=form.name.value;
    let course=form.crs.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;
if(name=="" || course=="" || unit=="" || image=="" || batch==""){
    alert("Fill All details")
    return;
}
else{
    let s1=new studentfunction(name,course,unit,image,batch);
    data.push(s1)
   localStorage.setItem("LSstu",JSON.stringify(data))
   form.reset()
   alert("Add sucessfull")
}
}
