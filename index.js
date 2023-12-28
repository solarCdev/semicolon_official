// const animateCSS = (element, animation, prefix = "animate__") =>
//   // We create a Promise and return it
//   new Promise((resolve, reject) => {
//     const animationName = `${prefix}${animation}`;
//     const node = document.querySelector(element);

//     node.classList.add(`${prefix}animated`, animationName);

//     // When the animation ends, we clean the classes and resolve the Promise
//     function handleAnimationEnd(event) {
//       event.stopPropagation();
//       node.classList.remove(`${prefix}animated`, animationName);
//       resolve("Animation ended");
//     }

//     node.addEventListener("animationend", handleAnimationEnd, { once: true });
//   });

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("hi");
//   let div = document.querySelectorAll("div");
//   div.forEach((v, i) => {
//     v.classList.add("animate__animated");
//     v.style.transition = "0.5s ease-in";
//   });
//   const observer = new IntersectionObserver((e) => {
//     e.forEach((e) => {
//       if (e.isIntersecting) {
//         animateCSS("div", "fadeIn");
//       } else {
//         animateCSS("div", "fadeOut");
//       }
//     });
//   });
//   observer.observe(div);
// });
