const btns   = document.querySelectorAll(".number"); // 버튼
const result = document.querySelector("#result"); // 결과 
const reset  = document.querySelector("#reset"); // 초기화
const chu = document.querySelector("#chu")
const ctn = document.querySelector(".ctn")


for(let number of btns){
  number.addEventListener("click", (e) => {

    console.log(e.target.innerText);
      result.innerText += e.target.innerText; // 버튼 내용 누적
  });
}

chu.addEventListener("click", () => {
  
  const number = document.createElement("div");
  number.className = "row"
  
  const span1  = document.createElement("span");
  span1.innerText =result.innerText


  const span2  = document.createElement("span");
  span2.className = "remove-row"
  span2.innerHTML = "&times;";
  

  span2.addEventListener("click", e => {

    e.target.parentElement.remove(); // 한 줄(.row) 제거
  });

  const span3 = document.createElement("span");
  span3.innerText = "☆";

  span3.addEventListener("click", e => {

    if(e.target.innerText === "☆"){
      e.target.innerText = "★";
      e.target.style.color = "orange";
      span1.style.color = "red";

    }else{
      e.target.innerText = "☆";
      e.target.style.color = "black";
      span1.style.color = "black";
    }
      
  });

  number.append(span1, span3 , span2);
  console.log("표시",number);
  
  ctn.append(number);
  result.innerText="";
});




reset.addEventListener("click", () => {
  result.innerText=""; // 누적된 번호 모두 삭제
})