const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.id) {
            body.style.backgroundColor = e.target.id;
        }
    });
});