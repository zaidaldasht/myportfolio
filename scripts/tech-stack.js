const logoSlider = document.getElementById("logoSlider");
const logos = logoSlider.querySelector(".logos");

// Duplicate logos for seamless scrolling
logos.innerHTML += logos.innerHTML;

// Determine animation speed based on screen width
function setAnimationSpeed() {
  if (window.innerWidth <= 480) {
    logos.style.animationDuration = "2s"; // Fastest on small phones
  } else if (window.innerWidth <= 768) {
    logos.style.animationDuration = "3s"; // Medium on tablets
  } else {
    logos.style.animationDuration = "10s"; // Slower on desktop
  }
}

// Apply on load and on resize
setAnimationSpeed();
window.addEventListener("resize", setAnimationSpeed);

// Pause animation on hover (only for desktop)
if (window.matchMedia("(hover: hover)").matches) {
  logoSlider.addEventListener("mouseenter", () => {
    logos.style.animationPlayState = "paused";
  });

  logoSlider.addEventListener("mouseleave", () => {
    logos.style.animationPlayState = "running";
  });
}