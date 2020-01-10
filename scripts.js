function todaysDate(){
  let today = new Date();
  let weekday = setWeekday(today.getDay());
  let month   = setMonth(today.getMonth());
  let day     = today.getUTCDate().toString();
  let year    = today.getFullYear().toString();
  let date = (`${weekday}, ${month}, ${day}, ${year}`);
  return date;
}
function setMonth(monthNum) {
  switch(monthNum) {
  case 0:
    return "January";
    break;
  case 1:
    return "February";
    break;
  case 2:
    return "March";
    break;
  case 3:
    return "April";
    break;
  case 4:
    return "May";
    break;
  case 5:
    return "June";
    break;
  case 6:
    return 'July';
    break;
  case 7:
    return 'August';
    break;
  case 8:
    return "September";
    break;
  case 9:
    return "October";
    break;
  case 10:
    return  "November";
    break;
  case 11:
    return 'December';
    break;
  default:
    // code block
  }
}
function setWeekday(dayNum){
  switch (dayNum) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return "Tuesday"
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:

  }
}

let updateToday = todaysDate();
let x = document.querySelector("h2");
x.textContent = updateToday;
