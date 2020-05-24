// 1. Tomar el valor de entrada

document.querySelector(".button_search").addEventListener('click',function(){
    const userInput = getUserInput();
    const val = true;
    const val2 = true;
    searchGiphy( url, userInput, val, val2);
    searchBar();
});

document.querySelector(".main_bar").addEventListener('keyup',function(e){
    //Cuando se use la tecla enter en la barra de busqueda...
    if(e.which === 13) {
        const userInput = getUserInput();
        const val = true;
        const val2 = true;
        searchGiphy( url, userInput, val, val2);
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

const apiKey = 'E8tQ2I3AwBANKnR29Xh48X3QDStottuJ';
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

function searchGiphy( url , input, val, val2) {
    fetchAsync(url,input)
    .then(function(data) {
        const resp = data.data;
        
        dataArray(resp);

        if(val2){
            chashtag(resp);
        }
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
    let num = 0;
    resp.forEach(function(data){
        const imageUrl = data.images.original.url;
        const str = resp[num].slug;
        const newStr2 =str.split("-");
        contDiv.appendChild(containerGifo(imageUrl,newStr2[0],newStr2[1]))
        //contDiv.innerHTML += containerGifo(imageUrl,newStr2[0],newStr2[1]);
        //"<div class=img-box><div class=img-main><img class=img-box2 src='"+ imageUrl +"' /><div class=box-bar><p>#"+newStr2[0] +" #"+newStr2[1] +"</p></div></div></div>";
        num++;
    })
    const div1 = document.querySelectorAll('.box-1');
    const div2 = document.querySelectorAll('.box-2');
    const div3 = document.querySelectorAll('.box-3');
    const img1 = document.querySelectorAll('.img-box2');

    console.log(img1[0]);
    console.log(div3[0]);

    img1[0].addEventListener('mouseover', () => {
        div1[0].classList.add('img-box');
        div3[0].classList.add('img-main');
        div2[0].style.display = "flex";
    });

    img1[0].addEventListener('mouseout', () => {
        div1[0].classList.remove('img-box');
        div3[0].classList.remove('img-main');
        div2[0].style.display = "none";
    });

    img1[1].addEventListener('mouseover', () => {
        div1[1].classList.add('img-box');
        div3[1].classList.add('img-main');
        div2[1].style.display = "flex";
    });

    img1[1].addEventListener('mouseout', () => {
        div1[1].classList.remove('img-box');
        div3[1].classList.remove('img-main');
        div2[1].style.display = "none";
    });
    
    img1[2].addEventListener('mouseover', () => {
        div1[2].classList.add('img-box');
        div3[2].classList.add('img-main');
        div2[2].style.display = "flex";
    });

    img1[2].addEventListener('mouseout', () => {
        div1[2].classList.remove('img-box');
        div3[2].classList.remove('img-main');
        div2[2].style.display = "none";
    });

    img1[3].addEventListener('mouseover', () => {
        div1[3].classList.add('img-box');
        div3[3].classList.add('img-main');
        div2[3].style.display = "flex";
    });

    img1[3].addEventListener('mouseout', () => {
        div1[3].classList.remove('img-box');
        div3[3].classList.remove('img-main');
        div2[3].style.display = "none";
    });

    img1[4].addEventListener('mouseover', () => {
        div1[4].classList.add('img-box');
        div3[4].classList.add('img-main');
        div2[4].style.display = "flex";
    });

    img1[4].addEventListener('mouseout', () => {
        div1[4].classList.remove('img-box');
        div3[4].classList.remove('img-main');
        div2[4].style.display = "none";
    });

    img1[5].addEventListener('mouseover', () => {
        div1[5].classList.add('img-box');
        div3[5].classList.add('img-main');
        div2[5].style.display = "flex";
    });

    img1[5].addEventListener('mouseout', () => {
        div1[5].classList.remove('img-box');
        div3[5].classList.remove('img-main');
        div2[5].style.display = "none";
    });

    img1[6].addEventListener('mouseover', () => {
        div1[6].classList.add('img-box');
        div3[6].classList.add('img-main');
        div2[6].style.display = "flex";
    });

    img1[6].addEventListener('mouseout', () => {
        div1[6].classList.remove('img-box');
        div3[6].classList.remove('img-main');
        div2[6].style.display = "none";
    });

    img1[7].addEventListener('mouseover', () => {
        div1[7].classList.add('img-box');
        div3[7].classList.add('img-main');
        div2[7].style.display = "flex";
    });

    img1[7].addEventListener('mouseout', () => {
        div1[7].classList.remove('img-box');
        div3[7].classList.remove('img-main');
        div2[7].style.display = "none";
    });

    img1[8].addEventListener('mouseover', () => {
        div1[8].classList.add('img-box');
        div3[8].classList.add('img-main');
        div2[8].style.display = "flex";
    });

    img1[8].addEventListener('mouseout', () => {
        div1[8].classList.remove('img-box');
        div3[8].classList.remove('img-main');
        div2[8].style.display = "none";
    });

    img1[9].addEventListener('mouseover', () => {
        div1[9].classList.add('img-box');
        div3[9].classList.add('img-main');
        div2[9].style.display = "flex";
    });

    img1[9].addEventListener('mouseout', () => {
        div1[9].classList.remove('img-box');
        div3[9].classList.remove('img-main');
        div2[9].style.display = "none";
    });

    img1[10].addEventListener('mouseover', () => {
        div1[10].classList.add('img-box');
        div3[10].classList.add('img-main');
        div2[10].style.display = "flex";
    });

    img1[10].addEventListener('mouseout', () => {
        div1[10].classList.remove('img-box');
        div3[10].classList.remove('img-main');
        div2[10].style.display = "none";
    });

    img1[11].addEventListener('mouseover', () => {
        div1[11].classList.add('img-box');
        div3[11].classList.add('img-main');
        div2[11].style.display = "flex";
    });

    img1[11].addEventListener('mouseout', () => {
        div1[11].classList.remove('img-box');
        div3[11].classList.remove('img-main');
        div2[11].style.display = "none";
    });

    img1[12].addEventListener('mouseover', () => {
        div1[12].classList.add('img-box');
        div3[12].classList.add('img-main');
        div2[12].style.display = "flex";
    });

    img1[12].addEventListener('mouseout', () => {
        div1[12].classList.remove('img-box');
        div3[12].classList.remove('img-main');
        div2[12].style.display = "none";
    });

    img1[13].addEventListener('mouseover', () => {
        div1[13].classList.add('img-box');
        div3[13].classList.add('img-main');
        div2[13].style.display = "flex";
    });

    img1[13].addEventListener('mouseout', () => {
        div1[13].classList.remove('img-box');
        div3[13].classList.remove('img-main');
        div2[13].style.display = "none";
    });

    img1[14].addEventListener('mouseover', () => {
        div1[14].classList.add('img-box');
        div3[14].classList.add('img-main');
        div2[14].style.display = "flex";
    });

    img1[14].addEventListener('mouseout', () => {
        div1[14].classList.remove('img-box');
        div3[14].classList.remove('img-main');
        div2[14].style.display = "none";
    });

    img1[15].addEventListener('mouseover', () => {
        div1[15].classList.add('img-box');
        div3[15].classList.add('img-main');
        div2[15].style.display = "flex";
    });

    img1[15].addEventListener('mouseout', () => {
        div1[15].classList.remove('img-box');
        div3[15].classList.remove('img-main');
        div2[15].style.display = "none";
    });

    img1[16].addEventListener('mouseover', () => {
        div1[16].classList.add('img-box');
        div3[16].classList.add('img-main');
        div2[16].style.display = "flex";
    });

    img1[16].addEventListener('mouseout', () => {
        div1[16].classList.remove('img-box');
        div3[16].classList.remove('img-main');
        div2[16].style.display = "none";
    });

    img1[17].addEventListener('mouseover', () => {
        div1[17].classList.add('img-box');
        div3[17].classList.add('img-main');
        div2[17].style.display = "flex";
    });

    img1[17].addEventListener('mouseout', () => {
        div1[17].classList.remove('img-box');
        div3[17].classList.remove('img-main');
        div2[17].style.display = "none";
    });

    img1[18].addEventListener('mouseover', () => {
        div1[18].classList.add('img-box');
        div3[18].classList.add('img-main');
        div2[18].style.display = "flex";
    });

    img1[18].addEventListener('mouseout', () => {
        div1[18].classList.remove('img-box');
        div3[18].classList.remove('img-main');
        div2[18].style.display = "none";
    });

    img1[19].addEventListener('mouseover', () => {
        div1[19].classList.add('img-box');
        div3[19].classList.add('img-main');
        div2[19].style.display = "flex";
    });

    img1[19].addEventListener('mouseout', () => {
        div1[19].classList.remove('img-box');
        div3[19].classList.remove('img-main');
        div2[19].style.display = "none";
    });

    img1[20].addEventListener('mouseover', () => {
        div1[20].classList.add('img-box');
        div3[20].classList.add('img-main');
        div2[20].style.display = "flex";
    });

    img1[20].addEventListener('mouseout', () => {
        div1[20].classList.remove('img-box');
        div3[20].classList.remove('img-main');
        div2[20].style.display = "none";
    });

    img1[21].addEventListener('mouseover', () => {
        div1[21].classList.add('img-box');
        div3[21].classList.add('img-main');
        div2[21].style.display = "flex";
    });

    img1[21].addEventListener('mouseout', () => {
        div1[21].classList.remove('img-box');
        div3[21].classList.remove('img-main');
        div2[21].style.display = "none";
    });

    img1[22].addEventListener('mouseover', () => {
        div1[22].classList.add('img-box');
        div3[22].classList.add('img-main');
        div2[22].style.display = "flex";
    });

    img1[22].addEventListener('mouseout', () => {
        div1[22].classList.remove('img-box');
        div3[22].classList.remove('img-main');
        div2[22].style.display = "none";
    });

    img1[23].addEventListener('mouseover', () => {
        div1[23].classList.add('img-box');
        div3[23].classList.add('img-main');
        div2[23].style.display = "flex";
    });

    img1[23].addEventListener('mouseout', () => {
        div1[23].classList.remove('img-box');
        div3[23].classList.remove('img-main');
        div2[23].style.display = "none";
    });

    img1[24].addEventListener('mouseover', () => {
        div1[24].classList.add('img-box');
        div3[24].classList.add('img-main');
        div2[24].style.display = "flex";
    });

    img1[24].addEventListener('mouseout', () => {
        div1[24].classList.remove('img-box');
        div3[24].classList.remove('img-main');
        div2[24].style.display = "none";
    });
};

// 4.1 Hover Gifs Hastags 

const containerGifo = (img, tag1, tag2) => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const img1 = document.createElement('img');
    const p1 = document.createElement('p');
    div1.classList.add('box-1');
    div2.classList.add('box-3');
    div3.classList.add('box-2', 'box-bar');
    img1.classList.add('img-box2');
    div1.appendChild(div2);
    div2.appendChild(img1);
    div2.appendChild(div3);
    div3.appendChild(p1);

    img1.src = img;
    p1.innerHTML = "#"+tag1 +" #"+tag2 +"";
    return div1;
}


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

//5.1 Buttons Suggestions Hashtags

const createButtonHash = (tag) => {
    const buttonHashtag = document.createElement('button');
    buttonHashtag.classList.add('taggifo');
    buttonHashtag.innerHTML = "#" + tag;
    buttonHashtag.value = tag;
    const hashtagContainer = document.querySelector('.hashtag-container');
    hashtagContainer.appendChild(buttonHashtag);
}

const chashtag = (resp) => {
    const hashtagContainer = document.querySelector('.hashtag-container');
    hashtagContainer.innerHTML = " ";
    for (let num=0; num<8; num++ ) {

        const str = resp[num].slug;
        console.log(str);
        const newStr2 =str.split("-");
        console.log(newStr2);
        const newStr = str.split("-").shift();
        createButtonHash(newStr);
       
    }
    const buttonArray = document.getElementsByClassName('taggifo');

    buttonArray[0].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[0].value, val );
        searchBar2(buttonArray[0].value);
        console.log("aca hola: " + buttonArray[0].value);
    });

    buttonArray[1].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[1].value, val );
        searchBar2(buttonArray[1].value);
        console.log("aca hola: " + buttonArray[1].value);
    });
    
    buttonArray[2].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[2].value, val );
        searchBar2(buttonArray[2].value);
        console.log("aca hola: " + buttonArray[2].value);
    });

    buttonArray[3].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[3].value, val );
        searchBar2(buttonArray[3].value);
        console.log("aca hola: " + buttonArray[3].value);
    });

    buttonArray[4].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[4].value, val );
        searchBar2(buttonArray[4].value);
        console.log("aca hola: " + buttonArray[4].value);
    });
    
    buttonArray[5].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[5].value, val );
        searchBar2(buttonArray[5].value);
        console.log("aca hola: " + buttonArray[5].value);
    });

    buttonArray[6].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[6].value, val );
        searchBar2(buttonArray[6].value);
        console.log("aca hola: " + buttonArray[6].value);
    });

    buttonArray[7].addEventListener('click', () => {
        const val = true;
        searchGiphy( url, buttonArray[7].value, val );
        searchBar2(buttonArray[7].value);
        console.log("aca hola: " + buttonArray[7].value);
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

