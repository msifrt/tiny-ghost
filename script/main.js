const ghost = document.getElementById("ghost");
let lock = false;

function scaredGhost() {
    if (lock == false) {
        lock = true;
        ghost.style.opacity = "0";
        let x = Math.floor(Math.random() * (95 - 5));
        let y = Math.floor(Math.random() * (95 - 5));
        setTimeout(function() {
            ghost.style.left = x + "%";
            ghost.style.top = y + "%";
            ghost.style.opacity = "1";
            lock = false;
        }, 500);
    }
}

ghost.addEventListener("click", scaredGhost);