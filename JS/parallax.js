let primeira = document.getElementById("primeira");
let segunda = document.getElementById("segunda");
let texto = document.getElementById("texto");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    primeira.style.top = value * 0.7 + 'px';
    // segunda.style.bottom = value * 0.5 + 'px';
    texto.style.top = value * 1 + 'px';
})