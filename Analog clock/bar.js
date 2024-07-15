// JavaScript for dropdown menu
document.querySelectorAll('.navbar > a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.nextElementSibling.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        item.nextElementSibling.style.display = 'none';
    });
});
