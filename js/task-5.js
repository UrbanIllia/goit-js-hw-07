function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  body: document.body,
  colorSpan: document.querySelector('.color'),
};
const handleColorChange = event => {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.colorSpan.textContent = newColor;
};

refs.btnChangeColor.addEventListener('click', handleColorChange);
