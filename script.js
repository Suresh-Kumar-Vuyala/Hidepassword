
var Img=document.querySelector("img")
const Input=document.querySelector("input")





Img.addEventListener("click",()=>{
   // console.log(Img.type)
      if(Input.type=="password"){
        Input.type="text"
        Img.src="/eye-open.png"
      }
      else{
        Input.type="password"
        Img.src="/eye-close.png"
      }
})