function createDialogbox(){
    let element = document.createElement("div");
    element.setAttribute("id", "taking-title")
    element.setAttribute("style",
        `
        display: block;
        margin: 10px auto;
        width: 210px;
        height: 100px;
        background-color: #80808080;
        border-radius: 20px;
        padding: 20px;
        position: relative;
        top: -40vh;
        `);

    element.innerHTML = `
    <input id="title-name" style="padding: 5px; font-size: 15px;">
    <div>
        <button id="cancel" style="background-color: blue; color: white; border: none; margin: 10px; padding: 10px; border-radius: 10px;" onclick="removeElement('taking-title')"> Cancel </button>
        <button id="done" style="background-color: blue; color: white; border: none; margin: 10px; padding: 10px; border-radius: 10px;" onclick="saveList()"> Done </button>
    </div>
    `;
    document.querySelector(".parent").appendChild(element);
}

function saveContent(){
    createDialogbox();
}

function removeElement(identity){
    const box = document.getElementById(identity);
    box.remove();
}
function saveList(){
    let filename = document.getElementById("title-name").value;
    let content = document.querySelector("#content").value;
    localStorage.setItem(filename, content);
    
    removeElement("taking-title");
}

function openList(){
    let findTitle = document.querySelector("#title-name").value;
    let data;
    if (findTitle in localStorage){
        data = localStorage.getItem(findTitle);
        document.querySelector("#content").value = data;
    } else {
        alert("List related corresponding title is not here.");
    }
    console.log(typeof data);
    removeElement("taking-title");
}

function openContent(){
    createDialogbox();
    // changing placeholder value
    document.getElementById("title-name").setAttribute("placeholder", "Enter title to open: ");
    // changing confirmation value 
    document.getElementById("done").innerText = "Open";
    // adding function to confirmation btn 
    document.getElementById("done").setAttribute("onclick", "openList()")
}
