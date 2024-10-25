var people=`{"person1":{"name":"Laurence","age":"40","location":"Toronto"},
"person2":{"name":"Mike","age":"38","location":"New York"}}`;

var myvalue=document.getElementById('myValue')
var myObj=JSON.parse(people)

myvalue.onchange=function() {
console.log(myObj)
// var newValue=this.newValue;
myObj.person1.name='Harsh Laurence';
sendAJAX=JSON.stringify(myObj);
}
console.log('name changed',obj)