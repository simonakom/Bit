let zmones = ["Petras", "Rasa", "Jonas", "Justinas", "Jurate", "Kastytis"];
let i = 0;

while (true) {
	//begalinis ciklas
	console.log(i);
	if (i === 100) break; //break - nutraukia ciklą
	i++;
}

//do while mes naudojame kai norime pirma atlikti operacija, o tik po to patikrinimą
// do{
// i++
// }
// while(i < 10)

let n = 100;
let simbolis = `<black>*</black>`,
	redSimbolis = `<red>*</red>`;
for (let indeksas = 0; indeksas < n; indeksas++) {
	let eilute = "" + redSimbolis + redSimbolis + simbolis;
	eilute += "<br>";
	document.write(eilute);
}




// // Uppercase names

// let people = [`ema`, `ona`, `mia`];
// let x = 0;
// console.log(people)

// while (x<3) {
// 	console.log(people[x].toUpperCase());
// 	x++;
// }


// // // Uppercase names (+lenght)

// let ppl = ["Petras", "Rasa", "Jonas", "Justinas", "Jurate", "Kastytis"];
// let b = 0;
// console.log(ppl)

// while (b<ppl.length) {
// 	console.log(ppl[b].toUpperCase());
// 	b++;
// }


// // kas 4 skaiciai iki 100

// for (let s=0; s<1000; s+=4){
// 	console.log (s)
// }


// // lyginiai skaicia iki 10

// for (let h=0; h<10; h++){
// 	if (h%2===0){
// 		console.log(h)
// 	}
// }

