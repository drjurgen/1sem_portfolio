window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("sidenVises");

    let cvLink = document.querySelectorAll(".cv_link");
    let webLink = document.querySelectorAll(".web_link");
    let uxLink = document.querySelectorAll(".ux_link");
    let animationLink = document.querySelectorAll(".animation_link");
    let contentLink = document.querySelectorAll(".content_link");

    for (var i = 0; i < cvLink.length; i++) {
        cvLink[i].addEventListener('click', cvShow);
    }

    for (var i = 0; i < webLink.length; i++) {
        webLink[i].addEventListener('click', webShow);
    }

    for (var i = 0; i < uxLink.length; i++) {
        uxLink[i].addEventListener('click', uxShow);
    }

    for (var i = 0; i < animationLink.length; i++) {
        animationLink[i].addEventListener('click', animationShow);
    }

    for (var i = 0; i < contentLink.length; i++) {
        contentLink[i].addEventListener('click', contentShow);
    }
}

function cvShow() {
    console.log("cvShow");

    document.querySelector("#web").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#cv").classList.remove("hide");
    document.title = "PORTFOLIO - 01 CV";
}

function webShow() {
    console.log("webShow");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#web").classList.remove("hide");
    document.title = "PORTFOLIO - 02 WEB";
}

function uxShow() {
    console.log("uxShow");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#web").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#ux").classList.remove("hide");
    document.title = "PORTFOLIO - 03 UX";
}

function animationShow() {
    console.log("animationShow");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#web").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#content").classList.add("hide");

    document.querySelector("#animation").classList.remove("hide");
    document.title = "PORTFOLIO - 04 ANIMATION";
}

function contentShow() {
    console.log("contentShow");

    document.querySelector("#cv").classList.add("hide");
    document.querySelector("#web").classList.add("hide");
    document.querySelector("#ux").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");

    document.querySelector("#content").classList.remove("hide");
    document.title = "PORTFOLIO - 05 CONTENT";
}
