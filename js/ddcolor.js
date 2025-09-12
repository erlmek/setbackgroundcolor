console.log("jeg er i ddcolor")

const colArray = ["red", "green", "yellow", "blue", "orange"]

const ddColor = document.getElementById("ddcolor")
console.log(ddColor)

const pbFillDropdown = document.getElementById("pbFillDropdown")
console.log(pbFillDropdown)

let bdy = document.querySelector("body");
console.log(bdy);


function addColors(btn) {
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown)
    console.log(document.all)
}

function fillDropdown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el)
}

function setBackgroundColor(e) {
    const selindex = ddColor.selectedIndex
    const selectedOption = ddColor.options[selindex]
    const color = selectedOption.innerText;
    bdy.style.backgroundColor = color
}

pbFillDropdown.addEventListener("click", addColors)
ddColor.addEventListener("change", setBackgroundColor)

