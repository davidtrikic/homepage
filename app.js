let searchBtn = document.getElementById('search-btn');
let searchForm = document.getElementById('search-form');

resetInput = () => {
  searchForm.reset();
}

// searchBtn.addEventListener('blur', resetInput);
window.addEventListener('load', resetInput);