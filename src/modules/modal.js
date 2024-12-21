const modal = () => {
    const popupBtn = document.querySelectorAll(".popup-btn")
    const popup = document.querySelector(".popup")
    const closeBtn = popup.querySelector(".popup-close")
    const popupContent = popup.querySelector(".popup-content")

    let height = 0
    let idInterval

    const openModal = function () {
        popup.style.display = "block"
        height += 29

        idInterval = requestAnimationFrame(openModal)

        if (height < 382) {
            popupContent.style.height = `${height}px`
        } else {
            height = 0
            cancelAnimationFrame(idInterval)
        }
    }

    popupBtn.forEach(btn => btn.addEventListener("click", openModal))

    closeBtn.addEventListener("click", () => {popup.style.display = "none"})
}

export default modal