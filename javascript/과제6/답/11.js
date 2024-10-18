// 변수 number_1 선언 및 값 할당
let number_1 = 6;

// 변수 값 출력
console.log(number_1);

// 조건문: 2와 3의 배수 여부 확인
if (number_1 % 2 === 0 && number_1 % 3 === 0) {
  console.log('6의 배수');
} else if (number_1 % 2 === 0) {
  console.log('2의 배수');
} else if (number_1 % 3 === 0) {
  console.log('3의 배수');
} else {
  console.log('2의 배수도 아니고, 3의 배수도 아니다.');
}
