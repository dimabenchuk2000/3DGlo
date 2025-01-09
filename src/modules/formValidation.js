const formValidation = () => {
  const form1 = document.getElementById("form1");
  const form1Name = form1.querySelector("#form1-name");
  const form1Email = form1.querySelector("#form1-email");
  const form1Phone = form1.querySelector("#form1-phone");

  const form2 = document.getElementById("form2");
  const form2Name = form2.querySelector("#form2-name");
  const form2Email = form2.querySelector("#form2-email");
  const form2Phone = form2.querySelector("#form2-phone");
  const form2Message = form2.querySelector("#form2-message");

  const calcInputs = document.querySelectorAll(".calc-block>input");

  const allInputs = [
    form1Name,
    form1Email,
    form1Phone,
    form2Name,
    form2Email,
    form2Phone,
    form2Message,
  ];

  const validationCalc = function (e) {
    e.target.value = e.target.value.replace(/[^\d]/, "");
  };

  const autoСorrection = function (e) {
    if (e.target.className === "mess" && e.target.value !== "") {
      e.target.value = e.target.value.replace(/[^а-яА-Я\s-,?]/g, "");
      e.target.value = e.target.value.replace(/^[\s-]*|[\s-]*$/g, "");
      e.target.value = e.target.value.replace(/([\s]+)/g, " ");
      e.target.value = e.target.value.replace(/([-]+)/g, "-");

      e.target.value =
        e.target.value.split("")[0].toUpperCase() + e.target.value.slice(1);
    } else if (e.target.type === "text" && e.target.value !== "") {
      e.target.value = e.target.value.replace(/[^а-яА-Я]/g, "");

      e.target.value =
        e.target.value.split("")[0].toUpperCase() + e.target.value.slice(1);
    } else if (e.target.type === "email") {
      e.target.value = e.target.value.replace(/[^\w@.\-*!~']/g, "");
      e.target.value = e.target.value.replace(/^[-]*|[-]*$/g, "");
      e.target.value = e.target.value.replace(/([-]+)/g, "-");
    } else if (e.target.type === "tel") {
      e.target.value = e.target.value.replace(/[^\d-+()]/g, "");
    }
  };

  calcInputs.forEach((input) =>
    input.addEventListener("input", validationCalc)
  );

  allInputs.forEach((input) => input.addEventListener("blur", autoСorrection));
};

export default formValidation;
