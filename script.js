 // besically "GSAP" ek javascript ki library hoti hai 
 
//  GSAP ==> GREENSOCK ANIMATION PLATFORM

//  gsap.to("#box",{
//     x:400,
//     duration:4,
//     delay :1,
//     backgroundColor:"white",
//     rotate:360,
//     scale :0.7 // ye final position per baith jata hai means stable ho jata hai
//  }) // kabhi bhi value denge to string mein hi dete hai 

gsap.from("#box",{ // "from" ka mtlb hota hai final to initial aur "to"==> initial to finale
    x:400,
    duration:4,
    delay :1,
    backgroundColor:"white",
    rotate:360,
    scale :0.7 // ye final position per baith jata hai means stable ho jata hai
})