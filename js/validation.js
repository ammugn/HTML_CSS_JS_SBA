
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

   
function Register(inputText){


}

  