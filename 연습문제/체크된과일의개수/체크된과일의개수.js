const apple       = document.querySelector("#apple")
const banana      = document.querySelector("#banana")
const melon       = document.querySelector("#melon")
const applecount  = document.querySelector("#applecount")
const bananacount = document.querySelector("#bananacount")
const meloncount  = document.querySelector("#meloncount")
const reslut      = document.querySelector("#result")
const btn         = document.querySelector("#btn")

btn.addEventListener("click", (e)=>{
  let str="";
  let sum=0;

  if (apple.checked) {
    sum += applecount.value *2000
    str += "사과"+applecount.value+"개 "

  }
  if (banana.checked) {
    sum += bananacount.value *3000
    str += "바나나"+bananacount.value+"개 "
  }
  if (melon.checked) {
    sum += meloncount.value*5000
    str += "멜론"+meloncount.value+"개 "
  }
 reslut.innerText = str +" " + sum+"원"

});




