document.addEventListener("DOMContentLoaded", function() {
  const visibleCharCount = 100;


  document.querySelectorAll(".card-text").forEach((cardText) => {
    const fullText = cardText.innerText;

    if (fullText.length > visibleCharCount) {
      const visibleText = fullText.slice(0, visibleCharCount);
      const hiddenText = fullText.slice(visibleCharCount);

      cardText.innerHTML = `
        ${visibleText}<span class="dots">...</span> <span class="more-text" style="display: none;">${hiddenText}</span>
      `;
    }
  });

var y = 5
var x = (y<4) ? 'less' : 'greater'


  document.querySelectorAll(".card-link").forEach((button) => {
    button.addEventListener("click", function() {
      const cardBody = button.closest(".card-body");
      const moreText = cardBody.querySelector(".card-text .more-text");
      const dots = cardBody.querySelector(".card-text .dots");

      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none"
        button.innerHTML = "Less...";
      } else {
        moreText.style.display = "none";
        dots.style.display = "inline"
        button.innerHTML = "More...";
      }
    });
  });
});
