fetch('under_construction.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#under_construction");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})