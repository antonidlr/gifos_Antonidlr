// 1. Tomar el valor de entrada

document.querySelector(".button_search").addEventListener('click',function(){

    const userInput = getUserInput();
    const val = true;
    searchGiphy( url, userInput, val );
    searchBar();
});

document.querySelector(".main_bar").addEventListener('keyup',function(e){
    //Cuando se use la tecla enter en la barra de busqueda...
    if(e.which === 13) {
        const userInput = getUserInput();
        const val = true;
        searchGiphy( url, userInput, val );
        searchBar();
    }
});

function getUserInput () {
    const inputValue = document.querySelector('.main_bar').value;
    return inputValue;
};

const myArray = ["gorilla", "Los Simpsons", "Unicorns and rainbows", "dog"];

// 2. Hacer el trabajo con la API

const apiKey = 'KdUn87AF0ZlimGbYnmrFRu2QQ8vTxfrZ';
const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`
const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=G`
const url = urlApi;

//const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + apiKey)

async function fetchAsync ( url, input) {
    //await response of fetch call
    const response = await fetch(url + input);
    // only proceed once promise is resolved
    const data = await response.json();
    // only proceed once second promise is resolved
   return data;
};

// 3. Mostrar en pantalla

// Busqueda principal 

function searchGiphy( url , input, val) {
    fetchAsync(url,input)
    .then(function(data) {
        const resp = data.data;
        //const test = resp[0].images.fixed_height.url;
        //console.log(test);
        dataArray(resp);
    })
    setTimeout(function(){ 
        if (val) {
            moveScreen();
        } }, 1500);
    
}

function searchGiphy2( url , input, num) {
    fetchAsync(url,input)
    .then(function(data) {
        const resp = data.data;
        trendingArray(resp, num);
        
    })
}

//4. Trending y demás

const dataArray = (resp) => {
    const contDiv = document.querySelector(".js-container");
    contDiv.innerHTML = "";

    resp.forEach(function(data){
        const imageUrl = data.images.fixed_height.url;
        contDiv.innerHTML += "<img src='"+ imageUrl +"' />";
    })
};

//      const test = resp[0].images.fixed_height.url;
//       console.log(test);



const trendingArray = (resp,num) => {
    
        const contDiv = document.querySelector(`.gif-${num+1}`);
        contDiv.innerHTML = "";

        console.log(resp);
        
        const imageUrl = resp[0].images.downsized_large.url;
        contDiv.innerHTML = "<img src='"+ imageUrl +"' />";

        const str = resp[0].title;
        const newStr = str.split("GIF").shift();
        console.log(newStr);
        const newTag = newStr.replace(/\s/g, '');

        const tag = document.querySelector(`.tag-${num+1}`);
        tag.innerHTML = "#"+newTag;
        
};


// Function to generate random number  
/*
function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  
*/

function randomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random()*step1;
    let result = Math.floor(step2) + 1;
    return result;
}


// Cargar Trending cuando se actulice el website

window.addEventListener('load', (event) => {
    for (let num=0; num<4; num++){
        const valArray = myArray[num];
        console.log(valArray);
        searchGiphy2(url, valArray, num);
    }
    searchGiphy(urlTrending, "", false);

});

// Asignar input a barra de tendencias

const searchBar = () => {
    const input = getUserInput();
    const inputText = document.querySelector(".bar-3");
    inputText.innerHTML = "<p>" + input + " (resultados)</p>";
}

const searchBar2 = (input) => {
    const inputText = document.querySelector(".bar-3");
    inputText.innerHTML = "<p>" + input + " (resultados)</p>";
}

// Mover pantalla a sección de busqueda

const moveScreen = () => {
    document.getElementById('searchshow').scrollIntoView({
        behavior:'smooth'
    }); 
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

const seeMore = (num,val2) => {
    let bValue = document.querySelector(`.butt-${num+1}`);
    bValue.setAttribute("value",val2);
    
}

document.querySelector(".butt-1").addEventListener('click', function(){
    let bVal2 = document.querySelector(`.butt-1`).value;
    searchBar2(bVal2);
    searchGiphy(url, bVal2);
});


