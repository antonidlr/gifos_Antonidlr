// 1. Tomar el valor de entrada

document.querySelector(".button_search").addEventListener('click',function(){

    const userInput = getUserInput();
    console.log(userInput);
    searchGiphy( url, userInput );

});

document.querySelector(".main_bar").addEventListener('keyup',function(e){
    //Cuando se use la tecla enter en la barra de busqueda...
    if(e.which === 13) {
        const userInput = getUserInput();
        console.log(userInput);
        searchGiphy( url, userInput );
    }

});

function getUserInput () {
    const inputValue = document.querySelector('.main_bar').value;
    return inputValue;
};

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

function searchGiphy( url , input) {
    fetchAsync(url,input)
    .then(function(data) {
        const resp = data.data;
        
        
        const test = resp[0].images.fixed_height.url;
        console.log(test);

        dataArray(resp);
        
    })
}

function searchGiphy2( url , input) {
    fetchAsync(url,input)
    .then(function(data) {
        const resp = data.data;
        
        
        const test = resp[0].images.fixed_height.url;
        console.log(test);

        trendingArray(resp);
        
    })
}

//4. Trending y demás

const dataArray = (resp) => {
    const contDiv = document.querySelector(".js-container");
    contDiv.innerHTML = "";
    console.log(resp);
    resp.forEach(function(data){
        const imageUrl = data.images.fixed_height.url;
        contDiv.innerHTML += "<img src='"+ imageUrl +"' />";
    })
};

//      const test = resp[0].images.fixed_height.url;
//       console.log(test);

const trendingArray = (resp) => {
    for (num=0; num<4; num++) {
        const contDiv = document.querySelector(`.gif-${num+1}`);
        contDiv.innerHTML = "";
        const imageUrl = resp[num].images.downsized_large.url;
        contDiv.innerHTML = "<img src='"+ imageUrl +"' />";
        
        const str = resp[num].title;
        const newStr = str.split("GIF").shift();
        const newTag = newStr.replace(/\s/g, '');
        const tag = document.querySelector(`.tag-${num+1}`);
        tag.innerHTML = "#"+newTag;
    }
};

window.addEventListener('load', (event) => {

    searchGiphy2( urlTrending,"" )
    console.log('The page has fully loaded');
});





