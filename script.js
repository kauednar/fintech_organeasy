document.querySelector('.toggle-visibility').addEventListener('click', function() {
    const balanceAmount = document.querySelector('.amount');
    if (balanceAmount.style.display === 'none') {
        balanceAmount.style.display = 'block';
    } else {
        balanceAmount.style.display = 'none';
    }
});
