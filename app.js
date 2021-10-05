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
        localStorage.setItem("theme", "dark");

    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");

    }
}

toggleSwitch.addEventListener("click", switchTheme, false);

