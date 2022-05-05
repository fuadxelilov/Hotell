// Appear Classes Js Codes
const faders = document.querySelectorAll('.heading');
const video =document.querySelectorAll('.video')
const box = document.querySelectorAll(".date_box")
const header = document.querySelectorAll(".head_explore")
const explore = document.querySelectorAll(".explore_boxes")
const button = document.querySelectorAll(".slide_buttons")
const blocks = document.querySelectorAll(".blocks")
const hotel = document.querySelectorAll(".information_hotel")
const post =document.querySelectorAll(".post")
const blog = document.querySelectorAll(".Blog_boxes")
const swip = document.querySelectorAll(".swiper-buttons")
const text = document.querySelectorAll(".heading-text")
const accordion = document.querySelectorAll(".accordion")
const test= document.querySelectorAll(".test_buttons")
const beader = document.querySelectorAll(".header_2")
const bontent = document.querySelectorAll(".content_2")
const insta = document.querySelectorAll(".insta")
const insta_content = document.querySelectorAll(".insta_content")
const pista = document.querySelectorAll(".Pictures_Insta")
const li = document.querySelectorAll(".insideli")
const li2 = document.querySelectorAll(".insideli2")
const Appearoptions = {
    threshold:1
};
const apperOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
},Appearoptions);

faders.forEach(fader=>{
    apperOnScroll.observe(fader)
})
video.forEach(videobtn=>{
    apperOnScroll.observe(videobtn)
})
box.forEach(boxes=>{
    apperOnScroll.observe(boxes)
})
header.forEach(head=>{
    apperOnScroll.observe(head)
})
explore.forEach(travel =>{
    apperOnScroll.observe(travel)
})
button.forEach(btn =>{
    apperOnScroll.observe(btn)
})
blocks.forEach(block=>{
    apperOnScroll.observe(block)
})
hotel.forEach(info=>{
    apperOnScroll.observe(info)
})
blog.forEach(blogs=>{
    apperOnScroll.observe(blogs)
})
post.forEach(posts=>{
    apperOnScroll.observe(posts)
})
swip.forEach(swiper=>{
    apperOnScroll.observe(swiper)
})
text.forEach(header=>{
    apperOnScroll.observe(header)
})
accordion.forEach(accor=>{
    apperOnScroll.observe(accor)
})
test.forEach(tests=>{
    apperOnScroll.observe(tests)
})
beader.forEach(bead=>{
    apperOnScroll.observe(bead)
})
bontent.forEach(bont =>{
    apperOnScroll.observe(bont)
})
insta.forEach(instagram=>{
    apperOnScroll.observe(instagram)
})
insta_content.forEach(content_insta=>{
    apperOnScroll.observe(content_insta)
})
pista.forEach(piiss=>{
    apperOnScroll.observe(piiss)
})
li.forEach(lists=>{
    apperOnScroll.observe(lists)
})
li2.forEach(lists2=>{
    apperOnScroll.observe(lists2)
})




