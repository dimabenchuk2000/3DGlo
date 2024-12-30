const menu = function () {
  const menu = document.querySelector("menu");

  const toggleMenu = function () {
    menu.classList.toggle("active-menu");
  };

  menu.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("close-btn") ||
      e.target.matches("ul>li>a")
    ) {
      toggleMenu();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("menu") && menu.classList.contains("active-menu")) {
      toggleMenu();
    } else if (e.target.closest(".menu")) {
      toggleMenu();
    }
  });
};

export default menu;
