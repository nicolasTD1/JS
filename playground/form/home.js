const greetings = document.createElement('h1');
document.body.appendChild(greetings);
const greet = `Hello ${localStorage.getItem('first-name')} ${localStorage.getItem('last-name')} welcome! Your registration was susccesfull using ${localStorage.getItem('email')}`;
greetings.innerHTML = greet;
localStorage.clear();