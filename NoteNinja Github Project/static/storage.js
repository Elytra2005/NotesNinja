const notes = document.querySelectorAll(".slider-container .note-card");
const formUpload = document.querySelector(".form-upload");



document.addEventListener("DOMContentLoaded", () => {
    saveNotes();
    alert("saved!");
});





function saveNotes() {
    let note = document.querySelectorAll(".note-card");
    let newARR = [note]; 
    let i = 0; 

    newARR.forEach(note => {
        localStorage.setItem("savedNoteContent", note[i++].outerHTML); // this looks good but idk if it will serve the last node or all of the nodes
    });



    const noteWithId = {
        id: Date.now(), 
        title: "Your Saved Note", 
        content: newARR 
    }

    newARR.push(noteWithId);

    localStorage.setItem("newSaved", newARR);
    

}














