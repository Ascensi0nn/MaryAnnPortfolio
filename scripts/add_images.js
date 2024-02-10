const drawingList = [];

function addDrawings(element, image_start, image_end, url) {
    for (let i = image_start; i <= image_end; i++) {
        const image = document.createElement('img');
        image.classList.add('image', 'drawings');
        image.src = url + i + ".png";
        image.addEventListener('click', () => {
            if (image.classList.contains('open')) {
                image.classList.remove('open');
            }
            else {
                setAllClosed();
                image.classList.add('open');
            }
        });
        drawingList.push(image);
        element.appendChild(image);
    }
}

function setAllClosed() {
    for (let drawing of drawingList) {
        drawing.classList.remove('open');
    }
}

addDrawings(document.getElementById('drawings-holder'), 1, 34, "resources/drawings/drawing");