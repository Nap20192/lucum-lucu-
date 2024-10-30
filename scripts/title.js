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


document.getElementById("AddToList").addEventListener("click",()=>{
  
  const mangaId = localStorage.getItem('id');
  const mangaTitle = document.querySelector(".description__txt h2").textContent;
  const mangaImage = document.querySelector(".title__img").src;
  const newManga = {
    id: mangaId,
    title: mangaTitle,
    image: mangaImage
  };

  let myList = JSON.parse(localStorage.getItem("mylist")) || [];

  const exists = myList.some(manga => manga.id === mangaId);

  if (!exists) {
    myList.push(newManga);
    localStorage.setItem("mylist", JSON.stringify(myList));
    console.log("Added to list:", newManga);
  } else {
    console.log("Manga is already in the list");
  }
  console.log(localStorage.getItem("mylist"))
})