const btns = document.querySelectorAll(".number"); // 버튼
const result = document.querySelector("#result"); // 결과
const reset = document.querySelector("#reset"); // 초기화
// id 는 샵, class는 . 

for(let number of btns){
  number.addEventListener("click", (e) => {

    console.log(e.target.innerText);
    
      if(result.innerText.length < 10) {
        result.innerText += e.target.innerText; // 버튼 내용 누적
      }
        else{alert("10자 까지 클릭한 숫자 기록하기")}
        
   
  });


}

reset.addEventListener("click", () => {
  result.innerText=""; // 누적된 번호 모두 삭제
})