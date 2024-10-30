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

<<<<<<< HEAD
const s1 = new Audio('./audio/click.mp3');
const s2 = new Audio('./audio/click.mp3')
const s3 = new Audio('./audio/click.mp3')
const s4 = new Audio('./audio/click.mp3')
=======
const s1 = new Audio('./audio/por-fin-apareciste-malnacido-picoro.mp3');
const s2 = new Audio('./audio/heheheha-clash-royale.mp3')
const s3 = new Audio('./audio/vine-boom.mp3')
const s4 = new Audio('./audio/vzryv.mp3')
<<<<<<< HEAD
const clickSound = new Audio('./audio/click.mp3');


=======
>>>>>>> ee360727a792e4f2e8229b9f557d2357be72f80d
>>>>>>> 55af03ba6c985feadaa135f041f76c1cad13d8db

let cl = null
function play(a){
    if (cl) { 
        cl.pause(); 
<<<<<<< HEAD
        cl.currentTime=-1;
=======
<<<<<<< HEAD
        cl.currentTime =-1;
=======
        cl.currentTime =0;
>>>>>>> ee360727a792e4f2e8229b9f557d2357be72f80d
>>>>>>> 55af03ba6c985feadaa135f041f76c1cad13d8db
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

regform.addEventListener('submit',(event)=>{
    event.preventDefault();
    if( validator(regform) == true){
        popup.classList.remove('active');
        popupb.style.visibility= "hidden"
        popup2.classList.add('active')
    }else{
        alert("ne pon")
    }

})

d.addEventListener("click",(event)=>{
event.preventDefault()
let  inpts = regform.querySelectorAll("input")
<<<<<<< HEAD
for(let i of inpts){
    i.value = ""
}
play(s4)
=======
play(s4)
for(let i of inpts){
    i.value = ""
}
})

let y=130
let x=70
let step = 5
document.addEventListener("keydown",(event)=>{
    switch(event.key){
        case"ArrowUp":
            y-=step
            break
        case"ArrowDown":
            y+=step
            break
        case"ArrowRight":
            x+=step
            break
        case"ArrowLeft":
            x-=step
            break
    }


    box.style.top = `${y}px`;
    box.style.left = `${x}px`;

    if(550<=x && x<=555 && 130<=y && y<=135){
        box.style.border= "3px solid green"
        if(event.key == "Enter"){
            popup2.remove("active")
        }
    }
<<<<<<< HEAD
=======

>>>>>>> ee360727a792e4f2e8229b9f557d2357be72f80d
>>>>>>> 55af03ba6c985feadaa135f041f76c1cad13d8db
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

  } else {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#151515";
    document.querySelector(".popup__content").style.backgroundColor = "#151515";
    as.forEach(d => d.setAttribute("stroke", "white"));
    f.setAttribute("fill", "white");
    paragraphs.forEach(p => p.style.color = "white");
    svg.forEach(element => element.setAttribute("fill", "white"));
    if (formControl) formControl.style.backgroundColor = "#151515";
  }
}

updateTheme();

bg.addEventListener('click', () => {
  play(clickSound);
  light = !light; 
  localStorage.setItem("lightMode", light); 
  updateTheme();
});










