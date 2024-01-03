const allUrls1 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
],
allUrls2 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
],
allUrls3 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon_vodka",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sherry",
];

//1.papratsa funkcija (kreipiamasi i viena linka)
function fetchData() {
const startTime = new Date();
fetch(allUrls2[0])
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        const endTime = new Date();
        const duration = endTime.getTime() - startTime.getTime();
        console.log("function - " + duration + "ms");
    });
//GET, POST, UPDATE, PATCH, DELTE
}

//2.asinchronine funkcija (kreipiamasi i viena linka)
async function fetchDataAsync() {
const startTime = new Date(); // 1796521651
const request = await fetch(allUrls2[1]);
const drinks = await request.json();
const endTime = new Date();
const duration = endTime.getTime() - startTime.getTime();
console.log("async - " + duration + "ms");
console.log(drinks);
}
// fetchData();
// fetchDataAsync();



//3. kreipiamasi i kelis url vienu metu

//3.1. kreipiamasi i visus url pasinaudojant ciklu. po kiekvieno kreipimosi i url - palauks kol baigs veikti tas url ir poto pereis prie kito
async function fetchAllDataByIngredient(urls) {
const startTime = new Date();
const array = []; //kad visis gerimai butu sudeti i bendra masyva
for (const url of urls) {
    const promise = await fetch(url);
    const answer = await promise.json();
    array.push(answer);
}
console.log(array);
const endTime = new Date(); 
const duration = endTime.getTime() - startTime.getTime();
console.log("async one by one - " + duration + "ms");
}
//3.2. visi fetchai apdorojami vienu metu (gretesnis)
async function fetchAllDataIngredient(urls) {
const startTime = new Date();
const promises = urls.map((url) =>
    fetch(url).then((response) => response.json()) //requestai issiusti vienu metu ir gauname array su 5 promises (nes map pakeicia visas reiksmes)
);  
const dataFromAllSources = await Promise.all(promises); // daryti auotmaitni palaukima visu fetchu pasinaudojant promise.all metodu. Tokiu budu ganame duomenys is visu source vienu metu. (rezultatas- viename masyve turime gerimus is 5 skirtingu url).
console.log(dataFromAllSources);
const endTime = new Date();
const duration = endTime.getTime() - startTime.getTime();
console.log("async all at the same time - " + duration + "ms");
}
fetchAllDataByIngredient(allUrls3);
fetchAllDataIngredient(allUrls3);




const array1 = [1, 2, 3, 4];
const array2 = [...array1];

console.log(array2);
array.push(5);
console.log(array1);
console.log(array2);

const [pirmas, , trecias] = array1;

console.log(pirmas);
// console.log(antras);
console.log(trecias);

// Masyvo destrukturavimas:
const [, antras, , , penktas] = array1;
console.log(antras);
console.log(penktas);
console.log(array);

//objekto destrukturavimas:
const obj = {
id: 4,
name: "John",
surname: "Doe",
age: 27,
married: false,
};

const { name, surname, married, id } = obj;

console.log(name, surname, married, id);

//MAP: (nekeicia originalaus masyvo)

const array = [1, 2, 3, 4, 5];

const mappedArray = array.map((value) => value / 2);
console.log(mappedArray);
console.log(array);

//FILTER: (plaiek reiksmes turime grazinti rezultata true (filtracija ivyks) arba false (filtracija neivyks))

const filteredArray = array.filter((value) => value > 3);
console.log(filteredArray);

//SOME:(naudojama filtracijai) (filtruoja  jei bet vienas is ju praeina testa) 
//grazina resultata true arba fasle - jei bet vienas praeina testa
//daznai naudojama su objektais 

const isThereAWantedValue = array.some((value) => value.id === 7);
console.log(isThereAWantedValue);