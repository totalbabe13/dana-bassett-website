
if(window.innerWidth < 480){
  console.log("mobile!");
  let blogButton = document.querySelector(".blog-button");
  let archiveButton = document.querySelector(".archive-button");
  let bioButton = document.querySelector(".bio-button");

  let blogContainer = document.querySelector(".blog-container");
  let archiveContainer = document.querySelector(".archive-container");
  let bioContainer = document.querySelector(".bio-container");

  blogButton.addEventListener("click",toggleView);
  archiveButton.addEventListener("click",toggleView);
  bioButton.addEventListener("click",toggleView);

  blogContainer.className = "blog-container hide";
  archiveContainer.className = "archive-container viewable";
  bioContainer.className = "bio-container hide";

  function toggleView(selectedButton){
    let blogContainer = document.querySelector(".blog-container");
    let archiveContainer = document.querySelector(".archive-container");
    let bioContainer = document.querySelector(".bio-container");
    // alert("im touched");
    console.log(selectedButton.target.className);
    let selectedView = selectedButton.target.className;

    if(selectedView === "bio-button"){
      console.log("selected bio section");
      blogContainer.className = "blog-container hide";
      archiveContainer.className = "archive-container hide";
      bioContainer.className = "bio-container viewable";

    } else if(selectedView === "archive-button") {
      blogContainer.className = "blog-container hide";
      archiveContainer.className = "archive-container viewable";
      bioContainer.className = "bio-container hide";

    } else if(selectedView === "blog-button") {
      blogContainer.className = "blog-container viewable";
      archiveContainer.className = "archive-container hide";
      bioContainer.className = "bio-container hide";
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
