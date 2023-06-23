// AOS Animation
AOS.init();


const myIcon = document.getElementById('youtube-icon')
const videoLink = document.getElementById('video-link')

myIcon.addEventListener("click", (e)=> {
   e.preventDefault()
   videoLink.classList.toggle('display-on')
   myIcon.classList.toggle('fa-circle-pause')
   
})





