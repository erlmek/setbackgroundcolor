console.log("jeg er i setbackground")

let inp = document.querySelector(".inpColor")
console.log(inp)

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Tryk mig for set color";

let bdy = document.querySelector("body");
console.log(bdy);

let inpColorValue = document.querySelector(".inpColorValue");

const inpColorPicker = document.getElementById('inpColorPicker');

const pTags = document.getElementsByTagName('p');
console.log(pTags)

let pArray = Array.from(pTags);
console.log(pArray);


function increaseFont(element) {
    console.log("element");
    let fontSize = element.style.fontSize;
    console.log(fontSize)
    element.style.fontSize = "20" + 'px';
}

console.log("hej")
pArray.forEach(increaseFont)
console.log("færdig med font")

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;

    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;

    inpColorValue.value = bdy.style.backgroundColor;
}


pbCol.addEventListener('click', setBackgroundColor)
document.addEventListener('keyup', setBackgroundColor);
inpColorPicker.addEventListener('input', useColorPicker);
