// // =======smooth scroll========
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// // =======smooth scroll========

// // ===============
gsap.from(".logo h2,.link li", {
  y: -50,
  duration: 0.2,
  opacity: 0,
  delay: 1,
  stagger: 0.1,
  ease: "back.out(1.7)",
});
gsap.from(".logo h2", {
  duration: 20,
  delay: 10,
  repeat: -1,
  ease: "back.out(1.7)",
  fontStretch: "700%",
  yoyo: true,
});

// ==================
gsap.to(".text h1", {
  transform: " translateX(-253%)",
  fontWeight: 500,

  scrollTrigger: {
    trigger: "header",
    scroller: "body",

    start: "top 0%",
    end: "top -350%",
    scrub: 0.3,
    pin: true,
  },
});

gsap.from(" header .hb", {
  // scale: 0.3,

  y: 500,
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top -1%",
    end: "top -150%",
    scrub: 0.5,
    pin: true,
  },
});
gsap.from(" header .hb", {
  scale: 0.7,

  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top -2%",
    end: "top -150%",
    scrub: 0.5,
    pin: true,
  },
});
// =====================
var tl = gsap.timeline();

tl.from(".left_content  h1", {
  y: 100,
  stagger: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: "section",
    scroller: "body",
    start: "85% bottom",
    end: "50% -200%",
    scrub: 0.5,
    pin: true,
    // markers: true,
  },
});
tl.from(".left_content p", {
  x: 100,
  stagger: 0.2,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    start: "50% bottom",
    end: "50% 40%",
    scrub: 0.1,
    pin: true,
    // markers: true,
  },
});

gsap.from(".right_content h1", {
  y: 300,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    start: "45% bottom",
    end: "45% -100%",
    scrub: 0.1,
    // markers: true,
  },
});

// =======poster one==========
gsap.from(".poster_one", {
  height: "20vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_one",

    start: "85% 70%",
    end: "0% 0%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

gsap.to(".poster_one .content", {
  opacity: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_one",

    start: "center 50%",
    end: "center 40%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

// =======poster two========
gsap.from(".poster_two", {
  height: "20vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_two",

    start: "500% 90%",
    end: "500% 30%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

gsap.to(".poster_two .content", {
  opacity: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_two",

    start: "450% 50%",
    end: "450% 40%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

// =======poster three========
gsap.from(".poster_three", {
  height: "20vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_two",

    start: "1020% 90%",
    end: "1020% 30%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

gsap.to(".poster_three .content", {
  opacity: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_two",

    start: "1000% 50%",
    end: "1000% 40%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

// =======poster four========
gsap.from(".poster_four", {
  height: "20vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_two",

    start: "1530% 90%",
    end: "1530% 10%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

gsap.to(".poster_four .content", {
  opacity: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_two",

    start: "1500% 50%",
    end: "1500% 40%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

// =======poster five========
gsap.from(".poster_five", {
  height: "20vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_two",

    start: "2100% 90%",
    end: "2100% 10%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

gsap.to(".poster_five .content", {
  opacity: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_five",

    start: "1450% 50%",
    end: "1450% 40%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

// =======poster six========
gsap.from(".poster_six", {
  height: "20vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_six",

    start: "2000% 90%",
    end: "2000% 10%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

gsap.to(".poster_six .content", {
  opacity: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".poster_six",

    start: "1950% 50%",
    end: "1950% 40%",
    scrub: 0.1,
    ease: "back.out(1.7)",
    // markers: true,
  },
});

// =-==================------------

gsap.to("body", {
  background: "black",
  color: "white",
  scrollTrigger: {
    scroller: "body",
    trigger: ".blank",

    start: "340% 66%",
    end: "200%  0%",
    scrub: 0.1,

    // markers: true,
  },
});

gsap.from(".blank h1", {
y:"100%",
opacity:0,
duration:10,
stagger:1,
  

  scrollTrigger: {
    scroller: "body",
    trigger: ".blank h1",

    start: "2000% 66%",
    end: "1950%  0%",
    scrub: 0.1,

    // markers: true,
  },
});
// =========
gsap.from(".video2", {
height:"10%",
y:1000,



  scrollTrigger: {
    scroller: "body",
    trigger: ".video2",

    start: "200% 66%",
    end: "200%  0%",
    scrub: 0.1,

    // markers: true,
  },
});

// =================
gsap.to("body", {
  background: "white",
  color: "black",
  scrollTrigger: {
    scroller: "body",
    trigger: ".blank",

    start: "540% 66%",
    end: "200%  0%",
    scrub: 0.1,

    // markers: true,
  },
});
// =================

gsap.from(".bottom  .item1", {
  x: -600,
opacity:0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".bottom .item1 ",

    start: "400% 66%",
    end: "400%  0%",
    scrub: 0.1,

    // markers: true,
  },
});
// ===========

gsap.from(".bottom  .item2", {
  x: 600,
opacity:0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".bottom .item2 ",

    start: "400% 66%",
    end: "400%  0%",
    scrub: 0.1,

    // markers: true,
  },
});
// ===========


gsap.from(".insight h2", {
  x: -600,
  opacity: 0,
  
  scrollTrigger: {
    scroller: "body",
    trigger: ".insight h2",

    start: "3000% bottom",
    end: "3000%  0%",
    scrub: 0.1,

    // markers: true,
  },
});
// ===========
gsap.from(".insight h1", {
  x: 600,
  opacity: 0,
  

  scrollTrigger: {
    scroller: "body",
    trigger: ".insight h1",

    start: "2000% bottom",
    end: "2000%  0%",
    scrub: 0.1,

    // markers: true,
  },
});
// ===========

gsap.from(".insight h3", {
  x:-10,
  duration:.5,
  repeat:-1,
  yoyo:true,
  color:"red"
  


});
