function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

window.onscroll = () => {
    const topArrow = document.getElementById('top-arrow');
    topArrow.style.display = window.scrollY > 300 ? 'block' : 'none';
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
    const scrollImagesAccomplishment = document.querySelector("#accomplishments .scroll-images"); 
    const scrollImagesProject = document.querySelector("#projects .scroll-images");

    const leftButtonAccomplishment = document.querySelector("#accomplishments .left");
    const rightButtonAccomplishment = document.querySelector("#accomplishments .right");

    const leftButtonProject = document.querySelector("#projects .left");
    const rightButtonProject = document.querySelector("#projects .right");

    function checkScroll(scrollImages, leftButton, rightButton) {
        const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute("disabled", "true");
            rightButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute("disabled", "true");
            leftButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    }

    function leftScroll(scrollImages) {
        scrollImages.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    }

    function rightScroll(scrollImages) {
        scrollImages.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    }

    // Initialize scroll state
    checkScroll(scrollImagesAccomplishment, leftButtonAccomplishment, rightButtonAccomplishment);
    checkScroll(scrollImagesProject, leftButtonProject, rightButtonProject);

    // Add event listeners for scroll and resize
    scrollImagesAccomplishment.addEventListener("scroll", () => checkScroll(scrollImagesAccomplishment, leftButtonAccomplishment, rightButtonAccomplishment));
    scrollImagesProject.addEventListener("scroll", () => checkScroll(scrollImagesProject, leftButtonProject, rightButtonProject));

    // Attach scroll functions to buttons
    leftButtonAccomplishment.addEventListener("click", () => leftScroll(scrollImagesAccomplishment));
    rightButtonAccomplishment.addEventListener("click", () => rightScroll(scrollImagesAccomplishment));

    leftButtonProject.addEventListener("click", () => leftScroll(scrollImagesProject));
    rightButtonProject.addEventListener("click", () => rightScroll(scrollImagesProject));
});
