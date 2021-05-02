let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let close_btn = document.getElementsByClassName("close")[0];

let inputs = document.querySelectorAll(".modal-content input");

btn.onclick = function() {
    modal.style.display = "block";
};

close_btn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

console.log(inputs);
