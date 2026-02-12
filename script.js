const yesBtn = document.getElementById("yessir");
const firstScreen = document.getElementById("first-screen");
const secondScreen = document.getElementById("second-screen");

yesBtn.addEventListener("click", () => {
    firstScreen.style.display = "none";
    secondScreen.style.display = "flex";
    secondScreen.style.opacity = "0";

    setTimeout(() => {
        secondScreen.style.transition = "opacity 0.8s ease";
        secondScreen.style.opacity = "1";
    }, 50);
});
