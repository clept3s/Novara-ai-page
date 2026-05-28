function showPage(pageName) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('downloads-page').style.display = 'none';

    if (pageName === 'home') {
        document.getElementById('home-page').style.display = 'block';
    } else if (pageName === 'downloads') {
        document.getElementById('downloads-page').style.display = 'block';
    }
}
console.log("Script loaded!");
