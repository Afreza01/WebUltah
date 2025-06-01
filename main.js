window.addEventListener("load", function () {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 2000); // delay 2 detik
  });
  
  const text = "HAPPY BIRTHDAY";
const typingText = document.getElementById("typing-text");
const button = document.querySelector(".button");

let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text[index];
    index++;
    setTimeout(type, 300); // delay per huruf 150ms
  } else {
    // setelah selesai ketik, munculkan tombol
    button.style.opacity = 1;
  }
}

type();

