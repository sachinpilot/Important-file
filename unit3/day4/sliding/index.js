

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
