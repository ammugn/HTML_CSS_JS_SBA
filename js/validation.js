/*function ValidateEmail(inputText)
{
var uname=document.getElementById('uname').value;
sessionStorage.setItem("UNAME",uname);
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
//Login();
document.loginform.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.getElementById('email').innerHTML=" ";
document.loginform.email.focus();
return false;
}
}
*/
function ValidateEmail(inputText){
   
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){       
        document.getElementById('message').style.visibility="hidden";
        document.loginform.action = "views/home.html";
        var uname=document.getElementById('uname').value;
        sessionStorage.setItem("UNAME",uname);
        return true;
        
   }
   else{
    document.getElementById('message').style.visibility="visible";
    document.getElementById('message').innerHTML="Invalid email address";
    return false;
       }
   }

  