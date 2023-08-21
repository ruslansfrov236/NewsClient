const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');
const search = document.querySelector(".search");
const colalti = document.querySelector(".col-6");
const colbesh = document.querySelector(".col-5");
const signIn = document.getElementById("signIn");
const play =document.getElementById('play')
const magnifying = document.querySelector(".fa-magnifying-glass");

magnifying.addEventListener("click", () => {
    search.style.display = search.style.display === 'none' ? 'flex' : 'none';
});


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    hamburger.classList.toggle('toggle');
});


signIn.addEventListener("click", () => {
    colalti.style.display = colalti.style.display === 'none' ? 'block' : 'none';
    colbesh.style.display = colalti.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleEye = document.getElementById('toggleEye');
    const passwordInput = document.getElementById('password');
 
      toggleEye.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleEye.classList.remove('fa-eye-slash');
          toggleEye.classList.add('fa-eye');
        } else {
          passwordInput.type = 'password';
          toggleEye.classList.add('fa-eye-slash');
          toggleEye.classList.remove('fa-eye');
        }
      });
   


 
  });
 

