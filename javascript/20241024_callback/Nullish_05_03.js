let number = 0;
let defaultNumber = 10;

let resultOr = number || defaultNumber;
console.log(resultOr);

let resultNullish = number ?? defaultNumber;
console.log('result by nullish:', resultNullish);

const user = {
  name: 'Rose',
  sing: '아파트',
  address: {},
};

let defaultCity = 'Busan';

let city = user?.address?.city ?? defaultCity;

console.log(city);
