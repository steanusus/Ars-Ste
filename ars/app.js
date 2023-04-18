var btn = document.querySelector(".btn");
var position;
btn.addEventListener("mouseover", function () {
    position ? (position = 0) : (position = 150);
    btn.style.transform = `translate(${position}px,0px)`; // fixed string interpolation syntax
    btn.style.transition = "all 0.000001s ease"; // fixed property name
});

const btn1 = document.querySelector(".btn1");
btn1.addEventListener('click', () => {
    alert('Я знал!');
});
function lol() {
    window.location.href = "papcArs/index.html";
}
