

addEventListener('DOMContentLoaded', () => {
    try {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
        document.querySelector('.button-back').onclick = () => {
            window.location.href = '/'
        }
    } catch {}
})
