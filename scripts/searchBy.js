

document.addEventListener('DOMContentLoaded', () => {
  // Event delegation for genre buttons
  const content = document.querySelector('.content');

  content.addEventListener('click', (event) => {
    // Check if the clicked element is a genre button
    if (event.target.classList.contains('genre')) {
      const genre = event.target.textContent.trim();
      localStorage.setItem('genre', genre);
      localStorage.setItem('tagPressed', 'genre')
      window.location.href = 'search-result.html';
      console.log("Genre button clicked: " + genre);
    }

    // Check if the clicked element is an author button
    if (event.target.classList.contains('author')) {
      const author = event.target.textContent.trim();
      localStorage.setItem('author', author);
      localStorage.setItem('tagPressed', 'author')
      window.location.href = 'search-result.html';
      console.log("Author button clicked: " + author);
    }
  });
});















