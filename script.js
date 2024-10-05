// searchbarIcon script
const searchInput = document.getElementById('search-input');
const searchBox = document.querySelector('.search-box');

searchInput.addEventListener('input', function() {
  if (this.value.length > 0) {
    searchBox.classList.add('has-text');
  } else {
    searchBox.classList.remove('has-text');
  }
});
