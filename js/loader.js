
// Constants
const pageURL = 'page.html';

// Load new page
window.addEventListener('load', function loadMainPage(event) {
    window.removeEventListener(event.type, loadMainPage);
    let req = new XMLHttpRequest();
    // DOM animatables
    let percentElem = document.getElementById('client_percent');
    let clientRow0 = document.getElementById('client_row_0');
    let clientRow1 = document.getElementById('client_row_1');
    let clientRow2a = document.getElementById('client_row_2a');
    let clientRow2b = document.getElementById('client_row_2b');
    let clientRow3 = document.getElementById('client_row_3');
    let clientRow4 = document.getElementById('client_row_4');
    // Event listeners
    req.addEventListener('load', (event) => {
        // Replace page content
        console.log('request complete');
    });
    req.addEventListener('progress', (event) => {
        let progress = 100 * event.loaded / event.total;
        progress = progress.toFixed(0);
        // Format percent output
        if (progress < 10) {
            percentElem.innerText = '  ' + progress;
        } else if (progress < 100) {
            percentElem.innerText = ' ' + progress;
        } else {
            percentElem.innerText = '100';
        }
        // Format screen output
        if (progress > 20) clientRow0.classList.add('filled');
        if (progress > 40) clientRow1.classList.add('filled');
        if (progress > 60) {
            clientRow2a.classList.add('filled');
            clientRow2b.classList.add('filled');
        }
        if (progress > 80) clientRow3.classList.add('filled');
        if (progress == 100) clientRow4.classList.add('filled');
    });

    req.open('GET', pageURL, true);
    req.responseType = 'document';
    req.send();
});
