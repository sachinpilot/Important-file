

// // let cat={
// //     type:"cat",
// //     leg:4,
// //     tail:true
// // }
// // //If we want to cahnge leg of cat after that we need to go tiger and change its properties manually
// // let tiger={
// //     speed:70,
// //     type:"cat",
// //     leg:4,
// //     tail:true
// // }
// // let cheetah={
// //     speed:90
// // }
// //console.log(tiger)

// //how to share common properties of all coomon things 
// // "object.create"

// let cat={
//     type:"Cat",
//     tail:true,
//     leg:8
// }

// let tiger=Object.create(cat)
// tiger.speed=70;
// //we will find speed at its own properties and cat properties inheritae from cat it will find in prototype
// console.log(tiger)

// let lion=Object.create(cat)
// lion.speed=90;
// console.log("lion",lion)

// //create a student data base of web19 student;

// // let web19={
// //     batch:"JS-201",
// //     instructor:"Aditya",
// //     unit:3,
// //     EC:"Vijetha"
// // }
// // // let student1=Object.create(web19)
// // // student1.name="Rhaghab"
// // // student1.studentcode="fw19-120"
// // // console.log(student1)

// // // let student2=Object.create(web19)
// // // student2.name="Piku"
// // // student2.studentcode="Fw19-055"
// // // console.log(student2)

// // let studentData=[]
// // function studentdatabase(){
// //     let s1=Object.create(web19)
// //     s1.name="Venu"

// //     let s2=Object.create(web19)
// //     s2.name="Chandra"

// //     studentData.push(s1,s2)
// //     console.log("studentData",studentData)
// // }
// // studentdatabase()

// let web19={
//     batch:"JS-201",
//     instructor:"Aditya",
//     unit:3,
//     EC:"Vijetha"
// }

// document.querySelector("form").addEventListener("submit",myfun)
// let data=[]
// function myfun(){
//     event.preventDefault()
//     let obj={
//         name:document.querySelector("#name").value,
//         studentcode:document.querySelector("#scode").value
//     }
//     let studenT=Object.create(web19)
//    studenT.name=obj.name;
//    studenT.studentcode=obj.studentcode
//    data.push(studenT)
//    console.log(studenT)
// }