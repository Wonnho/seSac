const URL='http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'

function filterNetworkError() {
data.filter((el)=>{
  if(el.pm25flage==="통신장애") return false;
  return true;

});
return data
}

async function fetchDustInfo() {
  
  const response=await fetch(URL);
  let data=await response.json();

  data=data.response.body.items;

  //통신장애 데이터를 제거하고 싶다.
  data = filterNetworkError(data);






  let minPm25Value=Infinity
  let minPm25StationName='';
  for(let datum of data) {
    const pm25Value=parseInt(datum.pm25Value);
    if(pm25Value<minPm25Value) {
      minPm25Value=pm25Value;
      minPm25StationName=datum.stationName;

    }
    //덮어씌운다
  }
  // console.log(data);
  console.log(minPm25Value);
  console.log(minPm25StationName);

}
fetchDustInfo()
