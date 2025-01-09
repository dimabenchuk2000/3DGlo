import { validationForm } from "./helpers";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  let statusBlock = document.createElement("div");
  const errorText = "Ошибка...";
  const successText = "Спасибо, наш менеджер с вами свяжется.";

  let formElements;

  try {
    formElements = form.querySelectorAll("input");
  } catch (error) {
    console.log(error);
  }

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.innerHTML = `
    <div class="sk-circle">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
      <div class="sk-circle11 sk-child"></div>
      <div class="sk-circle12 sk-child"></div>
    </div>
    `;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    sendData(formBody)
      .then((data) => {
        statusBlock.textContent = successText;

        setTimeout(() => {
          statusBlock.textContent = "";
        }, 3000);

        formElements.forEach((input) => {
          input.value = "";
        });
        console.log(data);
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
        console.log(error);
      });
  };

  try {
    if (!form) {
      throw new Error(`Формы с таким id: ${formId}, не существует`);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validationForm(formElements)) {
        submitForm();
      } else {
        alert("Форма не прошла валидацию!");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
