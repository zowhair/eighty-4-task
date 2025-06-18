document.addEventListener('DOMContentLoaded', function() {
    const carouselWrapper = document.querySelector('[js-custom-video-carousel]');
    const muteButton = carouselWrapper.querySelectorAll('[js-speaker-button]');

    muteButton.forEach(volBtn => {
        volBtn.addEventListener('click', function({currentTarget}) {
        currentTarget.classList.toggle('muted');
        const videoWrapper = volBtn.closest('[js-video-wrapper]');

        if(currentTarget.classList.contains('muted')) {
            videoWrapper.querySelector('video').muted = true
        } else {
            videoWrapper.querySelector('video').muted = false
        }
    })
    })
})