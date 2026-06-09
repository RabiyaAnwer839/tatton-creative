const hamburger = document.getElementById('hamburger');
const navlinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const btn = document.querySelector('.btn-submit')
const name = document.getElementById('name')
const email = document.getElementById('email')
const brief = document.getElementById('brief')
const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const briefError = document.getElementById('brief-error')

hamburger.addEventListener ('click', () => {
navlinks.classList.toggle("open")
}) ;
window.addEventListener('scroll',() =>{
 if( window.scrollY > 50 ){
return  nav.classList.add('scrolled')
}
 else {
    return nav.classList.remove('scrolled')
 }
});
btn.addEventListener('click', ()=>{
 if (name.value.trim () === ""){
   nameError.textContent ="Full Name is required"
 }else{
   nameError.textContent = ""
 }
 if(email.value.trim() === ""){
   emailError.textContent = "Email is required"
 }else if (!email.value.includes('@')) {
  emailError.textContent = 'Please enter a valid email'
}else{
   emailError.textContent =""
 }
 if(brief.value.trim() ===""){
   briefError.textContent = "breif is required"
 }else{
   briefError.textContent=""
 }
})
