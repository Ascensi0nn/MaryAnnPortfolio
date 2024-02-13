const drawingList = [];

function addDrawings(element, image_start, image_end, url) {
    for (let i = image_start; i <= image_end; i++) {
        const image = document.createElement('img');
        image.classList.add('image', 'drawings');
        image.src = url + i + ".png";
        image.addEventListener('click', () => {
            if (image.classList.contains('open')) {
                image.classList.remove('open');
                removeArrows();
            }
            else {
                setAllClosed();
                image.classList.add('open');
                addArrows();
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

function addBlobs() {
    const url = 'resources/blobs/blob';
    const numBlobs = 11;

    for (let i = 1; i <= numBlobs; i++) {
        const blob = document.createElement('img');
        blob.className = 'blob';
        blob.src = url + i + '.png';
        document.getElementById('blob-holder').appendChild(blob);
    }
}


addDrawings(document.getElementById('drawings-holder'), 1, 34, "resources/drawings/drawing");
addDrawings(document.getElementById('sketches-holder'), 1, 20, "resources/sketches/sketch");

addBlobs();