document.addEventListener("DOMContentLoaded", () => {
    const gotoPage2Btn = document.getElementById("goto-page2");
    const gotoPage1Btn = document.getElementById("goto-page1");

    if (gotoPage2Btn) {
        gotoPage2Btn.addEventListener("click", () => {
            document.body.classList.add("fade-out");
            document.body.addEventListener("transitionend", () => {
                window.location.href = "page2.html";
            }, { once: true });
        });
    }

    if (gotoPage1Btn) {
        gotoPage1Btn.addEventListener("click", () => {
            document.body.classList.add("fade-out");
            document.body.addEventListener("transitionend", () => {
                window.location.href = "index.html";
            }, { once: true });
        });
    }
});

