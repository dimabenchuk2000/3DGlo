import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import smoothScrolling from "./modules/smoothScrolling";
import formValidation from "./modules/formValidation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("25 january 2025");
menu();
modal();
smoothScrolling();
formValidation({
  formId: "form1",
});
formValidation({
  formId: "form2",
});
formValidation({
  formId: "form3",
});
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
calc(100);
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
});
sendForm({
  formId: "form3",
});
