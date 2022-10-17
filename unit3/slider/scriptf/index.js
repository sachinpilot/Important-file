


 //carousel means movie slide,sliding image

 let carousel_div=document.querySelector("#carousel")

 function carousel(){
     
 //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4831/1374831-h-13b22eedb0fa
     //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218
     //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/383/1350383-h-fc9458afaf3f
 
     let images=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4831/1374831-h-13b22eedb0fa","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/383/1350383-h-fc9458afaf3f",
       "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3476/1363476-h-4b13ab355e0e"]
     // console.log(images)
     //we nedd to display all images one by one
     //1st we need to acess 1st elemnt or images of our array-images[0];
     //last we have to  display our last images -images[2]
     //it will take almost 3 sec to display next images
 
     let imgElem=document.createElement("img")
     imgElem.src=images[0]
     carousel_div.append(imgElem)
     let i=1;
     setInterval(function(){
   if(i===images.length){
       i=0;
 
   }
 
     // console.log(i)
     imgElem.src=images[i]
     carousel_div.append(imgElem)
     i++
     },5000)
 }
 carousel()

 
 var movieData=[

  {
    name:"RAID",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v",
    rating:6,
    release:"25th June"
  },
  {
    name:"ROCKEY",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7391/1367391-v-84d5e12d4c3d",
    rating:4.5,
    release:"06 March"
    },
  {
  name:"CRUSH",
  poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6286/1366286-v-3559f2c55df4",
  rating:6.8,
  release:"3 Sept"

  },
  {
    name:"FROZEN II",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5199/875199-v",
    rating:9.3,
    release:"4 Aug"
  },
  {
   name:"ROAD TO SANGAM",
   poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/5978/1770015978/1770015978-v",
   rating:7.3,
   release:"4 Oct"
  },
  {
    name:"12TH MAN",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6352/1246352-v-a0293f1acbbf",
    rating:7.6,
    release:"5 March"
  },
  {
    name:"PINOCCHIO",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8283/1328283-v-53cc56643d51",
    rating:8.3,
    release:"25th December"
  },
  
  {
    name:"HOUSEFULL 4",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
    rating:7.3,
    release:"25th December"
  },
  {
    name:"TOTAL DHAMAL",
    poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v",
    rating:7.0,
    release:"25th December"
  },
]


let container=document.querySelector("#mbox")
localStorage.setItem("moVLs",JSON.stringify(movieData))
let Production=JSON.parse(localStorage.getItem("moVLs")) || []




appendmovie(Production)
 function appendmovie(data){
  
container.innerHTML=null;

//sort movie from low to high rating
//   let btn1=document.querySelector("#sort-lh")
// btn1.addEventListener("click",sortLtoH)
//   function sortLtoH(){
//     let data=movieData;
//     data=data.sort((a,b) => a.rating-b.rating)
//      appendmovie(data)
       
//      }
    
     // sort from high to low.
    //  let btn2=document.querySelector("#sort-hl")
    //  btn2.addEventListener("click",sortHtoL)
    //  function sortHtoL(){
    //    let data=movieData;
    //    data=data.sort((x,y) =>y.rating-x.rating)
    //    appendmovie(data)
    //  }

  data.forEach(function(el){
     let box=document.createElement("div")
     box.id="box";
     let image=document.createElement("img")
     image.src=el.poster;
     let name=document.createElement("h3")
     name.textContent=el.name
     let rate=document.createElement("p")
     rate.textContent=`Rating:-${el.rating}`
     let release=document.createElement("p")
     release.textContent=`Release:-${el.release}`
     let btn=document.createElement("button")
     btn.textContent="BOOK NOW"
     btn.addEventListener("click",bookmovie)
     function bookmovie(){
      alert("Your Book Confiorm")
      
    }


     box.append(image,name,rate,release,btn)
    
     container.append(box)
  })


 }

 // we can do inside function or out side also in both place where i do this it's right
//sorting 
let btn1=document.querySelector("#sort-lh")
btn1.addEventListener("click",sortLtoH)
  function sortLtoH(){
    let data=movieData;
    data=data.sort((a,b) => a.rating-b.rating)
     appendmovie(data)
       
     }
    

 let btn2=document.querySelector("#sort-hl")
 btn2.addEventListener("click",sortHtoL)
 function sortHtoL(){
   let data=movieData;
   data=data.sort((x,y) =>y.rating-x.rating)
   appendmovie(data)
  
  //or
  //  ans=movieData.sort((x,y) =>y.rating-x.rating)
  //  appendmovie(ans)
 }
