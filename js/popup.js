var link = document.querySelector(".button-interesting");
var popup = document.querySelector(".interesting-form");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
});

@keyframes modal-show {
0% {
 -webkit-transform:translateY(-100px);
 transform:translateY(-100px)
}
100% {
 -webkit-transform:translateY(0);
 transform:translateY(0)
}
}- это для выезда формы вниз
@keyframes modal-error {
0%,100% {
 -webkit-transform:translateX(0);
 transform:translateX(0)
}
10%,30%,50%,70% {
 -webkit-transform:translateX(10px);
 transform:translateX(10px)
}
20%,40%,60%,80% {
 -webkit-transform:translateX(-10px);
 transform:translateX(-10px)
}
}
