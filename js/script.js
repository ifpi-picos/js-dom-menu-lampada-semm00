// Menu mobile
// Menu mobile
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("mobile");
}

// Imagem 1
const imagem1 = document.getElementById("lampada-01");
imagem1.addEventListener("click", function () {
  console.log(imagem1.src);
  if (imagem1.src.endsWith("lampada.jpg")) {
    imagem1.src = "img/lampada-on.jpg";
  } else {
    imagem1.src = "img/lampada.jpg";
  }
});

// Imagem 2
const imagem2 = document.getElementById("lampada-02");
imagem2.addEventListener("mouseover", function () {
  console.log(imagem2.src);
  imagem2.src = "img/lampada-on.jpg";
});

imagem2.addEventListener("mouseout", function () {
  console.log(imagem2.src);
  imagem2.src = "img/lampada.jpg";
});


