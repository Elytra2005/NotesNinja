let getNotes = document.querySelectorAll(".slider-container .note-card");
let slideIndex = 0;
let resetSlides = document.querySelector(".reset-slide-button");
let noteLength = getNotes.length;

document.addEventListener("DOMContentLoaded", function() {
    showslider();
    console.log(noteLength)
});



// shows the current note slide
function showslider(index) {
    getNotes[slideIndex].classList.add("show-slide");
}

// removes the last note slide and shows the current note slide
function removeLastSlideOne() {
    let currentIndex = slideIndex;
    getNotes[currentIndex - 1].classList.remove("show-slide");

}

function removeLastSlideTwo() {
    let currentIndex = slideIndex;
    getNotes[currentIndex + 1].classList.remove("show-slide");
}


// simply moves to the next slide
function nextSlide() {
  showslider(slideIndex++);
  removeLastSlideOne();
  if(noteLength-1 === slideIndex) {
    console.log("we are at the last slide");
    resetSlides.classList.add("show");
  }
}

function prevSlide() {
  showslider(slideIndex--);
  removeLastSlideTwo();

  if (noteLength-1 !== slideIndex) {
      resetSlides.classList.remove("show");
  }
}

function resetNotes() {
        // Remove show-slide class from all slides
     getNotes.forEach(function(note) {
        note.classList.remove("show-slide");
     })
     showslider();
}








