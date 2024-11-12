const exit = document.getElementById("exit");
const user = JSON.parse(localStorage.getItem("currentUser"));
const myList = JSON.parse(localStorage.getItem("currentUser")).list || [];
const coverGrid = document.querySelector(".cover-grid");

exit.addEventListener("click", () => {
  localStorage.setItem("popupbHidden", "false"); 
});

document.querySelector(".username").textContent = user.name;

function renderList(list) {
  coverGrid.innerHTML = '';
  list.forEach(el => {
    const mangaDiv = document.createElement('a');
    mangaDiv.setAttribute("href", "title_page.html");

    const coverDiv = document.createElement('div');
    coverDiv.classList.add('coverp');

    const img = document.createElement('img');
    img.src = el.image;        
    img.alt = `${el.title} cover`;
    coverDiv.appendChild(img); 
    mangaDiv.appendChild(coverDiv);

    const txt = document.createElement('div');
    txt.classList.add("cover_txt");

    const title = document.createElement('h8');
    title.textContent = el.title;

    const score = document.createElement('h10');
    score.textContent = el.score;
    score.style.display = "block";

    txt.appendChild(title); 
    txt.appendChild(score);
    coverDiv.appendChild(txt);

    coverGrid.appendChild(mangaDiv);
  });
}

window.addEventListener("load", () => {
    const sortedList = myList.slice().reverse();
    renderList(sortedList);
});

document.getElementById("a-z").addEventListener("click", () => {
    const sortedList = [...myList].sort((a, b) => a.title.localeCompare(b.title));
    renderList(sortedList);
  });
  document.getElementById("score").addEventListener("click", () => {
    const sortedList = [...myList].sort((a, b) => a.title.localeCompare(b.score));
    renderList(sortedList);
  });
  document.getElementById("rank").addEventListener("click", () => {
    const sortedList = [...myList].sort((a, b) => a.title.localeCompare(b.rank));
    renderList(sortedList);
  });

document.getElementById("date").addEventListener("click", () => {
  const sortedList = myList.slice().reverse();
  renderList(sortedList);
});

function clearActive() {
    document.querySelectorAll(".profile-tabs li").forEach((li) => {
      li.classList.remove("active-tab");
    });
  }
  
  document.querySelectorAll(".profile-tabs li").forEach((li) => {
    li.addEventListener("click", function() {
      clearActive();
      li.classList.add("active-tab");
    });
  });