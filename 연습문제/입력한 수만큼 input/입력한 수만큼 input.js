const check1    = document.querySelector("#check1")
const check2    = document.querySelector("#check2")
const result    = document.querySelector("#result")
const container = document.querySelector("#container")
const count     = document.querySelector("#count")
/* 생성 하기 */

check1.addEventListener("click", () => {

  container.innerHTML=""
  for(let i = 0; i < count.value; i++) {
    const input = document.createElement("input");
    input.className = "input-number";
    input.type = "number";

    container.append(input);
  }
  
});


/* 계산 하기 */
check2.addEventListener("click", () => {

  const inputs = document.querySelectorAll(".input-number");

  let sum = 0;

  for(let input of inputs){
    sum += Number(input.value);
  }

  result.innerText=sum

});
