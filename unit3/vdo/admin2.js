
let container=document.querySelector("#container")
let trashData=JSON.parse(localStorage.getItem("trasH")) || []
let source=JSON.parse(localStorage.getItem("LSstu")) || []
displaytable()

function displaytable(){
    container.innerHTML=""
  source.forEach(function(el,index){
    let box=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.img;
    let nam=document.createElement("h3");
    nam.textContent=el.name;
    let course=document.createElement("p")
    course.textContent=`course:-${el.course}`
    let unit=document.createElement("p")
    unit.textContent=`unit:-${el.unit}`
    let batch=document.createElement("p")
    batch.textContent=`batch:-${el.batch}`
    let btn=document.createElement("button");
    btn.innerText="Delete"
    btn.addEventListener("click",function(){
        deletefun(index)
    })
    box.append(image,nam,course,unit,batch,btn)
    container.append(box)
  })
}
// function deletefun(el,index){
//     source.splice(index,1)

//     trashData.push(el)
//     localStorage.setItem("trasH",JSON.stringify(trashData))
//     displaytable(source)
//   }
function deletefun(el,index){
    source.splice(index,1)

    trashData.push(el)
        localStorage.setItem("trasH",JSON.stringify(trashData))
    //localStorage.setItem("LSstu",JSON.stringify(trashData))
     
    displaytable(source)
  }
  
  