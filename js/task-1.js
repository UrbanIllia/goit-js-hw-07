const refs = {
  link: document.querySelectorAll('.item'),
};
console.log(`Number of categories: ${refs.link.length}`);
refs.link.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.querySelectorAll('ul li').length}`);
});
