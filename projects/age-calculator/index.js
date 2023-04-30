const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  // console.log(birthdayValue)
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age.years=0?'':age.years} ${"years"} ${age.months=0?'':age.months} ${"months"}    ${age.days=0?"":age.days} ${"days"} old`;
  }
}
// here cancel 0 display doesn'gitt work

function getAge(birthdayValue) {
  
    const today = new Date();
    const birth = new Date(birthdayValue);
    let age = {};
  
    let yearDiff = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();
    let dayDiff = today.getDate() - birth.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      yearDiff--;
      if (monthDiff < 0) {
        monthDiff += 12;
      }
      if (dayDiff<0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    dayDiff += lastMonth.getDate();}
      // dayDiff = today.getDate() + (new Date(today.getFullYear(), today.getMonth(), 0)).getDate() - birth.getDate();
    }
  
    age.years = yearDiff;
    age.months = monthDiff;
    age.days = dayDiff;
  
    return age;
  }


btnEl.addEventListener("click", calculateAge);