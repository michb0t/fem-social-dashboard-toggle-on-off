const toggleBtn = document.querySelector(".toggle-switch-inner");
const toggleSwitch = document.querySelector(".toggle-switch")

toggleBtn.addEventListener("click", function() {
    this.classList.toggle("active")
    toggleSwitch.classList.toggle("toggle-dark")
})


