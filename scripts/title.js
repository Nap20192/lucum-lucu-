const apiUrl = 'https://api.jikan.moe/v4/';
const url = `${apiUrl}manga/${localStorage.getItem('id')}`; 
fetch(url)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    manga = data.data
    console.log(manga)
    const img = document.querySelector(".title__img")
    img.src = manga.images.jpg.image_url;

    const desc = document.querySelector(".description__txt")
    const title = desc.querySelector("h2")
    const desc_txt = desc.querySelector("p")
    title.textContent = manga.title
    desc_txt.textContent = manga.synopsis


})