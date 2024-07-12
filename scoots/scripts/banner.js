document.addEventListener('DOMContentLoaded', function () {
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.display = 'block';

        const closeButton = banner.querySelector('#close-banner');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                banner.style.display = 'none';
            })
        }
    }
})