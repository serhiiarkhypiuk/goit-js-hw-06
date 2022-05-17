const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryStyle = document.querySelector("ul.gallery")
galleryStyle.style.display = "flex"
galleryStyle.style.flexDirection = "column"
galleryStyle.style.alignItems = "center"
galleryStyle.style.listStyle = "none"


const markup = images
  .map((image) => `<li><img width="1260px" height="750px" src="${image.url}" alt="${image.alt}"></img></li>`)
  .join("")

document.querySelector("ul.gallery").insertAdjacentHTML("beforeend", markup)