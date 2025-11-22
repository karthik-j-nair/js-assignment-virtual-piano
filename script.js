const keys = [
    { outerKey: "A", innerKey: "Z" },
    { outerKey: "B", innerKey: "Y" },
    { outerKey: "C", innerKey: "X" },
    { outerKey: "D", innerKey: "W" },
    { outerKey: "E", innerKey: "V" },
    { outerKey: "F", innerKey: "U" },
    { outerKey: "G", innerKey: "T" },
    { outerKey: "H", innerKey: "S" },
    { outerKey: "I", innerKey: "R" },
    { outerKey: "J", innerKey: "Q" },
    { outerKey: "K", innerKey: "P" },
    { outerKey: "L", innerKey: "O" },
    { outerKey: "M", innerKey: "N" }
]

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

const sounds = {
    KeyA: a1,
    KeyB: a2,
    KeyC: a3,
    KeyD: a4,
    KeyE: a5,
    KeyF: a6,
    KeyG: a7,
    KeyH: a8,
    KeyI: a9,
    KeyJ: a10,
    KeyK: a11,
    KeyL: a12,
    KeyM: a13,

    KeyN: b1,
    KeyO: b2,
    KeyP: b3,
    KeyQ: b4,
    KeyR: b5,
    KeyS: b6,
    KeyT: b7,
    KeyU: b8,
    KeyV: b9,
    KeyW: b10,
    KeyX: b11,
    KeyY: b12,
    KeyZ: b13
};





let piano = document.querySelector(".piano-div");

let sum = "";

keys.forEach((objs) => {
    sum += `<div class="keys-outer" id="outer-${objs.outerKey}">
                <div class="keys-inner" id="inner-${objs.innerKey}"><h1>${objs.innerKey}</h1></div>
                <h1>${objs.outerKey}</h1>
            </div>`
});

piano.innerHTML = sum;

document.body.addEventListener("keydown", (vals) => {
    console.log(vals.key);
    
    let audio = sounds[vals.code];
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }

    keys.forEach((objs) => {
        let outer = document.querySelector(`#outer-${objs.outerKey}`);
        outer.style.backgroundColor = "#fff";
    });
});
