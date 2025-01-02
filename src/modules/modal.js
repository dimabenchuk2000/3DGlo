import { animate } from "./helpers";

const modal = () => {
  const popupBtn = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const popupContent = popup.querySelector(".popup-content");

  const openModal = function () {
    popup.style.display = "block";

    animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        popupContent.style.height = progress * 400 + "px";
      },
    });
  };

  popupBtn.forEach((btn) => btn.addEventListener("click", openModal));

  popup.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      popup.style.display = "none";
    }
  });
};

export default modal;
