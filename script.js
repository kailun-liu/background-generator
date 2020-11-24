let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');

color1.addEventListener('input', ()=>{
	body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
})

color2.addEventListener('input', ()=>{
	body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
})

css.textContent = body.style.background;