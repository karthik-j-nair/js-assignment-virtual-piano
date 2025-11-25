
let a1 = new Audio("./29.mp3");
let a2 = new Audio("./30.mp3");
let a3 = new Audio("./31.mp3");
let a4 = new Audio("./32.mp3");
let a5 = new Audio("./33.mp3");
let a6 = new Audio("./34.mp3");
let a7 = new Audio("./35.mp3");
let a8 = new Audio("./36.mp3");
let a9 = new Audio("./37.mp3");
let a10 = new Audio("./38.mp3");
let a11 = new Audio("./39.mp3");
let a12 = new Audio("./40.mp3");
let a13 = new Audio("./63.mp3");

let b1 = new Audio("./A6.mp3");
let b2 = new Audio("./Ab2.mp3");
let b3 = new Audio("./Bb3.mp3");
let b4 = new Audio("./C1.mp3");
let b5 = new Audio("./C5.mp3");
let b6 = new Audio("./D6.mp3");
let b7 = new Audio("./Db2.mp3");
let b8 = new Audio("./Ds7v8.mp3");
let b9 = new Audio("./Eb3.mp3");
let b10 = new Audio("./F4.mp3");
let b11 = new Audio("./Fs7v8.mp3");
let b12 = new Audio("./G5.mp3");
let b13 = new Audio("./Gb1.mp3");







let keysOuter = document.querySelectorAll(".keys-outer");
let keysInner = document.querySelectorAll(".keys-inner");


document.body.addEventListener("keyup", (vals) => {

    // let audio = sounds[vals.code];
    if (vals.key === "a") {
        keysOuter[0].classList.remove("active");
    }
    if (vals.key === "b") {
        keysOuter[1].classList.remove("active");
    }
    if (vals.key === "c") {
        keysOuter[2].classList.remove("active");
    }
    if (vals.key === "d") {
        keysOuter[3].classList.remove("active");
    }
    if (vals.key === "e") {
        keysOuter[4].classList.remove("active");
    }
    if (vals.key === "f") {
        keysOuter[5].classList.remove("active");
    }
    if (vals.key === "g") {
        keysOuter[6].classList.remove("active");
    }
    if (vals.key === "h") {
        keysOuter[7].classList.remove("active");
    }
    if (vals.key === "i") {
        keysOuter[8].classList.remove("active");
    }
    if (vals.key === "j") {
        keysOuter[9].classList.remove("active");
    }
    if (vals.key === "k") {
        keysOuter[10].classList.remove("active");
    }
    if (vals.key === "l") {
        keysOuter[11].classList.remove("active");
    }
    if (vals.key === "m") {
        keysOuter[12].classList.remove("active");
    }
    if (vals.key === "n") {
        keysInner[0].classList.remove("active");
    }
    if (vals.key === "o") {
        keysInner[1].classList.remove("active");
    }
    if (vals.key === "p") {
        keysInner[2].classList.remove("active");
    }
    if (vals.key === "q") {
        keysInner[3].classList.remove("active");
    }
    if (vals.key === "r") {
        keysInner[4].classList.remove("active");
    }
    if (vals.key === "s") {
        keysInner[5].classList.remove("active");
    }
    if (vals.key === "t") {
        keysInner[6].classList.remove("active");
    }
    if (vals.key === "u") {
        keysInner[7].classList.remove("active");
    }
    if (vals.key === "v") {
        keysInner[8].classList.remove("active");
    }
    if (vals.key === "w") {
        keysInner[9].classList.remove("active");
    }
    if (vals.key === "x") {
        keysInner[10].classList.remove("active");
    }
    if (vals.key === "y") {
        keysInner[11].classList.remove("active");
    }
    if (vals.key === "z") {
        keysInner[12].classList.remove("active");
    }

});



document.body.addEventListener("keydown", (vals) => {
    // console.log(vals.key);

    if (vals.key === "a") {
        a1.currentTime = 0;
        a1.play();
        keysOuter[0].classList.add("active");
    }

    if (vals.key === "b") {
        a2.currentTime = 0;
        a2.play();
        keysOuter[1].classList.add("active");
    }
    if (vals.key === "c") {
        a3.currentTime = 0;
        a3.play();
        keysOuter[2].classList.add("active");
    }
    if (vals.key === "d") {
        a4.currentTime = 0;
        a4.play();
        keysOuter[3].classList.add("active");
    }
    if (vals.key === "e") {
        a5.currentTime = 0;
        a5.play();
        keysOuter[4].classList.add("active");
    }
    if (vals.key === "f") {
        a6.currentTime = 0;
        a6.play();
        keysOuter[5].classList.add("active");
    }
    if (vals.key === "g") {
        a7.currentTime = 0;
        a7.play();
        keysOuter[6].classList.add("active");
    }
    if (vals.key === "h") {
        a8.currentTime = 0;
        a8.play();
        keysOuter[7].classList.add("active");
    }
    if (vals.key === "i") {
        a9.currentTime = 0;
        a9.play();
        keysOuter[8].classList.add("active");
    }
    if (vals.key === "j") {
        a10.currentTime = 0;
        a10.play();
        keysOuter[9].classList.add("active");
    }
    if (vals.key === "k") {
        a11.currentTime = 0;
        a11.play();
        keysOuter[10].classList.add("active");
    }
    if (vals.key === "l") {
        a12.currentTime = 0;
        a12.play();
        keysOuter[11].classList.add("active");
    }
    if (vals.key === "m") {
        a13.currentTime = 0;
        a13.play();
        keysOuter[12].classList.add("active");
    }
    if (vals.key === "n") {
        b1.currentTime = 0;
        b1.play();
        keysInner[0].classList.add("active");
    }
    if (vals.key === "o") {
        b2.currentTime = 0;
        b2.play();
        keysInner[1].classList.add("active");
    }
    if (vals.key === "p") {
        b3.currentTime = 0;
        b3.play();
        keysInner[2].classList.add("active");
    }
    if (vals.key === "q") {
        b4.currentTime = 0;
        b4.play();
        keysInner[3].classList.add("active");
    }
    if (vals.key === "r") {
        b5.currentTime = 0;
        b5.play();
        keysInner[4].classList.add("active");
    }
    if (vals.key === "s") {
        b6.currentTime = 0;
        b6.play();
        keysInner[5].classList.add("active");
    }
    if (vals.key === "t") {
        b7.currentTime = 0;
        b7.play();
        keysInner[6].classList.add("active");
    }
    if (vals.key === "u") {
        b8.currentTime = 0;
        b8.play();
        keysInner[7].classList.add("active");
    }
    if (vals.key === "v") {
        b9.currentTime = 0;
        b9.play();
        keysInner[8].classList.add("active");
    }
    if (vals.key === "w") {
        b10.currentTime = 0;
        b10.play();
        keysInner[9].classList.add("active");
    }
    if (vals.key === "x") {
        b11.currentTime = 0;
        b11.play();
        keysInner[10].classList.add("active");
    }
    if (vals.key === "y") {
        b12.currentTime = 0;
        b12.play();
        keysInner[11].classList.add("active");
    }
    if (vals.key === "z") {
        b13.currentTime = 0;
        b13.play();
        keysInner[12].classList.add("active");
    }

});

