document.querySelectorAll("#testimonials img").forEach(img => {
    img.addEventListener("mouseover", () => {
      const modal = document.querySelector(".modal");
      modal.style.display = "block";
      modal.style.top = `${img.offsetTop + img.offsetHeight}px`;
      modal.style.left = `${img.offsetLeft}px`;
    });
    img.addEventListener("mouseout", () => {
      const modal = document.querySelector(".modal");
      modal.style.display = "none";
    });
  });
  