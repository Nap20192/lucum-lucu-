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

    const img = document.querySelector(".title__img");
    img.src = manga.images.jpg.image_url;

    const desc = document.querySelector(".description__txt");
    const title = desc.querySelector("#Title");
    const score = desc.querySelector("#Score");
    const rank = desc.querySelector("#Rank");
    const popularity = desc.querySelector("#Popularity")
    const status = desc.querySelector("#Status");
    const desc_txt = desc.querySelector("p");
    const characteristic = desc.querySelector("table");

    title.textContent = manga.title;
    desc_txt.textContent = manga.synopsis;
    status.textContent = manga.status;
    score.innerHTML = `Score: <span class="rank">${manga.score}</span>`;
    rank.innerHTML = `Ranked: <span class="rank">#${manga.rank}</span>`;
    popularity.innerHTML = `Popularity: <span class="rank">#${manga.popularity}</span>`;

    const mangaData = [
      { 
        label: "Authors", 
        key: "authors", 
        process: (value) => value.map(author => author.name) 
      },
      { label: "Chapters", key: "chapters" },
      { label: "Volumes", key: "volumes" },
      { 
        label: "Genres", 
        key: "genres", 
        process: (value) => value.map(genre => genre.name)
      },
      { label: "MAL ID", key: "mal_id" },
      // { label: "Popularity", key: "popularity" },
      // { label: "Rank", key: "rank" },
      // { label: "Score", key: "score" },
      // { label: "Status", key: "status" },
      { label: "English Title", key: "title_english" },
      { label: "Japanese Title", key: "title_japanese" },
      { 
        label: "Synonyms", 
        key: "title_synonyms", 
        process: (value) => value.length > 0 ? value.join(", ") : "No Synonyms" 
      },
      { label: "MAL URL", key: "url", process: (value) => `<a href="${value}" target="_blank">Link</a>` }
    ];

    mangaData.forEach(item => {
      const tableRow = document.createElement("tr");

      const tableHeader = document.createElement("th");
      tableHeader.textContent = item.label;

      const tableData = document.createElement("td");

      let dataValue = manga[item.key];
      
      if (item.process) {
        dataValue = item.process(dataValue);
      }

      tableData.innerHTML = dataValue || "Not available";

      if (item.key === "genres" || item.key === "authors") {
        tableData.innerHTML = '';
        
        if (dataValue && dataValue.length) {
          dataValue.forEach(genre => {
            const tag = document.createElement("button");
            tag.classList.add("tag");
            tag.textContent = genre;
            tableData.appendChild(tag);
            if (item.key === "genres") {
              tag.classList.add("genre")
            } else {
              tag.classList.add("author")
            }
          });
        } else {
          tableData.innerHTML = "Not available";
        }
      }

      


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
const mangaTitle = document.querySelector("#Title").textContent;
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

button.addEventListener("click", () => {
  const exists = myList.some(manga => manga.id === mangaId);
  
  if (!exists) {
    myList.push(newManga);
    localStorage.setItem("mylist", JSON.stringify(myList));
    console.log("Added to list:", newManga);
    
    button.style.backgroundColor = "#778fee";
    button.innerHTML = "Added";
    button.style.fontStyle = "italic";
  } else {
    console.log("Manga is already in the list");
  }
  console.log(localStorage.getItem("mylist"));
});





