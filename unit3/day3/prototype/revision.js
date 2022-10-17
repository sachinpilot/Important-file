

// let find=document.querySelector("#impo")
// find.addEventListener("submit",myfun)

// let web20={
//     batch:"web-20",
//     instuctor:"Swanand",
//     Ec:"Vijetha"
// }
// let studentdata=[]
// function myfun(){
//     event.preventDefault()
//     let name=find.name.value
//     let course=find.crs.value

//     let s1=Object.create(web20)
//     s1.name=name;
//     s1.course=course
//     studentdata.push(s1)

//     console.log(studentdata)
// }


let maruticar={
    company:"Maruti",
    wheel:4,
    airabg:true,
    production:"INDIA"
}

let suzukialo=Object.create(maruticar)
suzukialo.color="Red"
suzukialo.max_speed=120;

console.log(suzukialo)