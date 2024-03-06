function expandImage(imageSrc, description) {
    const overlay = document.getElementById('overlay');
    const expandedImage = document.getElementById('expanded-image');
    const expandedImg = document.getElementById('expanded-img');
    const imageDescription = document.getElementById('image-description');

    expandedImg.src = imageSrc;
    imageDescription.textContent = description;
    overlay.style.display = 'block';
    expandedImage.style.display = 'block';
}

function closeImage() {
    const overlay = document.getElementById('overlay');
    const expandedImage = document.getElementById('expanded-image');

    overlay.style.display = 'none';
    expandedImage.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImage();
    }
});
