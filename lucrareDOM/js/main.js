window.onload = function(){
	let sumBtn = document.getElementById('sum');
	let changeBtn = document.getElementById('chamge');
	let rezDiv = document.getElementById('rezultat');
	let x = document.getElementById('x');
	let y = document.getElementById('y');
	let container = document.getElementById('container');
	let sum = 0;
	let aux;
	sumBtn.onclick = function(){
		sum = Number(x.value) + Number(y.value);
		rezDiv.innerHTML = sum;
		console.log("hei");
	}
	changeBtn.onclick = function(){
		aux = x.value;
		x.value = y.value;
		y.value = aux;
	}

	container.onmousemove = function(){
		container.classList.add('verde');
	}
	addParagraph();
	createList();
	createCircle();
	createMasiv();
	pressContor();
	afisNumber();
}
function addParagraph(){
	for(let i = 1; i <= 10; i++){
		let newP = document.createElement("p");
		newP.textContent = "Paragraful Nr"+i;
		if(i % 2 === 0)
			newP.classList.add('par');
		else
			newP.classList.add('impar');
		document.getElementById('paragraph').appendChild(newP);

	}
}
function createList(){
	for(var i = 1; i <= 10; i++){
		let newL = document.createElement("li");
		newL.textContent = "Element Nr "+i;
		newL.classList.add('list');
		newL.setAttribute('id','lista')
		document.getElementById('list').appendChild(newL);
	}
	let listItems = document.querySelectorAll('#lista');
	listItems[9].classList.add('last');
	let newBtn = document.createElement("button");
	newBtn.textContent = "click me";
	document.getElementById('btn').appendChild(newBtn);
	newBtn.onclick = function(){
		document.getElementById('list').removeChild(listItems[4]);
	}
	var timerId = setInterval(function() {
	  	let newL = document.createElement("li");
		newL.textContent = "Element Nr "+i++;
		newL.classList.add('list');
		newL.setAttribute('id','lista')
		document.getElementById('list').appendChild(newL);
	}, 10000);
}
function createCircle(){
	for(let i = 1; i <= 10; i++){
		let newC = document.createElement("div");
		newC.classList.add('cerc');
		document.getElementById('circle').appendChild(newC);
	}
}
function createMasiv(){
	var numbers = [0, 5, 6, 8, 3, 7, 9, 1, 4, 2];
	numbers.sort(function(a, b) {
 		return a - b;
	});
	numbers.forEach(function(elm){
		document.getElementById('numbers').innerHTML += elm;
	})
}
function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  return 0;
}
function bodyColor(){
	document.querySelector('body').style.background = 'gray';
}
setTimeout(bodyColor, 5000);
function pressContor(){
	let i = 2;
	let btn = document.getElementById('contor');
	btn.onclick = function(){
		btn.innerHTML = "Contor " + i++;
	}
}
function afisNumber(){
	var numbers = [0, 5, 6, 8, 3, 7, 9, 1, 4, 2];
	let i = 0;
	var timerId = setInterval(function() {
	  	let newL = document.createElement("li");
		newL.textContent = numbers[i];
		document.getElementById('numbers').appendChild(newL);
		i++;
	}, 1000);
	function stop(){
		clearInterval(timerId);
	}
	setTimeout(stop, 10000);

}