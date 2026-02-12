const yesBtn = document.getElementById("yessir");
const noBtn = document.getElementById("nooo");
const firstScreen = document.getElementById("first-screen");
const secondScreen = document.getElementById("second-screen");

yesBtn.addEventListener("click", () => {
    firstScreen.style.display = "none";
    secondScreen.style.display = "flex";
});

noBtn.addEventListener("mouseenter", () => {
    const randomX = Math.floor(Math.random() * 400) - 200;
    const randomY = Math.floor(Math.random() * 300) - 150;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
