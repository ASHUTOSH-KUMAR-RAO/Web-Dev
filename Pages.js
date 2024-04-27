
 var tl = gsap.timeline()

 tl.from("#nav img,#nav h3,#nav h4,#nav button",{

    y:-100,
    duration: 2,
    delay :1,
    opacity:0,
    stagger : 0.
})

tl.from("#main h1",{

    y:150,
    opacity : 0, // iska mtlb hota hai initial zero se start ho 
    duration : 1,
    stagger:0.4

})

tl.from("#main >img",{
    scale : 0,
    opacity : 0,
    stagger:0.3
    

})

tl.from("h5",{
    scale: 0,
    opacity : 0,


})
tl.to("h5",{
    y:55,
    repeat :-1,
    duration: 0.4,
    yoyo : true
})