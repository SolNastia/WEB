var btnToTop = document.querySelector(".btn_scroll-up");
window.onscroll = function () {
    var e = document.documentElement.clientHeight,
        n = window.pageYOffset;
    btnToTop.style.display = e < n ? "block" : "none"
}, btnToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});