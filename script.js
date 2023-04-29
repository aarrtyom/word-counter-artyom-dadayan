
function randomColor(){
	let mayrbody = document.getElementById("mayrbody")
	let red = Math.random()*255;
	let green = Math.random()*255;
	let blue = Math.random()*255;
	mayrbody.style.backgroundColor="rgb("+red+","+green+","+blue+")"
}

function realTimeRegistr(value){
	let arr = value.split("");
	let arr2 = arr.filter((elem) => {
    return elem !== " " && elem !== ',' && elem !== '.' && elem !== '/' && elem !== ';' && elem !== ':' && elem !== '+' && elem !== '-' && elem !== '=' && elem !== '*';
  });
	console.log(arr2.length)

	let letters=document.getElementById("letters")
	letters.innerHTML = arr2.length


	let words = document.getElementById("words")
	words.innerHTML = value.split(" ").length


	let sentences = document.getElementById("sentences")
	sentences.innerHTML = value.split(". ").length

}
 
