import { animate } from "./helpers";

const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = calcBlock.querySelector(".calc-type");
  const calcSquare = calcBlock.querySelector(".calc-square");
  const calcCount = calcBlock.querySelector(".calc-count");
  const calcDay = calcBlock.querySelector(".calc-day");
  const total = document.getElementById("total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    animate({
      duration: 200,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.textContent = Math.floor(progress * totalValue);
      },
    });
  };

  calcBlock.addEventListener("change", countCalc);
};

export default calc;
