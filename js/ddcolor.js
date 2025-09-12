console.log("jeg er i ddcolor")

const colArray = ["red", "green", "yellow", "blue", "orange"]

const ddColor = document.getElementById("ddcolor")
console.log(ddColor)

const pbFillDropdown = document.getElementById("pbFillDropdown")
console.log(pbFillDropdown)

function addColors(btn) {
    console.log("addcolor")
    colArray.forEach(fillDropdown)
}

function fillDropdown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el)
}


pbFillDropdown.addEventListener("click", addColors)


