gsap.registerPlugin(ScrollTrigger);

// Toggle & Responsive Navigation
function navSlide() {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
}

navSlide();

const timeLine = gsap.timeline({defaults: {duration: 1}})
const reviewA = gsap.timeline({
    scrollTrigger: {
      trigger: ".review",
      start: "top center",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const previewT = gsap.timeline({
    scrollTrigger: {
      trigger: ".preview-title",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const previewV = gsap.timeline({
    scrollTrigger: {
      trigger: ".preview-videos",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const serviceT = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-bg",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const serviceB = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-box",
      start: "center bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const testiT = gsap.timeline({
    scrollTrigger: {
      trigger: ".testi-title",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const testiB = gsap.timeline({
    scrollTrigger: {
      trigger: ".testi-box",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const testiB2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".testi-box2",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const testiB3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".testi-button",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});

timeLine.fromTo('#home', {scale:0.8}, {scale:1, opacity:1, delay:0.3})
timeLine.fromTo('.title', {y:100}, {y:0, opacity:1})
timeLine.fromTo('.front-img', {y:100}, {y:0, opacity:1})
timeLine.fromTo('.btn', {y:100}, {y:0, opacity:1, delay:-0.9})
reviewA.fromTo('.review', {y:100}, {y:0, opacity:1})
previewT.fromTo('.preview-title', {x:-200}, {x:0, opacity:1, duration:1.8})
previewV.fromTo('.preview-videos', {y:100}, {y:0, opacity:1, duration:1.5})
serviceT.fromTo('.service-bg', {y:0}, {y:0, opacity:1, duration:1.8})
serviceB.fromTo('.service-box', {x:-200}, {x:0, opacity:1, duration:1, delay:0.5})
testiT.fromTo('.testi-title', {x:-200}, {x:0, opacity:1, duration:1.8})
testiB.fromTo('.testi-box', {y:150}, {y:0, opacity:1, duration:1})
testiB2.fromTo('.testi-box2', {y:150}, {y:0, opacity:1, duration:1, delay:0.5})
testiB3.fromTo('.testi-button', {y:200}, {y:0, opacity:1, duration:1, delay:0.3})


  
  

  