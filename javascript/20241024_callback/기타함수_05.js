let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr4 = arr;
console.log(`arr4 &{arr4}`); //에레이는 template literal을 먹히지 않네
console.log('arr4', arr);
arr4[1] = 100;
console.log('modified arr4:', arr4);
console.log('check if arr is influenced or not: ', arr);


console.log(1||2)//1
console.log(0||3) //0
console.log(3||2) //3

console.log(1&&2)  //2
console.log(0&&2) //0
console.log(2&&0) //0

const user = {
  name: '홍길동',
  address: {},
};

let defaultCity = '서울';

// 속성 city가 없기 때문에 undefined 반환
// undefined에 대해 기본값 적
let city = user?.address?.city ?? defaultCity;

console.log(city);
