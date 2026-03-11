const number = "573114747087";

/* PARTICULAS */

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
color:{value:"#7a4bff"},
line_linked:{enable:true,color:"#7a4bff"},
move:{speed:2}
}
})

/* FLIP TARJETAS */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("flipped")

})

})

/* PEDIDOS */

document.querySelectorAll(".order-btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.stopPropagation()

const drink = btn.closest(".card").dataset.drink

const url =
`https://wa.me/${number}?text=${encodeURIComponent("Hola quiero pedir " + drink)}`

window.open(url)

})

})

/* BOTONES WHATSAPP */

document.getElementById("heroWA").onclick=()=>{
window.open(`https://wa.me/${number}`)
}


/* FAQ */

document.querySelectorAll(".faq-item").forEach(item=>{

item.addEventListener("click",()=>{

const p=item.querySelector("p")

p.style.display=p.style.display==="block"?"none":"block"

})

})

/* CURSOR */
// Botón flotante WhatsApp sigue el mouse

const waFollowBtn = document.getElementById("waFollowBtn");
if (waFollowBtn) {
  waFollowBtn.onclick = () => {
    window.open(`https://wa.me/${number}`);
  };
}

const cursor=document.querySelector(".cursor")
const cursor2=document.querySelector(".cursor2")

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

cursor2.style.left=e.clientX+"px"
cursor2.style.top=e.clientY+"px"

})

/* 3D CARDS */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

const centerX=rect.width/2
const centerY=rect.height/2

const rotateX=(y-centerY)/8
const rotateY=(centerX-x)/8

card.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

})

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)"

})

})

/* ANIMACIONES SCROLL */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

document
.querySelectorAll(".card,.info-card,.faq-item,.section-title")
.forEach(el=>observer.observe(el))

/* CINEMATIC SCROLL */

const sections=document.querySelectorAll("section")

const observer2=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

},{threshold:.2})

sections.forEach(section=>{

observer2.observe(section)

})

/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{
	const loader=document.getElementById("loader");
	if(loader){
		loader.style.opacity="0";
		loader.style.display="none";
	}
},1000);

})

/* PREGUNTAS A WHATSAPP */

const faqForm = document.getElementById("faqForm");

if(faqForm){

faqForm.addEventListener("submit",(e)=>{

e.preventDefault();

const pregunta = document.getElementById("faqInput").value.trim();

if(!pregunta) return;

const number = "573114747087";

const url =
`https://wa.me/${number}?text=${encodeURIComponent("Pregunta desde la web ICE BOOM 420: " + pregunta)}`;

window.open(url,"_blank");

faqForm.reset();

});

}
