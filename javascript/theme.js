// DOM Theme

const day = document.querySelector('.theme-1');
const night = document.querySelector('.theme-2');
const img = document.getElementById('logo');
const img2 = document.getElementById('search_logo');
const body = document.body;

// Apply when reload 

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

day.addEventListener("click", () => {
    body.classList.replace('theme_night', 'theme_day');
    img.src = "/assets/gifOF_logo.png";
    img2.src = "/assets/lupa_inactive.svg";
    localStorage.setItem('theme', 'theme_day');

});

night.addEventListener("click", () => {
    body.classList.replace('theme_day', 'theme_night');
    img.src = "/assets/gifOF_logo_dark.png";
    img2.src = "/assets/Combined Shape.svg";
    localStorage.setItem('theme', 'theme_night');
    
});


