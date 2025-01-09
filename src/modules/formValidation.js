const formValidation = ({ formId }) => {
  const form = document.getElementById(formId);
  const calcInputs = document.querySelectorAll(".calc-block>input");

  const validationCalc = function (e) {
    e.target.value = e.target.value.replace(/[^\d]/, "");
  };

  const autoСorrection = function (e) {
    if (e.target.name === "user_message" && e.target.value !== "") {
      e.target.value = e.target.value.replace(/[^а-яА-Я\s\d-,?.]/g, "");
      e.target.value = e.target.value.replace(/^[\s-]*|[\s-]*$/g, "");
      e.target.value = e.target.value.replace(/([\s]+)/g, " ");
      e.target.value = e.target.value.replace(/([-]+)/g, "-");

      e.target.value =
        e.target.value.split("")[0].toUpperCase() + e.target.value.slice(1);
    } else if (e.target.name === "user_name" && e.target.value !== "") {
      e.target.value = e.target.value.replace(/[^а-яА-Я]/g, "");

      e.target.value =
        e.target.value.split("")[0].toUpperCase() + e.target.value.slice(1);
    } else if (e.target.name === "user_email") {
      e.target.value = e.target.value.replace(/[^\w@.\-*!~']/g, "");
      e.target.value = e.target.value.replace(/^[-]*|[-]*$/g, "");
      e.target.value = e.target.value.replace(/([-]+)/g, "-");
    } else if (e.target.name === "user_phone") {
      e.target.value = e.target.value.replace(/[^\d-+()]/g, "");
      e.target.value = e.target.value.replace(/^[-]*|[-]*$/g, "");
      e.target.value = e.target.value.replace(/([-]+)/g, "-");
    }
  };

  calcInputs.forEach((input) =>
    input.addEventListener("input", validationCalc)
  );

  try {
    if (!form) {
      throw new Error(`Форма с таким id: ${formId}, не существует`);
    }
    const formElements = form.querySelectorAll("input");

    formElements.forEach((input) =>
      input.addEventListener("blur", autoСorrection)
    );
  } catch (error) {
    console.log(error);
  }
};

export default formValidation;
