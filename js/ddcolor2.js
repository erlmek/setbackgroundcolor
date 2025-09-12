console.log("jeg er i ddcolor2")

const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]

const ddColor2 = document.getElementById("ddColor2")
console.log(ddColor2)

const pbFillDropdown2 = document.getElementById("pbFillDropdown2")
console.log(pbFillDropdown2)

function fillDropdown2(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item[1]
    ddColor2.appendChild(el)
}

function addColors2(btn) {
    ddColor2.innerHTML = ""
    colArray2.forEach(fillDropdown2)
}

function setBackgroundColor2(e) {
    const color = ddColor2.value
    bdy.style.backgroundColor = color
}


pbFillDropdown2.addEventListener("click", addColors2)
ddColor2.addEventListener("change", setBackgroundColor2)
