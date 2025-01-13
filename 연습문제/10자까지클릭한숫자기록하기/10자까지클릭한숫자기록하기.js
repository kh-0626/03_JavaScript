const btns = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset")
// id 는 샵, class는 . 

for(let number of btns){
  number.addEventListener("click", (e) => {

    console.log(e.target.innerText);
    
      if(result.innerText.length < 10) {
        result.innerText += e.target.innerText;
      }
        else{alert("10자 까지 클릭한 숫자 기록하기")}
        
   
  })


}

reset.addEventListener("click", () => {
  result.innerText=""
})