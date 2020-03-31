const name = document.querySelector('#firstName');
const lastname = document.querySelector('#lastName');
const email = document.querySelector('#email');
const submit = document.querySelector('.submit');

submit.addEventListener('click', function (ev) {
   ev.preventDefault();
   let n = name.value;
   let l = lastname.value;
   let e = email.value;
   localStorage.setItem("first-name",n);
   localStorage.setItem("last-name",l);
   localStorage.setItem("email",e);
   window.location.href = "home-page.html";
});