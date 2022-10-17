

let display=document.getElementById("display")


// function photogalary(){
//    var photo=["https://cdn.pixabay.com/photo/2022/08/25/15/08/baby-7410521__340.jpg","https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029__340.jpg","https://cdn.pixabay.com/photo/2022/05/15/13/38/woman-7198072__340.jpg","https://cdn.pixabay.com/photo/2022/10/10/06/12/yellow-flower-7510901__340.jpg"]
//    let imgElem=document.createElement("img")
//       imgElem.src=photo[0]
//       display.append(imgElem)
//    i=0;

//    setInterval(function(){
//        if(i===photo.length){
//            i=0
//        }
//        imgElem.src=photo[i]
//        display.append(imgElem)
//        i++

//    },2000)
// }
// photogalary()



// console.log("start")

// setTimeout(function cb(){
//     console.log("Call Back");
// },4000)

// console.log("end")

let person=[1 ,2 ,3 ,4 ,2 ,1 ,6 ,5]
let count=0;
for(let i=0;i<=person.length-1;i++){
  let x=person[i]
  console.log(x)
}
// console.log(count)


function photogalary(){
   var photo=["India is at top position","Dropodi Murmu elected as new President Of India","After 15 year indian team will visit Paitan"]
   let imgElem=document.createElement("p")
      imgElem.textContent=photo[0]
      display.append(imgElem)
   i=0;

   setInterval(function(){
       if(i===photo.length){
           i=0
       }
       imgElem.textContent=photo[i]
       display.append(imgElem)
       i++

   },5000)
}
photogalary()