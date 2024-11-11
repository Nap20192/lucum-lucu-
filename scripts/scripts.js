const bg = document.getElementById("bgChange")
const popupb = document.getElementById("popup")
const popup= document.querySelector(".popup")
const popup2= document.querySelector(".popup2")
const popupx= document.querySelector(".popup_x")
const body = document.querySelector('body')
const nav = document.querySelector('.navbar')
const paragraphs = nav.querySelectorAll('p'); 
const svg =  document.querySelectorAll('path')
const regform = document.getElementById("registrationForm");
const f = document.getElementById("f");
const e = document.getElementById("e");
let as = e.querySelectorAll("path")
const  d = document.querySelector(".popup_d")
const box = document.querySelector(".box")
const formControl = document.querySelector(".form-control")
const profile = document.getElementById("profile")

const s1 = new Audio('./audio/por-fin-apareciste-malnacido-picoro.mp3');
const s2 = new Audio('./audio/heheheha-clash-royale.mp3')
const s3 = new Audio('./audio/vine-boom.mp3')
const s4 = new Audio('./audio/vzryv.mp3')
const clickSound = new Audio('./audio/click.mp3');



let cl = null
function play(a){
    if (cl) { 
        cl.pause(); 
        cl.currentTime=0;
    }
    a.play()
    cl = a

}


    function validator(form){
        function showError(input,text) {
            const parent = input.parentNode
            const err = document.createElement('label')

            err.classList.add('error')
            err.textContent  = text

            const existingError = parent.querySelector('.error');
            if (existingError) {
                existingError.remove(); 
            }
            parent.appendChild(err);
            parent.classList.add('error')
        }
        r=true
        let  inputs = form.querySelectorAll("input")
        for(let i of inputs){
            if(i.value === ""){
                showError(i,`${i.getAttribute("name")} is necessary`)
                r=false
        }else {
            if (i.name === 'name' && i.value.length < 2) {
                showError(i, 'Name must be at least 2 characters long.');
                r = false;
            }
            if (i.name === 'email' && !i.value.includes('@')) {
                showError(i, 'Please enter a valid email address.');
                r = false;
            }
            if (i.name === 'password' && i.value.length < 6) {
                showError(i, 'Password must be at least 6 characters long.');
                r = false;
            }
        }}

    return r
    }
    popupb.addEventListener('click', function() {
        popup.classList.add('active');
        document.body.style.overflow = "hidden"
    });
    popupx.addEventListener('click', function() {
        popup.classList.remove('active');
    });

    window.addEventListener('load', function() {
        if (localStorage.getItem("popupbHidden") === "true") {
            popupb.style.visibility = "hidden";
            profile.style.visibility="visible"
        }

    });

    regform.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validator(regform) === true) {
            let inputs = regform.querySelectorAll("input");
            for (let i of inputs) {
                if (i.name === 'name') {
                    localStorage.setItem("name", i.value);
                }
                if (i.name === 'email') {
                    localStorage.setItem("email", i.value);
                }
                if (i.name === 'password') {
                    localStorage.setItem("password", i.value);
                }
            }
            popup.classList.remove('active');
            popupb.style.visibility = "hidden";
            profile.style.visibility="visible"
            localStorage.setItem("popupbHidden", "true");  // Сохраняем состояние
        } else {
            alert("ne pon");
        }
    });

    d.addEventListener("click",(event)=>{
    event.preventDefault()
    let  inpts = regform.querySelectorAll("input")
    play(s4)
    for(let i of inpts){
        i.value = ""
    }
    })





let light = localStorage.getItem("lightMode") === "true"; 

function updateTheme() {
  if (light) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector(".popup__content").style.backgroundColor = "white";
    as.forEach(d => d.setAttribute("stroke", "black"));
    f.setAttribute("fill", "black");
    paragraphs.forEach(p => p.style.color = "black");
    svg.forEach(element => element.setAttribute("fill", "black"));
    if (formControl) formControl.style.backgroundColor = "white";
    const style = document.createElement("style");
    style.textContent = "a { color: black; } .card { background-color: #f7f7f7; } .card-body { color: black; } .description {background-color: #f7f7f7} table {background-color: rgb(230, 230, 230)} .tag {color: black; background-color: rgb(210, 210, 210); border-color: rgb(210, 210, 210);} .tag:hover {border-color: black;}";
    document.head.appendChild(style);



  } else {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#151515";
    document.querySelector(".popup__content").style.backgroundColor = "#151515";
    as.forEach(d => d.setAttribute("stroke", "white"));
    
    f.setAttribute("fill", "white");
    paragraphs.forEach(p => p.style.color = "white");
    svg.forEach(element => element.setAttribute("fill", "white"));
    if (formControl) formControl.style.backgroundColor = "#151515";
    const style = document.createElement("style");
    style.textContent = "a { color: white; } .card { background-color: #0c0c0c; } .card-body { color: white; } .description {background-color: rgb(40, 40, 40)} table {background-color: #212121} .tag {color: white; background-color: rgb(78, 78, 78); border-color: rgb(78, 78, 78);} .tag:hover {border-color: white;}" ;
    document.head.appendChild(style);

  }
}

updateTheme();

bg.addEventListener('click', () => {
  play(clickSound);
  light = !light; 
  localStorage.setItem("lightMode", light); 
  updateTheme();
});








