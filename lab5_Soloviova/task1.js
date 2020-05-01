class Person 
{
constructor(name,surname,bd,gender) 
{
    this.Name=name; 
    this.Surname=surname;
    this.BirthDay=bd;
    this.Gernder=gender;
} 

  fiscal_code() { 
      return (this.Surname_code()+this.Name_code() + this.BD_code()  ).toUpperCase();
  }

  vowel(letter) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1;
  } 

  get_bd(olddate) 
  {
      let new_bd = olddate.split('/').map(function(val) 
	  { 
          return parseInt(val, 10);
      }) 
      return new_bd;
  } 

  BD_code() {
      const mounth = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
      let data = this.get_bd(this.BirthDay);  
      let year = data[2] %100; 

      if(year<10){ 
          year= '0'+ year;
      }  

      let day= this.Gernder== 'F'? data[0]+ 40: data[0];
	  
      if(day<10){
          day='0'+day;
      }

	let BD_code = year+ mounth[data[1]] + day;
    return BD_code;
  }
 
  Name_code() {
  return this._codeFromNames(this._delSecondCons(this.Name));
  }

  _delSecondCons(string) 
  {
    let consIdx = [];

    for (let i = 0; i < string.length; i++)
	{
      if (!this.vowel(string[i])) {
        consIdx.push(i);
      }
    }

    if (consIdx.length > 3) {
      return string.slice(0, consIdx[1]) + string.slice(consIdx[1]+1, string.length)
    }
    return string;
  }

  Surname_code() {
    return this._codeFromNames(this.Surname);
  }

  _codeFromNames(string) 
  {
    let constonants = '';
    let vowels = '';

    for (let i = 0; i < string.length; i++){
      if (this.vowel(string[i])) {
        vowels+= string[i];
      }
      else {
        constonants+=string[i];
      }
    }

    let code = constonants + vowels;

    if (code.length>=3){
      return code.slice(0, 3);
    }
    return code+"X".repeat(3-code.length);
  }
} 

NewPerson = new Person('Matt',"Edabit","1/1/1900",'M')  
console.log("Task 1");
console.log(NewPerson.fiscal_code())