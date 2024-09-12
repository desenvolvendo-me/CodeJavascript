export default class Person {
  constructor(){
    var birth = null;
  }
  
  birthday() {
    var arrayDate = this.birth.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    var dateBirth = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);
    var dateCurrent = new Date();
    if ((dateBirth.getDay() == dateCurrent.getDay()) && (dateBirth.getMonth() == dateCurrent.getMonth())){
      console.log("Yes");  
    }else{
      console.log("No");
    }
  }
}