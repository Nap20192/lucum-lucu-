const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');
const searchForm = document.getElementById('searchForm');
const genres = document.querySelectorAll('genre');
const authors = document.querySelectorAll('author');

searchInput.addEventListener('input', async () => {
  const query = searchInput.value.trim();
  if (query.length < 2) {
    suggestionsBox.style.display = 'none';
    return;
  }

  try {
    const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}&limit=5`);
    const data = await response.json();
    const mangaList = data.data;

    if (mangaList.length > 0) {
      suggestionsBox.innerHTML = mangaList.map(manga => `
        <div class="suggestion-item" data-id="${manga.mal_id}">
          ${manga.title}
        </div>
      `).join('');
      suggestionsBox.style.display = 'block';
    } else {
      suggestionsBox.style.display = 'none';
    }
  } catch (error) {
    console.error('Error fetching manga data:', error);
    suggestionsBox.style.display = 'none';
  }
});


suggestionsBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('suggestion-item')) {
    const mangaId = event.target.getAttribute('data-id');
    localStorage.setItem('id', mangaId)
    window.location.href = 'title_page.html';
  }
});


searchForm.addEventListener('submit', (event) => {
  event.preventDefault();


  const firstSuggestion = suggestionsBox.querySelector('.suggestion-item');
  if (firstSuggestion) {
    const mangaId = firstSuggestion.getAttribute('data-id');
    window.location.href = 'title_page.html';
  } else {
    alert('No results found!');
  }
});


