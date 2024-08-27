// JavaScript to toggle the theme switch
document.getElementById('theme-toggle').addEventListener('click', function () {
    const isChecked = this.getAttribute('aria-checked') === 'true';
    this.setAttribute('aria-checked', !isChecked);
    document.body.classList.toggle('light-theme', !isChecked);
});

// for magnifying clicked images
document.querySelectorAll('.project-thumbnail').forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent the click event from bubbling up to the document
        event.stopPropagation();


        // Check if the clicked thumbnail is already enlarged
        if (this.classList.contains('clicked')) {
            // If it's already enlarged, remove the 'clicked' class to shrink it
            this.classList.remove('clicked');
        } else {
            // If it's not enlarged, first remove the 'clicked' class from all thumbnails
            document.querySelectorAll('.project-thumbnail').forEach(img => {
                img.classList.remove('clicked');
            });
            // Then add the 'clicked' class to the clicked thumbnail
            this.classList.add('clicked');
        }
    });
});

// Handle clicks outside of images
document.addEventListener('click', function() {
    // Remove the 'clicked' class from all thumbnails
    document.querySelectorAll('.project-thumbnail').forEach(img => {
        img.classList.remove('clicked');
    });
});