//1
for (let k = 3; k <= 40; k += 3) {
  console.log(k);
}

//1

for (let num = 1; num * 3 <= 40; num++) {
  console.log(num);
}

//2

console.log('7 multiple');

// increase steps by 7
for (let k = 7; k <= 100; k += 7) {
  console.log(`${k}`);

}

for(let seven=1;seven<=100;seven++) {
  if(seven%7) {
      //  continue;
      console.log(`7 multiple: ${seven}`)
  }
}


for(let num=1;num<=100;num++) {
  if(!(num%7)) {
    console.log(`7의 배수:${num}`)
  }
}

