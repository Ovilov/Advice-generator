const url = "https://api.adviceslip.com/advice";

const template = document.querySelector("template");
const div = document.querySelector(".card");
const image = document.querySelector(".btn");
const lines = document.querySelector(".lines");

function getData() {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((advice) => {
      updateUl(advice);
    })
    .catch();
}

image.addEventListener("click", () => {
  getData();
});

getData();

function updateUl(data) {
  div.innerHTML = "";
  console.log(data);

  const clone = template.content.cloneNode(true);

  const name = clone.querySelector(".id");
  const description = clone.querySelector(".advice");

  name.textContent = `ADVICE #${data.slip.id}`;

  description.textContent = `"${data.slip.advice}"`;

  div.appendChild(clone);
  div.appendChild(lines);
  div.appendChild(image);
}
