const apiUrl = 'https://api.jikan.moe/v4/';
const url = `${apiUrl}top/manga?`;

let currentPage = 1;
let currentFilter = localStorage.getItem("currentFilter") || "bypopularity";

const mangaContainer = document.querySelector('.manga-catalog');

function fetchManga(filter, page, limit = 24) {
  let fetchUrl = `${url}filter=${filter}&page=${page}&limit=${limit}`;
  fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const mangaList = data.data;

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

        mangaContainer.appendChild(mangaDiv);
        
      });
    })
    .catch(error => {
      console.error('Error fetching manga data:', error);
    });
}

function clearActive() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.remove("active-tab");
  });
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", function() {
    mangaContainer.innerHTML = '';
    currentPage = 1;
    clearActive();
    button.classList.add("active-tab");
    currentFilter = button.id;
    localStorage.setItem("currentFilter", currentFilter);
    fetchManga(currentFilter === "rating" ? "" : currentFilter, currentPage);
  });
});


if (mangaContainer.classList.contains('index-catalog')) {
  fetchManga(currentFilter === "rating" ? "" : currentFilter, 1, 6);
  document.getElementById(currentFilter).classList.add("active-tab");
} else {
  window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      currentPage++;
      fetchManga(currentFilter === "rating" ? "" : currentFilter, currentPage);
    }
  });
  document.getElementById(currentFilter).classList.add("active-tab");
  fetchManga(currentFilter === "rating" ? "" : currentFilter, currentPage);
}




