if (typeof window !== "undefined" && typeof document !== "undefined") {
    const modal = document.getElementById("affiliate-modal");
    const closeButton = document.getElementById("close-modal");
  
    if (modal && closeButton) {
      closeButton.addEventListener("click", () => {
        modal.style.display = "none";
      });
  
      globalThis.addEventListener("mousemove", (event: MouseEvent) => {
        if (event.clientY < 50) {
          modal.style.display = "block";
        }
      });
    }
  }
  