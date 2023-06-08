function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    alert("Image dragged Succesfully");
}

function resetImages() {
    var images = document.querySelectorAll("#div2 img");
    var div1 = document.getElementById("div1");
    for (var i = 0; i < images.length; i++) {
        div1.appendChild(images[i]);
    }
    let x=window.prompt("If You want to reset the container Enter Something");
    alert("You reset the container");
}