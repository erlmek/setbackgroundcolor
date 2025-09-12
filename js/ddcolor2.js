console.log("jeg er i ddcolor2")

const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]
const colorObjects = [{"name" : "red", "id": "#ff0000"}, {"name" : "green", "id" : "#00ff00"}, {"name" : "yellow", "id" : "#ffff00"}, {"name" : "purple", "id" : "#1f35a9"}]


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

function fillDropdownObj(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    el.value = item.id
    ddColor2.appendChild(el)
}

function addColors2(btn) {
    ddColor2.innerHTML = ""
    colorObjects.forEach(fillDropdownObj)
}

function setBackgroundColor2(e) {
    const color = ddColor2.value
    bdy.style.backgroundColor = color
}


pbFillDropdown2.addEventListener("click", addColors2)
ddColor2.addEventListener("change", setBackgroundColor2)
