// This file contains the JavaScript code for the website. It handles interactivity and dynamic content on the web page.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example of adding interactivity
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});