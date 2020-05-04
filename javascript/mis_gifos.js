const mainWrapper = document.getElementById('main-wrapper');

document.getElementById('link-gifo').addEventListener('click', ()  => {
    mainWrapper.innerHTML = "";
    const div = document.createElement('div');
    const divGifos = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add("bar-2");
    divGifos.classList.add("search-gif2");
    divGifos.setAttribute('id',"mis-guifos");
    p.innerHTML = "Mis Guifos";
    div.appendChild(p);
    mainWrapper.appendChild(div);
    mainWrapper.appendChild(divGifos);
    console.log(mainWrapper);

    const myGifoContainer = document.getElementById('mis-guifos');
    myGifoContainer.innerHTML = localStorage.getItem("misgifos");

});



