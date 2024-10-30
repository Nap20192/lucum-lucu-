const exit = document.getElementById("exit")
exit.addEventListener("click",()=>{
    localStorage.setItem("popupbHidden", "false"); 
})
document.querySelector(".username").textContent=localStorage.getItem("name")
const myList = JSON.parse(localStorage.getItem("mylist")) || [];
window.addEventListener("load",()=>{
myList.forEach(el=> {
    const mangaDiv = document.createElement('a');
    mangaDiv.setAttribute("href", "title_page.html");

    const coverDiv = document.createElement('div');
    coverDiv.classList.add('coverp');

    const img = document.createElement('img');
    img.src = el.image;        
    img.alt = `${el.title} cover`;
    coverDiv.appendChild(img); 
    mangaDiv.appendChild(coverDiv);

    const title = document.createElement('h4');
    title.textContent = el.title;
    coverDiv.appendChild(title); 

    document.querySelector(".cover-grid").appendChild(mangaDiv);
});
})