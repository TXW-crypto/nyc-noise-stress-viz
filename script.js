// script.js
document.addEventListener("DOMContentLoaded", () => {
  const bubbles = document.querySelectorAll(".noise-bubble");

  bubbles.forEach((bubble) => {
    const noiseLevel = parseFloat(bubble.dataset.noise || "0.5");
    // 噪音越大，动画越快
    const speed = 2 - noiseLevel; // 简单映射成 0.0~2.0 秒
    bubble.style.setProperty("--pulse-speed", `${speed}s`);

    bubble.addEventListener("mouseenter", () => {
      bubble.classList.add("is-active");
    });

    bubble.addEventListener("mouseleave", () => {
      bubble.classList.remove("is-active");
    });
  });
});
