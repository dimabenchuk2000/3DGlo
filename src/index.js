import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import smoothScrolling from "./modules/smoothScrolling";
import formValidation from "./modules/formValidation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";

timer("23 february 2025");
menu();
modal();
smoothScrolling();
formValidation();
tabs();
slider({
  sliderBlockClass: "portfolio-content",
  slideClass: "portfolio-item",
  dotsBlockClass: "portfolio-dots",
  dotClass: "dot",
  activeSlideClass: "portfolio-item-active",
  activeDotClass: "dot-active",
  buttonClass: "portfolio-btn",
  buttonRight: "arrow-right",
  buttonLeft: "arrow-left",
});
sliderCarousel();
