document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("introPlayed")) {
        document.body.style.visibility = "visible";
        return;
    }

    const intro = document.createElement("div");
    Object.assign(intro.style, {
        position: "fixed",
        inset: "0",
        background: "var(--bg-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999",
        transition: "opacity 1s ease",
    });

    // Logo
    const logo = document.createElement("div");
    logo.innerHTML = `<span style="color: var(--accent-color); font-family: 'Satisfy', cursive;
 font-size:2.5rem; letter-spacing:2px;">
                      <span style="color:#00ffff;"><</span>
                      Zaid Aldasht
                      <span style="color:#00ffff;">/></span>
                    </span>`;
    logo.style.opacity = "0";
    logo.style.transform = "translateY(20px)";
    logo.style.transition = "all 1.5s ease";

    // Triangle shape
    const shape = document.createElement("div");
    Object.assign(shape.style, {
        width: "80px",
        height: "80px",
        background: "transparent",
        border: "3px solid #00ffff",
        marginTop: "40px",
        animation: "spin 2.5s ease-in-out infinite alternate",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
    });

    // Keyframes
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.2); }
      100% { transform: rotate(360deg) scale(1); }
    }
  `;
    document.head.appendChild(styleSheet);

    // Append
    intro.appendChild(logo);
    intro.appendChild(shape);
    document.body.appendChild(intro);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.remove();
            document.body.style.overflow = "auto";
            sessionStorage.setItem("introPlayed", "true");
        }, 1000);
    }, 3000);
    document.body.style.visibility = "visible";

});
