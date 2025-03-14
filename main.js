document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {
      Toolbar: {
          display: ["close", "prev", "next"]
      }
  });
});

Fancybox.bind("[data-fancybox]", {});

document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
});