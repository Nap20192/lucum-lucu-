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


const s1 = new Audio('./audio/por-fin-apareciste-malnacido-picoro.mp3');
const s2 = new Audio('./audio/heheheha-clash-royale.mp3')
const s3 = new Audio('./audio/vine-boom.mp3')
const s4 = new Audio('./audio/vzryv.mp3')

let cl = null
function play(a){
    if (cl) { 
        cl.pause(); 
        cl.currentTime =0;
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

})





let light = true
let valid = false

bg.addEventListener('click',()=>{
if(light){
play(s1)
document.body.style.backgroundColor = "white";
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
play(s2)
document.body.style.backgroundColor = "black";
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










