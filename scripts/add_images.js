const drawingList = [];

function addPng(element, image_start, image_end, url) {
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
function addJpg(element, image_start, image_end, url) {
    for (let i = image_start; i <= image_end; i++) {
        const image = document.createElement('img');
        image.id = i;
        image.classList.add('image');
        image.src = url + i + ".jpg";
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
    const numBlobs = 10;

    for (let i = 1; i <= numBlobs; i++) {
        const blob = document.createElement('img');
        blob.className = 'blob';
        blob.src = url + i + '.png';
        document.getElementById('blob-holder').appendChild(blob);
    }
}

// function wolfBox() {
//     const wolfBox = document.createElement('div');
//     const wolfHeader = document.createElement('h2');
//     const wolfText = document.createElement('h4');
//     wolfBox.classList = [];
//     wolfBox.id = 'wolf-box';
//     wolfBox.style.left = '0px';
//     wolfBox.style.position = 'absolute'
//     wolfText.innerText = "One project that brought me immense joy was the Warren Wolf panel project during my senior year of high school. I volunteered to design and develop nine 6 by 3 ft. mobile murals for Warren Wolf Elementary School in Brick, New Jersey. Having attended the school in my early years, the project was deeply meaningful to me.The administration's broad guidelines—minimal text, portrait orientation, & themes depicting everyday life—prompted a creative challenge. It was a delightful experience brainstorming and translating these themes into visually appealing murals. This project refined my artistic skills but also underscored the profound influence art can have on people.The positive reception from students and administrators, who remembered me from my time there, highlighted the impactful role of art in connecting with my community. Giving back to the place that shaped my early years and contributing lasting artwork to the school environment made the project rewarding."
//     wolfHeader.innerText = 'Warren Wolf Project:';

//     const img = document.getElementById('7');
//     const rect = img.getBoundingClientRect();
//     wolfBox.style.top = rect.top + window.scrollY;

//     wolfBox.appendChild(wolfHeader);
//     wolfBox.appendChild(wolfText);
//     document.body.appendChild(wolfBox);
// }


addPng(document.getElementById('drawings-holder'), 1, 34, "resources/drawings/drawing");
addJpg(document.getElementById('mural-right'), 1, 11, "resources/murals/mural")
addPng(document.getElementById('sketches-holder'), 1, 20, "resources/sketches/sketch");
addPng(document.getElementById('poster-image-holder'), 1, 8, "resources/posters/poster");
// addJpg(document.getElementById('photography-right'), 1, 15, "resources/photography/photography");
addBlobs();

wolfBox();