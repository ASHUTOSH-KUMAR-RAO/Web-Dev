gsap.to("h1",{
    x:200,
    color:"yellow",
    duration:2,
    delay:2

})

gsap.to("h2",{
    x:100,
    color:"red",
    duration:2,
    delay:4,

    // stagger: ==> ye bahut sexy property hai kyuki ye same name ke element ko alag alag time interval per animate karta hai , aur ye element ko ek-ek karke animation deta hai but same elemnt per

    // repeat ==> ye elemnt ko repate karta hai aur yedi negative mein value diye to infinite time repeat hoga

    // yoyo ==>ye bhi ek super sexy property hai jo dono kaam ko ek sath krta hai mtlb ki "to" <==> "from" se
})

gsap.to("h3",{
    x:150,
    color:"green",
    duration:2,
    delay:6

})

gsap.to("h4",{
    x:100,
    color:"brown",
    duration:2,
    delay:8

})