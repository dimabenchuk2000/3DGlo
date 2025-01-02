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

  const validationForm = function (
    e,
    inputName,
    inputEmail,
    inputPhone,
    inputText
  ) {
    e.preventDefault();

    let isError = false;

    if (/[^а-яА-Я]/g.test(inputName.value)) isError = true;

    if (/[^\w@.\-*!~']/g.test(inputEmail.value)) isError = true;

    if (/[^\d-+()]/g.test(inputPhone.value)) isError = true;

    if (inputText) if (/[^а-яА-Я\s-,]/g.test(inputText.value)) isError = true;

    if (!isError) {
      alert("Данные отправлены");
    }
  };

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
      // eslint-disable-next-line no-dupe-else-if
    }
  };

  calcInputs.forEach((input) =>
    input.addEventListener("input", validationCalc)
  );

  allInputs.forEach((input) => input.addEventListener("blur", autoСorrection));

  form1.addEventListener("submit", () => {
    validationForm(event, form1Name, form1Email, form1Phone);
  });

  form2.addEventListener("submit", () => {
    validationForm(event, form2Name, form2Email, form2Phone, form2Message);
  });
};

export default formValidation;
