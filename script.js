
    // Initialize the animation observer for the news section
    document.addEventListener('DOMContentLoaded', function() {
        const newsSection = document.querySelector('#corporate-news');
        if (newsSection) {
            observer.observe(newsSection);
        }
    });
    