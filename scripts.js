if(window.innerWidth < 480){
  // alert("mobile!");
  let blogButton = document.querySelector(".blog-button");
  let archiveButton = document.querySelector(".archive-button");
  let bioButton = document.querySelector(".bio-button");

  let blogContainer = document.querySelector(".blog-container");
  let archiveContainer = document.querySelector(".archive-container");
  let bioContainer = document.querySelector(".bio-container");

  blogButton.addEventListener("click touchstart",toggleView);
  archiveButton.addEventListener("click touchstart",toggleView);
  bioButton.addEventListener("click touchstart",toggleView);

  function toggleView(selectedButton){
    console.log(selectedButton.target.className);
    let selectedView = selectedButton.target.className;

    if(selectedView === "bio-button"){
      console.log("slected bio section");
      archiveContainer.style.display = "none";
      blogContainer.style.display = "none";
      bioContainer.style.display = "block";

    } else if(selectedView === "archive-button") {
      archiveContainer.style.display = "block";
      blogContainer.style.display = "none";
      bioContainer.style.display = "none";

    } else if(selectedView === "blog-button") {
      archiveContainer.style.display = "none";
      blogContainer.style.display = "block";
      bioContainer.style.display = "none";
    }
  }
}

// if(window.innerWidth < 480){
//   let blogContainer = document.querySelector(".blog-container");
//   let archiveContainer = document.querySelector(".archive-container");
//   let bioContainer = document.querySelector(".bio-container");
//   archiveContainer.style.display = "block";
//   blogContainer.style.display = "block";
//   bioContainer.style.display = "block";
// }

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
let date = document.querySelector("h2");
date.textContent = updateToday;
