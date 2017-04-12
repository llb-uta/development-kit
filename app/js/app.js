document.addEventListener('DOMContentLoaded', () => {
    const fullscreen = document.querySelector('.fullscreen');
    const tile = document.querySelector('.tile');

    console.log('data');
    llb_app.addListener('window_state', (data) => {
        fullscreen.classList.toggle('active', data.fullscreen);
        tile.classList.toggle('active', !data.fullscreen);
    });
})