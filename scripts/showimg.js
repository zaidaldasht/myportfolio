document.addEventListener("DOMContentLoaded", () => {

    const images = {
        joddb: [
            { src: "img/moments/jodb15.jpg" },
            { src: "img/moments/jodb11.jpg" },
            { src: "img/moments/jodb12.jpg" },
            { src: "img/moments/jodb13.jpg" },
            { src: "img/moments/jodb14.jpg" },
            { src: "img/moments/jodb16.jpg" },
            { src: "img/moments/jodb17.jpg" },
            { src: "img/moments/jodb18.jpg" },
            { src: "img/moments/jodb19.jpg" },
            { src: "img/moments/jodb10.jpg" },
            { src: "img/moments/jodb9.jpg" },
            { src: "img/moments/jodb8.jpg" },
            { src: "img/moments/jodb7.jpg" },
            { src: "img/moments/jodb6.jpg" },
            { src: "img/moments/jodb5.jpg" },
            { src: "img/moments/jodb4.jpg" },
            { src: "img/moments/jodb3.jpg" },
            { src: "img/moments/jodb2.jpg" },
        ],
        orange: [
            { src: "img/moments/orange5.jpg" },
            { src: "img/moments/orange6.jpg" },
            { src: "img/moments/orange7.jpg" },
            { src: "img/moments/orange8.jpg" },
            { src: "img/moments/orange9.jpg" },
            { src: "img/moments/orange10.jpg" },
            { src: "img/moments/orange4.jpg" },
            { src: "img/moments/orange3.jpg" },
            { src: "img/moments/orange2.jpg" },
            { src: "img/moments/orange1.jpg" },
        ],
        basicbionic: [
            { src: "img/moments/basicbionic1.jpg" },
            { src: "img/moments/basicbionic2.jpg" },
            { src: "img/moments/basicbionic3.jpg" },
            { src: "img/moments/basicbionic4.jpg" },
            { src: "img/moments/basicbionic5.jpg" }
        ],
        joddb3: [
            { src: "img/certificates/jodb.jpg" },
            { src: "img/moments/jodb2.jpg" },
            { src: "img/moments/jodb5.jpg" },
            { src: "img/moments/jodb6.jpg" },
            { src: "img/moments/jodb7.jpg" }
        ],
        minesweeper: [
            { src: "img/certificates/appretiation minesweeper.jpg" },
            { src: "img/certificates/minesweeper.jpg" },
            { src: "img/moments/minesweeper6.jpg" },
            { src: "img/moments/minesweeper5.jpg" },
            { src: "img/moments/minesweeper1.jpg" },
            { src: "img/moments/minesweeper2.jpg" },
            { src: "img/moments/minesweeper3.jpg" },
            { src: "img/moments/minesweeper4.jpg" },
        ],
        firefighter: [
            { src: "img/certificates/appretiation firefighter.jpg" },
            { src: "img/moments/firefighter10.jpg" },
            { src: "img/moments/firefighter7.jpg" },
            { src: "img/moments/firefighter8.jpg" },
            { src: "img/moments/firefighter1.jpg" },
            { src: "img/moments/firefighter2.jpg" },
            { src: "img/moments/firefighter3.jpg" },
            { src: "img/moments/firefighter4.jpg" },
            { src: "img/moments/firefighter5.jpg" },
            { src: "img/moments/firefighter6.jpg" },
            { src: "img/moments/firefighter9.jpg" },
        ],
        sumo: [
            { src: "img/certificates/sumo7.jpg" },
            { src: "img/moments/sumo1.jpg" },
            { src: "img/moments/sumo2.jpg" },
            { src: "img/moments/sumo5.jpg" },
            { src: "img/moments/sumo3.jpg" },
            { src: "img/moments/sumo4.jpg" },
            { src: "img/certificates/sumo8.jpg" },
            { src: "img/certificates/sumo9.jpg" },
        ],
        nasa: [
            { src: "img/certificates/NASA Space Apps Challenge-1.jpg" },
            { src: "img/moments/nasa1.jpg" },
            { src: "img/moments/nasa2.jpg" },
            { src: "img/moments/nasa3.jpg" },
        ],
        ras: [
            { src: "img/moments/ras1.jpg" },
            { src: "img/moments/ras2.jpg" },
            { src: "img/moments/ieeeday3.jpg" },
            { src: "img/moments/ai1.jpg" },
            { src: "img/moments/ai2.jpg" },
        ],

    };

    const showBtn = document.getElementById("showImagesBtn");
    const overlay = document.getElementById("overlay");
    const overlayGallery = document.getElementById("overlayGallery");
    const overlayClose = document.getElementById("overlayClose");

    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const modalClose = document.getElementById("modalClose");

    // Show overlay with all images
    document.querySelectorAll(".show-gallery").forEach(btn => {
        btn.addEventListener("click", () => {
            const galleryName = btn.getAttribute("data-gallery");
            const selectedImages = images[galleryName];

            overlayGallery.innerHTML = ""; // clear previous thumbnails

            selectedImages.forEach(img => {
                const imageEl = document.createElement("img");
                imageEl.src = img.src;
                imageEl.classList.add("preview-img");
                overlayGallery.appendChild(imageEl);
            });

            overlay.style.display = "block";
        });
    });

    // Event delegation for overlay images (works for dynamically added images)
    overlayGallery.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            modal.style.display = "block";
            modalImg.src = e.target.src;
        }
    });

    // Close overlay with ×
    overlayClose.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    // Close modal with ×
    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close overlay when clicking outside images
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });


    document.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG" && e.target.classList.contains("preview-img")) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
        }
    });

});
