/*Name this external file gallery.js*/

function upDate(previewPic) {
    // 3a & 3b: Проверка срабатывания события и вывод информации о previewPic
    console.log("Событие наведения сработало");
    console.log("Источник изображения: " + previewPic.src);
    console.log("Альтернативный текст: " + previewPic.alt);

    // Получаем элемент с id = "image"
    let imageDiv = document.getElementById('image');

    // 3c: Изменяем текст элемента на alt-текст выбранного изображения
    imageDiv.innerHTML = previewPic.alt;

    // 3e: Изменяем фоновое изображение (background-image)
    // Используем url() для корректной подстановки пути
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

	function unDo() {
    // 4a: Сбрасываем фоновое изображение обратно на исходное (пустое)
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";

    // 4b: Возвращаем исходный текст
    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    console.log("Курсор убран, состояние сброшено");
}