const boxes = document.querySelectorAll('.collections__text');

const checkBoxes = () => {
    const triger = (window.innerHeight / 5) * 4;
    for (const box of boxes) {
        const topOfBox = box.getBoundingClientRect().top;
        if (topOfBox < triger) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);


/*document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(function() {
      document.body.style.transition = "opacity 1.5s ";
      document.body.style.opacity = 1;
    }, 100);
});*/