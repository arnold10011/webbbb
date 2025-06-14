// AOS инициализация
AOS.init({
  duration: 1000,
  once: true,
});

// Тема: светлая/тёмная
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Кнопка наверх
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Кастомное уведомление
function showCustomAlert(message) {
  const alertBox = document.getElementById("customAlert");
  alertBox.textContent = message;
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 4000);
}

// Обработка формы
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  showCustomAlert("Спасибо! Ваше сообщение отправлено.");
  document.getElementById("contactForm").reset();
});

// Unity-style Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const loadingText = document.querySelector(".loading-text");
  let percent = 0;

  const interval = setInterval(() => {
    percent += 1;
    loadingText.textContent = `Loading... ${percent}%`;
    if (percent >= 100) clearInterval(interval);
  }, 30);

  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 500);
  }, 3500); // немного дольше, чтобы успел дойти до 100%
});