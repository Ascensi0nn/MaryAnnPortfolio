function scrollView(button, element) {
    document.getElementById(button).addEventListener('click', () => {
        document.getElementById(element).scrollIntoView({behavior: "smooth"});
    });
}

scrollView('about', 'about-holder');
scrollView('drawings', 'drawings-holder');
scrollView('murals', 'murals-holder');
scrollView('sketches', 'sketches-holder');
scrollView('photography', 'photography-holder');
scrollView('posters', 'posters-holder');
scrollView('information', 'information-holder');