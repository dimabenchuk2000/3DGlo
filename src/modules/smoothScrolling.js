const smoothScrolling = () => {
    const linksMenu = document.querySelectorAll("menu>ul>li>a")
    const linkBtn = document.querySelector("main>a")

    const scroll = function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    }

    linksMenu.forEach(link => link.addEventListener("click", scroll))

    linkBtn.addEventListener("click", scroll)
}

export default smoothScrolling