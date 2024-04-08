// Your code here
const dodger = document.getElementById("dodger");


/* move dodger left */
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left -1}px`;
    }
}

/* Event Listener Code */
document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if(e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

/* move dodger right */

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left +1}px`;
    }
}

