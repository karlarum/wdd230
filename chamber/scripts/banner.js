document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const weekDay = dayOfWeek >= 1 && dayOfWeek <= 3;

    if (weekDay) {
        const banner = document.getElementById('banner');
        if (banner) {
            banner.style.display = 'block';

            const closeButton = banner.querySelector('#close-banner');
            if (closeButton) {
                closeButton.addEventListener('click', function () {
                    banner.style.display = 'none';
                });
            }
        }
    }
});