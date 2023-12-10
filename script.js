var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Массив с путями к изображениям
var currentImageIndex = 0; // Индекс текущего изображения

var sliderImage = document.getElementById("sliderImage");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
var dots = document.getElementsByClassName("dot");

// Функция для обновления отображаемого изображения
function updateSlider() {
    sliderImage.src = images[currentImageIndex];

    // Установка активного класса для соответствующей точки
    for (var i = 0; i < dots.length; i++) {
        if (i === currentImageIndex) {
            dots[i].classList.add("active");
        } else {
            dots[i].classList.remove("active");
        }
    }
}

// Обработчик клика на кнопку "Предыдущее изображение"
prevButton.addEventListener("click", function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateSlider();
});

// Обработчик клика на кнопку "Следующее изображение"
nextButton.addEventListener("click", function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateSlider();
});

// Обработчик клика на точку
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentImageIndex = Array.prototype.indexOf.call(dots, this);
        updateSlider();
    });
}

// Инициализация слайдера
updateSlider();