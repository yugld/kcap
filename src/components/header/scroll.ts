document.addEventListener("DOMContentLoaded", () => {
    const headerScroll = document.getElementById("header");
    if (headerScroll) {
        let currentY = window.scrollY;
        let previousY = currentY;
        const scrollHandler = () => {
            previousY = currentY;
            currentY = window.scrollY;
            if (currentY > 50) {
                // делаем фон меню непрозрачным
                headerScroll.classList.add("bg-white");
            } else {
                // возвращаем прозрачность
                headerScroll.classList.remove("bg-white");
            }
            if (currentY > 30 && currentY >= previousY) {
                // скрываем меню
                headerScroll.classList.add("-translate-y-full");
            } else {
                // показываем меню
                headerScroll.classList.remove("-translate-y-full");
            }
        };
        window.addEventListener("scroll", scrollHandler);
        scrollHandler();
    }
});
