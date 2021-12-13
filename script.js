window.onload=function()
{
    var btn = document.getElementById('popupimg');
    var window = document.getElementById('window');
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        btn.style.display = 'none';
        window.style.display = 'none';

    });
}