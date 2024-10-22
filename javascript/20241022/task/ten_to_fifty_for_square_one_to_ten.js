//4

//순서: 두번째
const answer=[]

//순서: 첫번째
for (let num=1;num<10;num++) {
  let square=num**2;

  if (answer>=10&&answer<=50)  {
   // console.log(num)
   answer.push(num);
  }
}



//5
let num1=2
let num2=5

for() {

}

//6. 2의 배수 혹은 3의 배수를 제외하고 1~30까지 숫자를 출력하시오.

for(let num=1;num<=30;k++) {
  if(num%2===0) continue;
  if(num%3===0) continue;
  console.log(num)
}

// or 6
for(let num=1;num<=30;k++) {
if(num%2&&num%3) {
  console.log(num)
} 
}


