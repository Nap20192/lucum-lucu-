const ApiUrl = 'https://api.jikan.moe/v4/';
const MangaContainer = document.querySelector('.manga-catalog');
let currentPage = 1;

if (localStorage.getItem('tagPressed') === "genre") {
  const genre = localStorage.getItem('genre');
  const searchResult = document.getElementById("SearchResult");
  searchResult.innerHTML = `Search results for genre "${genre}"`

  fetchMangaByGenre(genre);
  currentPage++;
  fetchMangaByGenre(genre);
  currentPage++;
  fetchMangaByGenre(genre);
  currentPage++;
  fetchMangaByGenre(genre);
  currentPage++;
  fetchMangaByGenre(genre);
  currentPage++;
  fetchMangaByGenre(genre);
  currentPage++;
  fetchMangaByGenre(genre);
  currentPage++;
  fetchMangaByGenre(genre);

  window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      currentPage++;
      fetchMangaByGenre(genre);
      currentPage++;
      fetchMangaByGenre(genre);
      currentPage++;
      fetchMangaByGenre(genre);
      currentPage++;
      fetchMangaByGenre(genre);
      currentPage++;
      fetchMangaByGenre(genre);
      currentPage++;
      fetchMangaByGenre(genre);
      currentPage++;
      fetchMangaByGenre(genre);
      currentPage++;
      fetchMangaByGenre(genre);
    }
  });
} else {
  const author = localStorage.getItem('author');
  const searchResult = document.getElementById("SearchResult");
  searchResult.innerHTML = `Search results for author "${author}"`
  fetchMangaByAuthor(author);
  currentPage++;
}







function fetchMangaByGenre(genre) {
  const Url = `${ApiUrl}top/manga?limit=24&page=${currentPage}`;
  let fetchUrl = `${Url}`;
  fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.data.length);
      const list = data.data;
      const mangaList = data.data.filter(manga => {
        return manga.genres.some(g => g.name.toLowerCase() === genre.toLowerCase());
      });

      console.log(mangaList);

      if (!mangaList || mangaList.length === 0) {
        console.error('No manga data available.');
        return;
      }
      mangaList.forEach(manga => {
        const mangaDiv = document.createElement('a');

        const coverDiv = document.createElement('div');
        mangaDiv.addEventListener("click", () => {
          localStorage.setItem('id', manga.mal_id)
        })
        mangaDiv.setAttribute("href", `title_page.html`);
        coverDiv.classList.add('cover');

        const img = document.createElement('img');
        img.src = manga.images.jpg.image_url;
        img.alt = `${manga.title} cover`;

        const title = document.createElement('p');
        title.classList.add('covertxt');
        const fullText = manga.title;

        const visibleCharCount = 30;
        if (fullText.length > visibleCharCount) {
          const visibleText = fullText.slice(0, visibleCharCount);

          title['textContent'] = `
            ${visibleText}...
          `;
        }
        else {
          title['textContent'] = fullText;
        }

        coverDiv.addEventListener("mouseover", function() {
          title['textContent'] = fullText;
        });

        coverDiv.addEventListener("mouseout", function() {
          if (fullText.length > visibleCharCount) {
            const visibleText = fullText.slice(0, visibleCharCount);
  
            title['textContent'] = `
              ${visibleText}...
            `;
          }
        });



        coverDiv.appendChild(img);
        coverDiv.appendChild(title);
        mangaDiv.appendChild(coverDiv);

        MangaContainer.appendChild(mangaDiv);
        
      });
    })
    .catch(error => {
      console.error('Error fetching manga data:', error);
    });
}


function fetchMangaByAuthor(author) {
  const Url = `${ApiUrl}top/manga?limit=24&page=${currentPage}`;
  let fetchUrl = `${Url}`;
  fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.data.length);
      const list = data.data;
      const mangaList = data.data.filter(manga => {
        return manga.authors.some(a => a.name === author);
      });

      console.log(mangaList);

      if (!mangaList || mangaList.length === 0) {
        console.error('No manga data available.');
        return;
      }
      mangaList.forEach(manga => {
        const mangaDiv = document.createElement('a');

        const coverDiv = document.createElement('div');
        mangaDiv.addEventListener("click", () => {
          localStorage.setItem('id', manga.mal_id)
        })
        mangaDiv.setAttribute("href", `title_page.html`);
        coverDiv.classList.add('cover');

        const img = document.createElement('img');
        img.src = manga.images.jpg.image_url;
        img.alt = `${manga.title} cover`;

        const title = document.createElement('p');
        title.classList.add('covertxt');
        const fullText = manga.title;

        const visibleCharCount = 30;
        if (fullText.length > visibleCharCount) {
          const visibleText = fullText.slice(0, visibleCharCount);

          title['textContent'] = `
            ${visibleText}...
          `;
        }
        else {
          title['textContent'] = fullText;
        }

        coverDiv.addEventListener("mouseover", function() {
          title['textContent'] = fullText;
        });

        coverDiv.addEventListener("mouseout", function() {
          if (fullText.length > visibleCharCount) {
            const visibleText = fullText.slice(0, visibleCharCount);
  
            title['textContent'] = `
              ${visibleText}...
            `;
          }
        });



        coverDiv.appendChild(img);
        coverDiv.appendChild(title);
        mangaDiv.appendChild(coverDiv);

        MangaContainer.appendChild(mangaDiv);
        
      });
    })
    .catch(error => {
      console.error('Error fetching manga data:', error);
    });
}




