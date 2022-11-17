"use strict";

const adviceNumber = document.querySelector(".card__advice-number");
const adviceText = document.querySelector(".card__advice-text");

const generateAdvice = async function () {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    if (!res.ok) {
      throw new Error("Problem with fetching data");
    }
    const { slip: data } = await res.json();

    updateAdviceId(data.id);
    updateAdviceContent(data.advice);
  } catch (err) {
    console.error(`Something went wrong ${err.message}`);
  }
};

const updateAdviceContent = (advice) => {
  adviceText.textContent = `"${advice}"`;
};

const updateAdviceId = (id) => {
  adviceNumber.textContent = `Advice #${id}`;
};

window.addEventListener("load", generateAdvice);
