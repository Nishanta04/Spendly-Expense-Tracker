/* ------------------------------------------------------------------ */
/* Landing page: "See how it works" video modal (vanilla JS)           */
/* ------------------------------------------------------------------ */

(function () {
    var modal = document.getElementById('hz-how-modal');
    if (!modal) return;

    var openBtn = document.getElementById('hz-how-open');
    var iframe = document.getElementById('hz-how-video');
    // Only set on open and clear on close — clearing the src stops playback.
    var videoSrc = iframe.getAttribute('data-src');

    function openModal() {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('hz-no-scroll');
        iframe.src = videoSrc;
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('hz-no-scroll');
        iframe.src = '';
    }

    openBtn.addEventListener('click', openModal);

    // Close button and backdrop both carry data-hz-close
    modal.querySelectorAll('[data-hz-close]').forEach(function (el) {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
})();
