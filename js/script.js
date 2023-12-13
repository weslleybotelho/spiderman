/*==================== POINTS ====================*/

const points = document.querySelectorAll(".space-slider");
const style_points = document.querySelectorAll(".point");
const images = document.querySelectorAll(".img-slider");

points.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Zerar todas as images
    cleanImages();

    images[index].style.opacity = "1";

    cleanPoints();

    style_points[index].classList.add("active-point");
  });
});

function cleanImages() {
  images.forEach((item) => {
    item.style.opacity = "0";
  });
}

function cleanPoints() {
  style_points.forEach((item) => {
    item.classList.remove("active-point");
  });
}

let i = 0;
setInterval(changeBackgroundThread, 5000);

function changeBackgroundThread() {
  // Zera todas as imagens
  cleanImages();

  // Aparece somente aquela que clicou
  images[i].style.opacity = "1";

  cleanPoints();

  style_points[i].classList.add("active-point");

  i++;

  if (i == 4) i = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  var tl1 = gsap.timeline();

  tl1
    .to(".screen-loading", {
      duration: 2,
      opacity: 0,
      delay: 3,
      //filter: 'blur(10px)',
      //y: "-10%",
      ease: "power4.out",
    })
    .from(
      ".bg-slider",
      {
        duration: 2,
        opacity: 0,
        stagger: { each: 0.1 },
        ease: "power4.out",
      },
      "-=1.0"
    )
    .from(
      "nav > div",
      {
        duration: 2,
        opacity: 0,
        // y: 400,
        stagger: { each: 0.1 },
        ease: "back.out(1.2)",
      },
      "-=0.5"
    )
    .from(
      ".hero > h1, img, .cta, .div-play",
      {
        duration: 3,
        opacity: 0,
        //y: 400,
        stagger: { each: 0.1 },
        ease: "power4.out",
      },
      "-=1.7"
    )
    // .from(
    //   ".hero > img",
    //   {
    //     duration: 2,
    //     opacity: 0,
    //     // y: 400,
    //     stagger: { each: 0.1 },
    //     ease: "power4.out",
    //   },
    //   "-"
    // )
    // .from(
    //   "",
    //   {
    //     duration: 2,
    //     opacity: 0,
    //     y: 400,
    //     stagger: { each: 0.1 },
    //     ease: "power4.out",
    //   },
    //   ""
    // )
    .from(
      ".social-medias > div, .slider-points > div",
      {
        duration: 2,
        opacity: 0,
        y: 400,
        stagger: { each: 0.1 },
        ease: "power4.out",
      },
      "-=1.0"
    );
  // .from("", {
  //   duration: 2,
  //   opacity: 0,
  //   y: 400,
  //   stagger: { each: 0.1 },
  //   ease: "power4.out",
  // });
});
/*

ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});
*/
