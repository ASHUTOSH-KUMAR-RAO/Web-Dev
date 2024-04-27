gsap.from("#box1 #box", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});

gsap.from("#box2 #box", {
  scale: 0,
  duration: 1,
  // delay:1,
  rotate: 360,
  scrollTrigger: "#box2 #box",
  // scrollTrigger:{
  //     trigger:"#box2 #box",
  //     scroller : "body",
  //     // markers : true ==> koi jaruri nhi hai depend upon your
  //     start:"top 40%",
  //     scrub:true,// sabse inresting property hai, aur iske andar hum integer value bhi de sekte hai
  // }
});

gsap.from("#box3 #box", {
  scale: 0,
  duration: 1,
  // delay:1,
  rotate: 360,

  scrollTrigger: "#box3 #box",
});
