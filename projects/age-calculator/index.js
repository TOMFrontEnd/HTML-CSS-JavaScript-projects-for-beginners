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
    const yeartext = age.years === 0 ? "" : age.years.toString() + "years";
    const monthtext = age.months === 0 ? "" : age.months.toString() + "months";
    const daytext =
      age.days === 0
        ? " "
        : age.days.toString().concat(age.days > 1
        ? "days"
        : "day");
    // console.log(daytext)
    // in Java script null,0,"", false and undefined all ==.Here use ===, otherwise
    // always choose false, means the second option
    resultEl.innerText = `Your age is ${yeartext}  ${monthtext} ${daytext} old`;
  }
}
// here cancel 0 display doesn'gitt work
// still got a bit issue, is 1 months display. will improve it later on.
// fixed. there are 4 string joining method. 1 use + 2.contact() 3 `{} 4 .join in array

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
    if (dayDiff < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      dayDiff += lastMonth.getDate();
    }
    // dayDiff = today.getDate() + (new Date(today.getFullYear(), today.getMonth(), 0)).getDate() - birth.getDate();
  }

  age.years = yearDiff;
  age.months = monthDiff;
  age.days = dayDiff;
  // console.log(age.days)

  return age;
}

btnEl.addEventListener("click", calculateAge);
