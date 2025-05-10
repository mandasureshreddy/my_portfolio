function home(){
  let home=document.getElementById('Navbar')
  home.scrollIntoView({behavior:'smooth'})
}
function projects(){
  let Projects=document.getElementById("project-section_heading")
  Projects.scrollIntoView({behavior:'smooth'})
}
function about(){
let about=document.getElementById('about-card')
about.scrollIntoView({behavior:'smooth'})
}
function contact(){
  let contact=document.getElementById('footer-section')
  contact.scrollIntoView({behavior:'smooth'})
}
function View_my_work(){
    let view=document.getElementById('project-section')
    view.scrollIntoView({behavior:'smooth'})
}
window.addEventListener('load', () => {
  const text = document.getElementById('profile_Info');
  if (text) {
    text.classList.add('visible');
  }
});