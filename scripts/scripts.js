const bg = document.getElementById("bgChange")
const popupb = document.getElementById("popup")
const popup= document.querySelector(".popup")
const popupx= document.querySelector(".popup_x")
const body = document.querySelector('body')
const nav = document.querySelector('.navbar')
const paragraphs = nav.querySelectorAll('p'); 
const svg =  document.querySelectorAll('path')
const regform = document.getElementById("registrationForm");
const f = document.getElementById("f");
const e = document.getElementById("e");
let as = e.querySelectorAll("path")



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

let light = true
let valid = false
const colors = ["white", "red", "green", "blue", "#FF33A6", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "#00FF7F", "#FF4500", "#FFD700", "#8A2BE2", "#4B0082", "#40E0D0", "#D2691E", "#FF69B4"];


bg.addEventListener('click',()=>{
let color = colors[Math.floor(Math.random() * colors.length)];
if(light){
document.body.style.backgroundColor = color;
document.body.style.color = "black";
light = false
as.forEach(d =>{
    d.setAttribute("stroke","black")
})
f.setAttribute("fill","black")
paragraphs.forEach(p => {
    p.style.color = "black"; 
})
    svg.forEach(element => {
            element.setAttribute("fill","black")    
    })

}else{
document.body.style.backgroundColor = color;
document.body.style.color = "white";

as.forEach(d =>{
    d.setAttribute("stroke","white")
})
paragraphs.forEach(p => {
    p.style.color = "white"; 
});
light=true

svg.forEach(element => {
    element.setAttribute("fill","white")
});
}
f.setAttribute("fill","white")

}
)

popupb.addEventListener('click', function() {
    popup.classList.add('active');
});
popupx.addEventListener('click', function() {
    popup.classList.remove('active');
});

regform.addEventListener('submit',(event)=>{
    event.preventDefault();
    if( validator(regform) == true){
        popup.classList.remove('active');
        popupb.style.visibility= "hidden"
    }else{
        alert("ne pon")
    }

})