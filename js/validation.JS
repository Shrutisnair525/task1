

function validateFunction() {

  var sitename,sitemail, sitepassword;

  document.getElementById("err_name").style.visibility="hidden";
  document.getElementById("err_mail").style.visibility="hidden";
  document.getElementById("err_psw").style.visibility="hidden";

  sitename = document.getElementById("Name").value;
  sitemail = document.getElementById("Email").value;
  sitepassword = document.getElementById("Password").value;

  var atpos = sitemail.indexOf("@");
  var dotpos = sitemail.lastIndexOf(".");

   if (sitename == ""){

    document.getElementById("err_name").style.visibility="visible";
    document.getElementById("err_name").innerHTML="*Please enter a name*";
  }

  else if (sitemail == ""){

    document.getElementById("err_mail").style.visibility="visible";
    document.getElementById("err_mail").innerHTML="*Please enter a valid mail id*";
  }
  //validating email

    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=sitemail.length) {


         document.getElementById("err_mail").style.visibility="visible";
         document.getElementById("err_mail").innerHTML="*Please enter a valid mailid*";
          return false;
  }

  else if (sitepassword == ""){

    document.getElementById("err_psw").style.visibility="visible";
    document.getElementById("err_psw").innerHTML="*Please enter a password*";
  }


else if (sitepassword.length < 6) {


    document.getElementById("err_psw").style.visibility="visible";
    document.getElementById("err_psw").innerHTML="*Password should consists of atleast 6 characters*";

    return false;

  }

//validating users using local storage
if((sitename!="")&&(sitemail!="")&&(sitepassword!=""))
{
  var i;
  var emp=0;

  for(i=1;i<=localStorage.length;i++)

{

  var keyvalue="Employee"+i.toString();

  var details = localStorage.getItem(keyvalue);

  logindetails = JSON.parse(details);

  if(sitemail == logindetails.mailid)
   {

    if(sitepassword == logindetails.password ){
      emp=1;
      window.location = "employeespace.html"
      }
    else {

            alert("Incorrect password");
            return false;
          }
  }
}
}

if(emp == 0)
{
      alert("No such employee is identified in the space");
}

}
