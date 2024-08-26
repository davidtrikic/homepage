const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');
const dateBox = document.getElementById('date');


// Reset search input 
resetInput = () => {
  searchForm.reset();
}

// searchBtn.addEventListener('blur', resetInput); -> optional
window.addEventListener('load', resetInput);

// Sub, 6.04.

//Date function
const date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = date.getMonth() + 1;
dateBox.innerHTML = days[date.getDay()] + ", " + date.getDate() + ". " + month + ".";

