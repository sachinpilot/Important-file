// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]' 
// let btn=document.getElementById("srchbtn")
// btn.addEventListener("click",findData)

//fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${API_KEY}`)
//parameter
//q=value means what you want from search box
// your api key -paste api key 
//Results=25 number of result you wants



const findMovie=async() =>{
 try{
let API_KEY='AIzaSyAoH54XEgYorBXCQAqNquB7EoOrSYY60ys';
search_term=document.getElementById('srch').value;
let responce=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_term}&key=${API_KEY}`)
 let data=await responce.json()
 let actual_data=data.items;
 appedVideo(actual_data)
console.log(actual_data)
 }
 catch(err){
   console.log("404:file not found")
 }
}
let container=document.getElementById('display')
const appedVideo=(data)=>{
    container.innerHTML=null;
   data.forEach(({snippet})=>{
  let div=document.createElement("div")
  div.id="box"
  let v_thumnail=document.createElement("img")
  v_thumnail.src=snippet.thumbnails.high.url;
  let title=document.createElement('p')
  title.innerText=snippet.title;
  let channel_name=document.createElement("h3")
  channel_name.innerText=snippet.channelTitle;

  div.append(v_thumnail,title,channel_name)
container.append(div)
   })
}