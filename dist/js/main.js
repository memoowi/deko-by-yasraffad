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

// Animations Halaman Utama and Scroll Trigger Animate

const timeLine = gsap.timeline({defaults: {duration: 1}})
const reviewA = gsap.timeline({
    scrollTrigger: {
      trigger: ".review",
      start: "top bottom",
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
      start: "top center",
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
const contactB = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-bg",
      start: "center bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const contactB2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-box",
      start: "center bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const contactB3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".map",
      start: "center bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const bottomB = gsap.timeline({
    scrollTrigger: {
      trigger: ".b-bar",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const bottomL = gsap.timeline({
    scrollTrigger: {
      trigger: ".b-logo",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const bottomT = gsap.timeline({
    scrollTrigger: {
      trigger: ".b-title",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const bottomI = gsap.timeline({
    scrollTrigger: {
      trigger: ".b-icon",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});
const foot = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
});

timeLine.fromTo('#home', {scale:0.8}, {scale:1, opacity:1, delay:0.3});
timeLine.fromTo('.title', {y:100}, {y:0, opacity:1});
timeLine.fromTo('.front-img', {y:100}, {y:0, opacity:1});
timeLine.fromTo('.btn', {y:100}, {y:0, opacity:1, delay:-0.9});
reviewA.fromTo('.review', {y:100}, {y:0, opacity:1});
previewT.fromTo('.preview-title', {x:-200}, {x:0, opacity:1, duration:1.8});
previewV.fromTo('.preview-videos', {y:100}, {y:0, opacity:1, duration:1.5});
serviceT.fromTo('.service-bg', {y:0}, {y:0, opacity:1, duration:1.8});
serviceB.fromTo('.service-box', {x:-200}, {x:0, opacity:1, duration:1, delay:0.5});
testiT.fromTo('.testi-title', {x:-200}, {x:0, opacity:1, duration:1.8});
testiB.fromTo('.testi-box', {y:150}, {y:0, opacity:1, duration:1});
testiB2.fromTo('.testi-box2', {y:150}, {y:0, opacity:1, duration:1, delay:0.5});
testiB3.fromTo('.testi-button', {scale:0.5}, {scale:1, opacity:1, duration:0.5, delay:0.8});
contactB.fromTo('.contact-bg', {y:200}, {y:0, opacity:1, duration:1.2, delay:0.3});
contactB3.fromTo('.map', {opacity:0}, {opacity:1, duration:1, delay:1.2});
contactB2.fromTo('.contact-box', {x:500}, {x:0, opacity:1, duration:1, delay:1});
bottomB.fromTo('.b-bar', {scale:0}, {scale:1, duration:1.5});
bottomL.fromTo('.b-logo', {x:-100, opacity:0}, {x:0, opacity:1, duration:1.5});
bottomT.fromTo('.b-title', {scale:0, opacity:0}, {scale:1, opacity:1, duration:1.5});
bottomI.fromTo('.b-icon', {x:100, opacity:0}, {x:0, opacity:1, duration:1.5});
foot.fromTo('footer', {opacity:0}, {opacity:1, duration:2});