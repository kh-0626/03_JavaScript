// ctrl + / : 한 줄 주석
// ctrl + shift + / : 범위 주석

/* 배열 선언 및 기초 사용법 */
function check1(){

  // 초기화 : 변수에 처음 값을 대입하는 것

  // 배열 선언
  const arr1 = new Array(); // 0칸 배열
  const arr2 = new Array(3); // 3칸 배열(요소 모두 비어있음)
  const arr3 = []; // 0칸 배열
  const arr4 = ['사과', '딸기', '바나나']; // 3칸 배열 + 초기화

  // 배열 확인
  console.log(arr1, arr2, arr3, arr4);

  // 배열 길이 확인
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);

  // 배열의 각 요소 접근 방법 : 배열명[index]
  console.log(`arr4[0] : ${arr4[0]}`);
  console.log(`arr4[1] : ${arr4[1]}`);
  console.log(`arr4[2] : ${arr4[2]}`);

  // 존쟇하지 않는 index번째 요소 접근 -> 오류 X
  console.log(`arr4[3] : ${arr4[3]}`); // undefined

  // 배열 요소에 값 대입 : 배열명[index] = 값;
  arr2[0] =123;
  arr2[1] ="27일은 임시공휴일" ;
  arr2[2] =true;
  // (여러 자료형 저장 가능 확인)

  // * 존재하지 않는 index에 값 대입 -> 가능!
  //  + 배열 길이가 자동으로 증가함

  arr2[3] = "가능?"; // 3번 인덱스에 대입됨(확인 완)

  arr2[6] = "건너뛰기도 가능?";
  // 6번 인덱스 대입됨(확인 완)
  // + 건너뛴 4, 5번 인덱스가 비어있음 상태가 되어있음

  console.log("arr2 : ", arr2);
}

/** 배열 X for문 확인 1 */
function check2(){
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];

  // weeks.length === 7
  // weeks의 시작 인덱스 번호 : 0
  // weeks의 마지막 인덱스 번호 : 6 === weeks.length - 1
  // index는 0 이상의 정수
  // index는 1씩 증가
  for(let i = 0 ; i < weeks.length ; i ++){
    console.log(weeks[i]); // i번재 인덱스 요소 값 출력
  }

  console.log("------------");

  // 일토금목수화월 -> 거꾸로 출력
  for(let i = weeks.length - 1 ; i >= 0 ; i --){
    console.log(weeks[i]);
  }
}

/** 배열 X for문 확인 2 */
function check3(){
  /* prompt로 입력 받은 값을 배열 요소에 순차적으로 초기화 */

  const arr = []; // 0칸 짜리 배열 -> 값 대입 시 자동으로 증가

  for(let i=0 ; i < 4 ; i ++){ // 0, 1, 2, 3 (4바퀴)
    arr[i] = prompt(`${i}번째 요소에 저장할 값 입력`);
  }

  console.log(arr); // 입력 확인
}

/** 배열 X for문 확인 3 */
/*
  prompt를 이용해 숫자 5개를 입력 받아 배열에 저장한 후
  1) 저장된 값 출력
  2) 합계 출력
  3) 평균 출력
  4) 짝수(0,2,4) 번째 index 요소의 합계 출력
  5) 홀수(1,3)   번째 index 요소의 합계 출력
 */
function check4(){
  const arr = new Array(5); // 5칸짜리 배열 생성

  // prompt를 이용해 숫자 5개를 입력 받아 배열에 저장
  for(let i = 0 ; i < arr.length ; i ++){
    arr[i] = Number(prompt(`${i} 번째 요소에 저장할 숫자 입력`));
  }

  // 1) 저장된 값 출력
  console.log(arr); // 확인

  // 2) 합계 출력
  let sum = 0; // 합계 저장용 변수 선언
  for(let i=0 ; i<arr.length ; i++){
    sum += arr[i]; // i번째 인덱스 요소를 얻어와 sum에 누적
  }

  console.log("합계 : ", sum);

  // 3 평균 출력 (arr.length === 5 === 입력된 값의 개수)
  console.log("평균 : ", sum / arr.length);

  // 4) 짝수(0,2,4) 번째 index 요소의 합계 출력
  // 5) 홀수(1,3)   번째 index 요소의 합계 출력

  let oddSum =  0; // 홀수 합계 저장할 변수
  let evenSum = 0; // 짝수 합계 저장할 변수

  for (let i=0 ; i<arr.length ; i++){
    if(i % 2 === 0){ // 짝수 번재 인덱스인 경우
      evenSum += arr[i];
      
    } else { // 홀수 번째 인덱스인 경우}
      oddSum += arr[i];
  }

  }

  console.log("짝수 합 : ", evenSum);
  console.log("홀수 합 : ", oddSum);
}

/** 배열 X for문 확인 4 */
/* 배열 길이를 입력 받아 배열을 생성하고
  생성 배열 각 요소에 0에서 배열 길이 미만의 난수를 저장
*/
function check5(){

  const len = Number(prompt("생성할 배열 길이 입력"));

  // 입력 받은 수 만큼의 칸을 가지는 배열 생성
  const arr = new Array(len);

  for(let i=0 ; i<len ; i++){

    const num = Math.floor( Math.random() * len );

    arr[i] = num; // 난수를 배열에 대입
  }

  console.log("결과 : ", arr);
}


//------------------------------------------------
/* 점심 메뉴 뽑기 */
function selectMenu(){
  const menus = [
    "김밥", "알탕", "순대국", "국수", "버거"
  ];

  // 0이상 메뉴 개수 미만의 난수 1개 생성
  const num = Math.floor( Math.random() * menus.length );

  // id가 "menuResult"인 요소에 내용으로 출력
  document.getElementById("menuResult").innerText = menus[num];
}

//----------------------------------------------------
/** 로또 번호 생성기 */
/*
  배열.includes(값) : () 내 값이 배열에 존재하면 true, 없으면 false
*/
function createLottoNumber(){

  // id가 lotto인 요소 얻어와 변수에 저장
  const lotto = document.getElementById("lotto");

  // 기존에 생성되어있는 번호 삭제("" 빈칸으로 변경)
  lotto.innerHTML = "";

  /**** 배열에 중복되지 않는 난수 6개를 저장 ****/
  const arr = [];

  for(let i=0 ; i<6 ; i++){

    // 1~45 사이 난수 발생
    const num = Math.floor( Math.random() * 45 + 1 );

    // 만약에 난수 num이 이미 배열에 존재하는 경우
    if(arr.includes(num)){
      i--; // index를 뒤로 갔다, 앞으로 오게함 == 제자리 유지
      continue; // 다음 반복으로 넘어감
    }

    // 중복되지 않는 난수인 경우 배열에 추가
    arr[i] = num;
  }

  // 배열 내 숫자 정렬(sort)
  arr.sort( function(a,b){return a-b; } ); // 오름 차순 정렬

  console.log("arr : ", arr);

  // 화면에 로또 번호 순서대로 출력하기
  for(let i=0 ; i<arr.length ; i++){
    lotto.innerHTML += `<div>${arr[i]}</div>`;
  }



}


