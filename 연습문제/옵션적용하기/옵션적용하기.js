const applyBtn = document.querySelector("#applyBtn"); //적용 버튼

const box = document.querySelector("#box"); // 적용 대상

const boxWidth = document.querySelector("#boxWidth"); // 너비
const boxHeight = document.querySelector("#boxHeight"); // 높이
const fs = document.querySelector("#fs"); // 글자 크기

// 처음 HTML 로딩 시 체크된 요소가 없어서 null이 저장된 상태로 고정
// const fw = document.querySelector("[name =fw]:checked");

// 적용 버튼 클릭 시 
applyBtn.addEventListener("click", () => {

  // 너비
  box.style.width = boxWidth.value + "px"

  // 높이
  box.style.height = boxHeight.value + "px"
  
  // 글자 크기
  box.style.fontSize = fs.value + "px"

  // 굵기

  /* 왜 이벤트 핸들러 안에 요소 선택 구문을 작성했을까? 
    -> 클릭되는 시점에 체크된 요소를 얻어오기 위해서!
  */
  const fw = document.querySelector("[name=fw]:checked");
  // name 속성이 fw인 요소중 체크가 되어있는 요소 1개만 선택
  // :checked -> 체크된 요소만 선택(상태 선택자)

  box.style.fontWeight = fw.value;
  
});