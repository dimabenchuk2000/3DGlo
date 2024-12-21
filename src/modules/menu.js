const menu = function () {
    const menuBtn = document.querySelector(".menu")
    const menu = document.querySelector("menu")
    const closeBtn = menu.querySelector(".close-btn")
    const menuItems = menu.querySelectorAll("ul>li>a")

    const menuDisplay = function () {
        menu.classList.toggle("active-menu")
    }

    menuBtn.addEventListener("click", menuDisplay)
    closeBtn.addEventListener("click", menuDisplay)

    menuItems.forEach(menuItem => menuItem.addEventListener("click", menuDisplay))
}

export default menu