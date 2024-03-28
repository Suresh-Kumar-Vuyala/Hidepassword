const Img=document.querySelector("img")




Img.addEventListener("click",()=>{
    console.log(Img)
      if(Img.type=="password"){
        Img.type="text"
        Img.scr="/eye-open.png"
      }
      else{
        Img.type="password"
        Img.scr="/eye-close.png"
      }
})