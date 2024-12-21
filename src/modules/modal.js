const modal = () => {
    const popupBtn = document.querySelectorAll(".popup-btn")
    const popup = document.querySelector(".popup")
    const closeBtn = popup.querySelector(".popup-close")

    popupBtn.forEach(btn => btn.addEventListener("click", () => {popup.style.display = "block"}))

    closeBtn.addEventListener("click", () => {popup.style.display = "none"})
}

export default modal