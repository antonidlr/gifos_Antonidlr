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

// Gifs sugeridos

const myArray = ["thinking", "Simpsons Join Us", "Starwars", "Dog"];

// 2. Hacer el trabajo con la API

const apiKey = 'KdUn87AF0ZlimGbYnmrFRu2QQ8vTxfrZ';
const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`
const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=G`
const url = urlApi;


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
        console.log(resp);
        //console.log(resp[0].slug);
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
//Muestra despues de una busqueda los Gif asociados
const dataArray = (resp) => {
    const contDiv = document.querySelector(".js-container");
    contDiv.innerHTML = "";

    resp.forEach(function(data){
        const imageUrl = data.images.fixed_height.url;
        contDiv.innerHTML += "<img src='"+ imageUrl +"' />";
    })
};

//5. Suggestions for searching

let buttonS = document.getElementsByClassName('b-item');
let searchButton = document.querySelector('.button_search');
let imgButton = document.getElementById('search_logo');
const mainInput = document.querySelector(".main_bar");

mainInput.addEventListener('input', updateValueSearch);

function updateValueSearch(e) {
    if (e.target.value.length >= 2) {
        
        try {
            fetchAsync(url, e.target.value)
            .then(function(data) {
                const resp = data.data;
                
                if(resp !== undefined) {
                    linkSuggestion(resp);
                }
            })
        } catch(err) {
           console.log("error" + err);
        }
       
        
        searchButton.classList.add("button-2");
        imgButton.src = "/assets/lupa.svg"
        searchButton.classList.remove("button_search");
    }

    else {
        searchButton.classList.add("button_search");
        searchButton.classList.remove("button-2");
        imgButton.src = "/assets/lupa_inactive.svg"
    }
}

const cleanInput = () => {
    mainInput.value = "";
}

const linkSuggestion = (resp) => {

    try {
        if(resp[0].title !== undefined) {
            buttonS[0].innerHTML = resp[0].title;
        }
        if (resp[1].title !== undefined) {
            buttonS[1].innerHTML = resp[1].title;
        }
        if (resp[2].title !== undefined) {
            buttonS[2].innerHTML = resp[2].title;
        }
    }catch (err) {
        console.log("Hola mi error es: " + err);
        alert("Tu Busqueda no tiene GIFs relacionados");
        cleanInput();
    }
    
    
    
    buttonS[0].addEventListener('click', () => {
        const userInput = buttonS[0].textContent;
        const val = true;
        searchGiphy( url, userInput, val );
        const inputText = document.querySelector(".bar-3");
        inputText.innerHTML = "<p>" + userInput + " (resultados)</p>";
    });

    buttonS[1].addEventListener('click', () => {
        const userInput = buttonS[1].textContent;
        const val = true;
        searchGiphy( url, userInput, val );
        const inputText = document.querySelector(".bar-3");
        inputText.innerHTML = "<p>" + userInput + " (resultados)</p>";
    });

    buttonS[2].addEventListener('click', () => {
        const userInput = buttonS[2].textContent;
        const val = true;
        searchGiphy( url, userInput, val );
        const inputText = document.querySelector(".bar-3");
        inputText.innerHTML = "<p>" + userInput + " (resultados)</p>";
    });
}

// 6. Line Around Div Ver Mas on Mouse Over

let divSeeMore = document.getElementsByClassName('js-gif');
let buttonSeeMore = document.getElementsByClassName('see-more');
buttonSeeMore[0].addEventListener('mouseover', () => {
    divSeeMore[0].classList.add("line-around");
});

buttonSeeMore[0].addEventListener("mouseout", () => {
    divSeeMore[0].classList.remove("line-around");
});

buttonSeeMore[1].addEventListener('mouseover', () => {
    divSeeMore[1].classList.add("line-around");
});

buttonSeeMore[1].addEventListener("mouseout", () => {
    divSeeMore[1].classList.remove("line-around");
});

buttonSeeMore[2].addEventListener('mouseover', () => {
    divSeeMore[2].classList.add("line-around");
});

buttonSeeMore[2].addEventListener("mouseout", () => {
    divSeeMore[2].classList.remove("line-around");
});

buttonSeeMore[3].addEventListener('mouseover', () => {
    divSeeMore[3].classList.add("line-around");
});

buttonSeeMore[3].addEventListener("mouseout", () => {
    divSeeMore[3].classList.remove("line-around");
});


// Muestra los 4 Gif sugeridos
const trendingArray = (resp,num) => {
    
        const contDiv = document.querySelector(`.gif-${num+1}`);
        contDiv.innerHTML = "";
        
        const imageUrl = resp[0].images.downsized_large.url;
        contDiv.innerHTML = "<img src='"+ imageUrl +"' />";

        const str = resp[0].title;
        const newStr = str.split("GIF").shift();
        console.log(newStr);
        const newTag = newStr.replace(/\s/g, '');

        const tag = document.querySelector(`.tag-${num+1}`);
        tag.innerHTML = "#"+newTag;
        
};
// Muestra los Gif despues de click Ver mas...

const setValue = (val) => {

}

// Cargar Trending cuando se actualice el website

window.addEventListener('load', (event) => {
    for (let num=0; num<4; num++){
        const valArray = myArray[num];
        searchGiphy2(url, valArray, num);
        seeMore(num, valArray);
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
    moveScreen();
});

document.querySelector(".butt-2").addEventListener('click', function(){
    let bVal2 = document.querySelector(`.butt-2`).value;
    searchBar2(bVal2);
    searchGiphy(url, bVal2);
    moveScreen();
});

document.querySelector(".butt-3").addEventListener('click', function(){
    let bVal2 = document.querySelector(`.butt-3`).value;
    searchBar2(bVal2);
    searchGiphy(url, bVal2);
    moveScreen();
});


document.querySelector(".butt-4").addEventListener('click', function(){
    let bVal2 = document.querySelector(`.butt-4`).value;
    searchBar2(bVal2);
    searchGiphy(url, bVal2);
    moveScreen();
});



const ddown = () => {

    const dropDown = document.getElementById('themes');
    console.log(dropDown);
    dropDown.style.display = "inline-block";

    dropDown.addEventListener('mouseout', function(){

    });
};


//let timer = setInterval(setTime, 1000);
let seconds = 0;

function setTime() {
    seconds++;
    let hour = Math.floor(seconds/3600)
    let minute = Math.floor((seconds-hour*3600)/60);
    secondsDigit = seconds - (hour*3600 + minute*60);
    console.log("00:" + minute + ":" + secondsDigit);
}

