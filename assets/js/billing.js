let menuButton = document.querySelector(".button-menu");
let container = document.querySelector(".main-container");
let pageContent = document.querySelector(".card-section");
let responsiveBreakpoint = 991;

if (window.innerWidth <= responsiveBreakpoint) {
  container.classList.add("nav-closed");
}

menuButton.addEventListener("click", function () {
  container.classList.toggle("nav-closed");
});

pageContent.addEventListener("click", function () {
  if (window.innerWidth <= responsiveBreakpoint) {
    container.classList.add("nav-closed");
  }
});


window.addEventListener("resize", function () {
  if (window.innerWidth > responsiveBreakpoint) {
    container.classList.remove("nav-closed");
  }
});

const downArrow = document.getElementById("downarrow")
const upArrow = document.getElementById("uparrow")
const showUl = document.getElementById("showul")

downArrow.addEventListener("click", () =>{
  showUl.classList.add("showContent")
  downArrow.style.display = "none"
  upArrow.style.display = "block"
})
upArrow.addEventListener("click", () =>{
  showUl.classList.remove("showContent")
  downArrow.style.display = "block"
  upArrow.style.display = "none"
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoview({
      behavior: 'smooth'
    })
  })
})


const logOut = document.getElementById("logOut");
logOut.addEventListener("click" , () => {
  smoothRedirect('index.html')
})
function smoothRedirect(url) {
  document.body.classList.add('fade-out');
  setTimeout(() => {
      window.location.href = url;
  }, 500); // Duration should match the CSS transition time
}