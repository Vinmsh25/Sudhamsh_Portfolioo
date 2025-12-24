// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.onclick = e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  };
});

// Reveal Animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:.2});

document.querySelectorAll(".section").forEach(s=>observer.observe(s));
