

let slide_div=document.querySelector("#carousel")

function animatemovie(){
   
    let imgData=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6527/1316527-h-6a400baa5605","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3422/753422-v","https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6544/666544-v","https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9959/1049959-v-4fe375d34b79"]
    let showMovie=document.createElement("img")
    showMovie.src=imgData[0]
    slide_div.append(showMovie)
    let i=1;
    setInterval(function(){
        if(i===imgData.length){
            i=0;
        }
        showMovie.src=imgData[i]
        slide_div.append(showMovie)
        i++
    },6000)
}
animatemovie()

//search buuton

let search_btn=document.querySelector("#srchmovi")
search_btn.addEventListener("click",searchMovie)

async function searchMovie(){
    let lod=document.querySelector("#loader")
    lod.style.display="block"
    //paste personal key which get through email from omdb in place of your key and remove square bracket
    // http://www.omdbapi.com/?apikey=66aef66b&s=avengers
    //let x=fetch(`http://www.omdbapi.com/?apikey= 66aef66b&s=${movie_name}`)

   let movie_name=document.querySelector("#movieName").value;
try{
    let responce=await fetch(`http://www.omdbapi.com/?apikey=555f0124&s=${movie_name}`)
    //   console.log(responce)
    let data=await responce.json()
    console.log(data)
    let output=data.Search;
    appendmovies(output)
    console.log("output",output)
}
catch{
    console.log("ERROR:404")
}
// let real_Data=data.Search

// responce.then(function(sucess){
//    let data=sucess.json()
//     data.then(function(sucess){
//   console.log(sucess)
//   appendmovies(sucess.search)
//     }).catch(function(error){
//         console.log("ERROR:404")
//     })
// }).catch(function(error){
//   console.log("Servern not found:404")
// })
 
// insted of writing such hetic code we can do by async and await.
}

let box=document.querySelector("#movie")
function appendmovies(data){
    let lod=document.querySelector("#loader")
    lod.style.display="none"
    box.innerHTML=null;
  data.forEach(function(el){
      let div=document.createElement("div")
      div.id="hold"
      let imag=document.createElement("img")
      imag.src=el.Poster;
      let mName=document.createElement("h3")
      mName.textContent=el.Title;
      let year=document.createElement("p")
      year.textContent=`Year:${el.Year}`;

      div.append(imag,mName,year)
      box.append(div)
  })
}