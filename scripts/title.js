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
    const manga = data.data;
    console.log(manga);

    // Set the manga image
    const img = document.querySelector(".title__img");
    img.src = manga.images.jpg.image_url;

    const desc = document.querySelector(".description__txt");
    const title = desc.querySelector("h2");
    const desc_txt = desc.querySelector("p");
    const characteristic = desc.querySelector("table");
    
    title.textContent = manga.title;
    desc_txt.textContent = manga.synopsis;

    const mangaData = [
      { label: "Authors", key: "authors" },
      { label: "Chapters", key: "chapters" },
      { label: "Volumes", key: "volumes" },
      { label: "Genres", key: "genres" },
      { label: "MAL ID", key: "mal_id" },
      { label: "Popularity", key: "popularity" },
      { label: "Rank", key: "rank" },
      { label: "Score", key: "score" },
      { label: "Status", key: "status" },
      { label: "English Title", key: "title_english" },
      { label: "Japanese Title", key: "title_japanese" },
      { label: "Synonyms", key: "title_synonyms" },
      { label: "MAL URL", key: "mal_url" }
    ];


    mangaData.forEach(item => {
      const tableRow = document.createElement("tr");

      const tableHeader = document.createElement("th");
      tableHeader.textContent = item.label;

      const tableData = document.createElement("td");

      let dataValue = manga[item.key];
      if (Array.isArray(dataValue)) {
        dataValue = dataValue.join(", ");
      }

      tableData.textContent = dataValue || "Not available";

      tableRow.appendChild(tableHeader);
      tableRow.appendChild(tableData);

      characteristic.appendChild(tableRow);
    });
  })
  .catch(error => {
    console.error('Error fetching manga data:', error);
  });



let button = document.getElementById("AddToList");

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

if (exists) {
  button.style.backgroundColor = "#778fee";
  button.innerHTML = "Added";
  button.style.fontStyle = "italic";
}


button.addEventListener("click",()=>{
  if (!exists) {
    myList.push(newManga);
    localStorage.setItem("mylist", JSON.stringify(myList));
    console.log("Added to list:", newManga);
  } else {
    console.log("Manga is already in the list");
  }
  console.log(localStorage.getItem("mylist"))
})