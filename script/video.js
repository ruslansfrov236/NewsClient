const imageContainer = document.getElementById('imageContainer');
const videoContainer = document.getElementById('videoContainer');
const cardinfo = document.querySelector(".card-amerika-info-body");
const video = document.getElementById('video');

function VidePlyer() {
    let timer;

    imageContainer.addEventListener('mouseenter', () => {
        timer = setTimeout(() => {
            videoContainer.style.display = 'block';
            cardinfo.style.display = 'none';

         
            video.play();
        }, 1000);
    });

    imageContainer.addEventListener('mouseleave', () => {
        clearTimeout(timer);
        videoContainer.style.display = 'none';
        cardinfo.style.display = 'block';

        video.pause();
    });
}

VidePlyer();
