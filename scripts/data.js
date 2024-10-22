const apiUrl = 'https://api.jikan.moe/v4/';
const url = `${apiUrl}top/manga?`; 

let currentPage = 1;
let currentFilter = "bypopularity"


const mangaContainer = document.querySelector('.row.manga-catalog');

function fetchManga(filter, page, limit=24) {
  var fetchUrl = `${url}filter=${filter}&page=${page}&limit=${limit}`;
  fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); 

      const mangaList = data.data;

      if (!mangaList || mangaList.length === 0) {
        console.error('No manga data available.');
        return;
      }
      mangaList.forEach(manga => {


        const mangaDiv = document.createElement('div');
        mangaDiv.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'mb-4');

        const coverDiv = document.createElement('a');
        coverDiv.addEventListener("click",()=>{
          localStorage.setItem('id',manga.mal_id)
        })
        coverDiv.setAttribute("href",`title_page.html`)
        coverDiv.classList.add('cover');

        const img = document.createElement('img');
        img.src = manga.images.jpg.image_url;
        img.classList.add('img-fluid');
        img.alt = `${manga.title} cover`;

        const title = document.createElement('p');
        title.classList.add('text-center');
        title.textContent = manga.title;

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
    fetchManga(currentFilter, currentPage);
  });
});


if (mangaContainer.classList.contains('index-catalog')) {
  fetchManga("bypopularity", 1, 6);
}
else {
  window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      currentPage++;
      fetchManga("bypopularity", currentPage);
    }
  });
  fetchManga("bypopularity", currentPage);
}

