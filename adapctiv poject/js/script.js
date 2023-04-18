let username = null;

// Проверяем, есть ли имя пользователя в localStorage
if (localStorage.getItem('username')) {
  username = localStorage.getItem('username');
  console.log(`Welcome back, ${username}!`);
  let header = document.querySelector('.header');
  let h1 = document.createElement("h1");
  h1.textContent = `добро пожаловать ${username}`;
  h1.style.display = "flex";
  h1.style.justifyContent = "center";
} else {
  // Если имя пользователя не сохранено в localStorage, запрашиваем его
  username = prompt("Please enter your name:");
          
  if (username) {
    // Сохраняем имя пользователя в localStorage
    localStorage.setItem('username', username);
              
    console.log(`Hello, ${username}!`);
  } else {
    console.log("Username not provided");
  }
}
$(function() {
  $('article h2').click(function() {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
  });
});
$(function() {
  $('article h3').click(function() {
      $(this).next().slideToggle();
      $(this).toggleClass('active1');
  });
});
// Get the hostname
// Получаем имя хоста
const nameHost = window.location.hostname;
const protocol = window.location.protocol;

// Если протокол равен "file:", используем "localhost" в качестве имени хоста
const host = (protocol === "file:") ? "localhost" : nameHost;

// Получаем IP-адрес, отбрасывая порт, если он указан
const ipAddress = (host.match(/\d+\.\d+\.\d+\.\d+/) || [])[0];

console.log("IP-адрес: ", ipAddress);
