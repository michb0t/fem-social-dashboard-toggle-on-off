const toggleBtn = document.querySelector(".slider");
const toggleSwitch = document.querySelector(".toggle-switch");
const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch
    }
}

function switchTheme (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        toggleBtn.classList.toggle("active");
        toggleSwitch.classList.toggle("toggle-dark");
        localStorage.setItem("theme", "dark");

    } else {
        document.documentElement.setAttribute("data-theme", "light");
        toggleBtn.classList.remove("active");
        toggleSwitch.classList.remove("toggle-dark");
        localStorage.setItem("theme", "light");

    }
}

toggleSwitch.addEventListener("click", switchTheme, false);

