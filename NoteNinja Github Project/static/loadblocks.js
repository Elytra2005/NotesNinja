



document.addEventListener("DOMContentLoaded", () => {
    loadBlocks();
    alert("this page loaded!");
});


function loadBlocks() {

    let notes = localStorage.getItem("newSaved");
    let retreiveCount = localStorage.getItem("countTheButton"); // retreives the click ammount which was in the index page

    console.log("the length of this is", retreiveCount.length); // should work idk
    
    let notesContainer = document.querySelector(".contain-old-notes");

    if (notes.length === 0) {
        notesContainer.innerHTML = "<h1> No Notes Avalible </h1>";
    } else {

        for(i = 0; i < retreiveCount.length; i++) {
            let createBlock = document.createElement("div");
            let titleDiv = document.createElement("div");
            let header = document.createElement("h1");
            titleDiv.appendChild(header);
            createBlock.appendChild(titleDiv);
            createBlock.classList.add("card-box"); 
            header.textContent = "Your Note"; 
            header.setAttribute("contenteditable", "true"); 
            createBlock.onclick = () => {
                        window.location.href = `savednotes.html?id=${notes.id}`; // change this
            }

            notesContainer.appendChild(createBlock);
        }
                
    }
}


