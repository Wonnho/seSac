const baseURL = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc';

const path = '/getCtprvnRltmMesureDnsty';
const params = new URLSearchParams({
  serviceKey:
    'Rdg+MePOeenFcarcueSC9eEgwaJTyqGSZF0cIqBouFe2/RV2P/DLK5K1TK6/nfr46FjaMfvHaAgm7tHX4HXRQA==',
  // language: 'ko',
  returnType: 'json',
  numOfRows: 10,
  pageNo: 1,
  sidoName: '서울',
  ver: 1.0,
});
const URL = `${baseURL}${path}?${params}`;

async function getDust() {
  try {
    const response = await fetch(URL); //response just get the URL not object
    const data = await response.json(); // convert xml to json
    
    // console.log(data)
    const items = await data.response.body.items;


    // for (let item of items) {
    //   console.log(item.sidoName);
    // }

    items.forEach((item)=>{
      console.log(item.sidoName);
    })
    // getCtprvnRItmMesureDnsty 시도별 실시간 측정정보 조회

    // console.log('movie title', maxVoteMovie);
  } catch (error) {
    console.error(error);
  }
}

getDust();
