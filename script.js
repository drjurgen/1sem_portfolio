window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector(".cv_link").addEventListener("click", cvShow);
    document.querySelector(".web_link").addEventListener("click", webShow);
    document.querySelector(".ux_link").addEventListener("click", uxShow);
    document.querySelector(".animation_link").addEventListener("click", animationShow);
    document.querySelector(".content_link").addEventListener("click", contentShow);
}

function cvShow() {
    console.log("cvShow");
    document.title = "PORTFOLIO - 01 CV";

    document.querySelector("#cv").classList.remove("show");

    document.querySelector("#web").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#cv").classList.remove("hide");
    document.querySelector("#cv").classList.add("show");

    let menuDot = document.querySelectorAll(".menu_dot");
    for (i = 0; i < menuDot.length; i++) {
        menuDot[i].classList.remove("cv_color");
        menuDot[i].classList.remove("web_color");
        menuDot[i].classList.remove("ux_color");
        menuDot[i].classList.remove("animation_color");
        menuDot[i].classList.remove("content_color");
        menuDot[i].classList.add("cv_color");
    }
    document.querySelector(".forloeb").classList.remove("cv_color_text");
    document.querySelector(".forloeb").classList.remove("web_color_text");
    document.querySelector(".forloeb").classList.remove("ux_color_text");
    document.querySelector(".forloeb").classList.remove("animation_color_text");
    document.querySelector(".forloeb").classList.remove("content_color_text");
    document.querySelector(".forloeb").classList.add("cv_color_text");

    window.scrollTo(0, 0);
}

function webShow() {
    console.log("webShow");
    document.title = "PORTFOLIO - 02 WEB";

    document.querySelector("#web").classList.remove("show");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#web").classList.remove("hide");
    document.querySelector("#web").classList.add("show");


    let menuDot = document.querySelectorAll(".menu_dot");
    for (i = 0; i < menuDot.length; i++) {
        menuDot[i].classList.remove("cv_color");
        menuDot[i].classList.remove("web_color");
        menuDot[i].classList.remove("ux_color");
        menuDot[i].classList.remove("animation_color");
        menuDot[i].classList.remove("content_color");
        menuDot[i].classList.add("web_color");
    }
    document.querySelector(".forloeb").classList.remove("cv_color_text");
    document.querySelector(".forloeb").classList.remove("web_color_text");
    document.querySelector(".forloeb").classList.remove("ux_color_text");
    document.querySelector(".forloeb").classList.remove("animation_color_text");
    document.querySelector(".forloeb").classList.remove("content_color_text");
    document.querySelector(".forloeb").classList.add("web_color_text");

    window.scrollTo(0, 0);
}

function uxShow() {
    console.log("uxShow");
    document.title = "PORTFOLIO - 03 UX";

    document.querySelector("#ux").classList.remove("show");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#web").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#ux").classList.remove("hide");
    document.querySelector("#ux").classList.add("show");

    let menuDot = document.querySelectorAll(".menu_dot");
    for (i = 0; i < menuDot.length; i++) {
        menuDot[i].classList.remove("cv_color");
        menuDot[i].classList.remove("web_color");
        menuDot[i].classList.remove("ux_color");
        menuDot[i].classList.remove("animation_color");
        menuDot[i].classList.remove("content_color");
        menuDot[i].classList.add("ux_color");
    }
    document.querySelector(".forloeb").classList.remove("cv_color_text");
    document.querySelector(".forloeb").classList.remove("web_color_text");
    document.querySelector(".forloeb").classList.remove("ux_color_text");
    document.querySelector(".forloeb").classList.remove("animation_color_text");
    document.querySelector(".forloeb").classList.remove("content_color_text");
    document.querySelector(".forloeb").classList.add("ux_color_text");

    window.scrollTo(0, 0);
}

function animationShow() {
    console.log("animationShow");
    document.title = "PORTFOLIO - 04 ANIMATION";

    document.querySelector("#animation").classList.remove("show");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#web").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#animation").classList.remove("hide");
    document.querySelector("#animation").classList.add("show");

    let menuDot = document.querySelectorAll(".menu_dot");
    for (i = 0; i < menuDot.length; i++) {
        menuDot[i].classList.remove("cv_color");
        menuDot[i].classList.remove("web_color");
        menuDot[i].classList.remove("ux_color");
        menuDot[i].classList.remove("animation_color");
        menuDot[i].classList.remove("content_color");
        menuDot[i].classList.add("animation_color");
    }
    document.querySelector(".forloeb").classList.remove("cv_color_text");
    document.querySelector(".forloeb").classList.remove("web_color_text");
    document.querySelector(".forloeb").classList.remove("ux_color_text");
    document.querySelector(".forloeb").classList.remove("animation_color_text");
    document.querySelector(".forloeb").classList.remove("content_color_text");
    document.querySelector(".forloeb").classList.add("animation_color_text");

    window.scrollTo(0, 0);
}

function contentShow() {
    console.log("contentShow");
    document.title = "PORTFOLIO - 05 CONTENT";

    document.querySelector("#content").classList.remove("show");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#web").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");

    document.querySelector("#content").classList.remove("hide");
    document.querySelector("#content").classList.add("show");

    let menuDot = document.querySelectorAll(".menu_dot");
    for (i = 0; i < menuDot.length; i++) {
        menuDot[i].classList.remove("cv_color");
        menuDot[i].classList.remove("web_color");
        menuDot[i].classList.remove("ux_color");
        menuDot[i].classList.remove("animation_color");
        menuDot[i].classList.remove("content_color");
        menuDot[i].classList.add("content_color");
    }
    document.querySelector(".forloeb").classList.remove("cv_color_text");
    document.querySelector(".forloeb").classList.remove("web_color_text");
    document.querySelector(".forloeb").classList.remove("ux_color_text");
    document.querySelector(".forloeb").classList.remove("animation_color_text");
    document.querySelector(".forloeb").classList.remove("content_color_text");
    document.querySelector(".forloeb").classList.add("content_color_text");

    window.scrollTo(0, 0);
}

