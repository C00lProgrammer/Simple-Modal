const button = document.getElementById("btn");

button.addEventListener("click", () =>  {
    const position = window.innerHeight * 0.25;
    const modal = document.getElementById("modal");
    modal.style.top = `${position}px`;
})

const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.style.top = `-400px`;
})