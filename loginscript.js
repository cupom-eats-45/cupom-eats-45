window.onload=function()
{
    var x = document.getElementById("useridInput");
    x.addEventListener("focus", myFocusFunction, true);
    x.addEventListener("blur", myBlurFunction, true);

    function myFocusFunction() {
        document.getElementById("btn").style.backgroundColor = "#3e9920";
    }

    function myBlurFunction() {
        document.getElementById("myInput").style.backgroundColor = "";
    }
}