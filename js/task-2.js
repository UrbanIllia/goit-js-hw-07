const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const refs = {
  gallery_list: document.querySelector('.gallery'),
};
const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery_item"><img src="${url}" alt="${alt}"></li>`
  )
  .join('');

refs.gallery_list.insertAdjacentHTML('beforeend', markup);
refs.gallery_list.style.display = 'flex';
refs.gallery_list.style.gap = '48px 24px';
refs.gallery_list.style.flexWrap = 'wrap';
refs.gallery_list.justifyContent = 'center';
refs.gallery_list.style.listStyle = 'none';

document.querySelectorAll('.gallery_item img').forEach(img => {
  img.style.width = '360px';
  img.style.height = '300px';
});
