// selector
// menu navigation bar
const menu_list = document.querySelector(".menu_list");
const nav_logo = document.querySelector(".nav_logo");
const icofont_navigation_menu = document.querySelector(
  ".icofont-navigation-menu"
);
const icofont_close_circled = document.querySelector(".icofont-close-line");

icofont_navigation_menu.addEventListener("click", (e) => {
  menu_list.classList.add("menu_list_show");
  icofont_navigation_menu.classList.add("icofont_navigation_menu_hidden");
  nav_logo.classList.add("nav_logo_hidden");
});

icofont_close_circled.addEventListener("click", (e) => {
  menu_list.classList.remove("menu_list_show");
  icofont_navigation_menu.classList.remove("icofont_navigation_menu_hidden");
  nav_logo.classList.remove("nav_logo_hidden");
});

// video lightbox
const about_video = document.querySelector(".about_video");
const lightbox = document.querySelector(".lightbox");
const lightbox_content = document.querySelector(".lightbox_content");
const close_circled = document.querySelector(".close_circled");

about_video.addEventListener("click", (e) => {
  lightbox.classList.add("lightbox_show");
});

close_circled.addEventListener("click", (e) => {
  lightbox.classList.remove("lightbox_show");
});
lightbox_content.addEventListener("click", (e) => {
  e.stopPropagation();
});



// img_lightbox
// gallery box
const galleryImages = document.querySelectorAll(".image");
const imageLightBox = document.querySelector(".imageLightBox");
const gallery_close = document.querySelectorAll(".icofont-close-circled");
const galleryBoxImage = document.querySelector(".imageLightBox img");
const backdrop = document.querySelector(".backdrop");
const menuImages = document.querySelectorAll(".menu");
// menu box
menuImages.forEach((menuImage) => {
  menuImage.addEventListener("click", (e) => {
    imageLightBox.classList.add("activeLightBox");
    backdrop.classList.add("activeBackDrop");
    galleryBoxImage.setAttribute("src", e.target.src);
  });
});

// gallery box
galleryImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    imageLightBox.classList.add("activeLightBox");
    backdrop.classList.add("activeBackDrop");
    galleryBoxImage.setAttribute("src", e.target.src);
  });
});

gallery_close.forEach((close) => {
  close.addEventListener("click", (e) => {
    imageLightBox.classList.remove("activeLightBox");
    backdrop.classList.remove("activeBackDrop");
  });
});







// const menu_content1 = document.querySelector(".menu-1 ");

// const img_close_circled1 = document.querySelector(".img_close_circled1");

// const img_box1 = document.querySelector(".img_box1");

// const img_content1 = document.querySelector(".img_content1");
// Image lightbox content
// lightbox1

// menu_content1.addEventListener("click", (e) => {
//   img_box1.classList.add("img_lightbox_show");
// });

// img_close_circled1.addEventListener("click", (e) => {
//   img_box1.classList.remove("img_lightbox_show");
// });

// img_content1.addEventListener("click", (e) => {
//   e.stopPropagation();
// });
