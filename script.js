const yesBtn = document.getElementById("yessir");
const firstScreen = document.getElementById("first-screen");
const secondScreen = document.getElementById("second-screen");

yesBtn.addEventListener("click", () => {
    firstScreen.style.display = "none";
    secondScreen.style.display = "flex";
});
