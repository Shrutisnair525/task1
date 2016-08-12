
$("#submitbutton").click(function(){

var sitename = $("#sitename").val();
var siteaddress = $("#siteaddress").val();
var sitepin = $("#sitepin").val();
var siteph= $("#siteph").val();
var siteage = $("#siteage").val();
var sitenation = $("#sitenation").val();
var sitecollege = $("#sitecollege").val();
var siteuniversity = $("#siteuniversity").val();
var percent1 = $("#percent1").val();
var site12school = $("#site12school").val();
var siteboard1 = $("#siteboard1").val();
var percent2 = $("#percent2").val();
var school = $("#site10school").val();
var siteboard2 = $("#siteboard2").val();
var percent3 = $("#percent3").val();
var sitegender = $("input[name=Gender]:checked").val();
var performance2010 = $( "#2010 option:selected" ).val();
var performance2011 = $( "#2011 option:selected" ).val();
var performance2012 = $( "#2012 option:selected" ).val();
var performance2013 = $( "#2013 option:selected" ).val();
var performance2014 = $( "#2014 option:selected" ).val();
var performance2015 = $( "#2015 option:selected" ).val();
var sitemail = $("#mailid").val();
var sitepassword = $("#psw").val();

$("#err_mail").hide();
$("#err_psw").hide();

if( localStorage.length ==0 ){

  var newemployeejson = JSON.stringify(registeredemployee[0]);
  localStorage.setItem("Employee"+1, newemployeejson);

  console.log(newemployeejson);

  newemployeejson = JSON.stringify(registeredemployee[1]);
  localStorage.setItem("Employee"+2, newemployeejson);

}

var atpos = sitemail.indexOf("@");
var dotpos = sitemail.lastIndexOf(".");

if (atpos<1 || dotpos<atpos+2 || dotpos+2>=sitemail.length) {


       $("#err_mail").show();
       $("#err_mail").html("*Please enter a valid mailid*");
        return false;
}

else if (sitepassword.length < 6) {


  $("#err_psw").show();
  $("#err_psw").html("*Password should consists of atleast 6 characters*");
  return false;

}

else{
  var i;
  for(i=1;i<=localStorage.length;i++)

  {

  var keyvalue="Employee"+i.toString();

  var details = localStorage.getItem(keyvalue);

  logindetails = JSON.parse(details);

  if(sitemail == logindetails.mailid)
   {
     $("#err_mail").show();
     $("#err_mail").html("*Email id already exists*");
     return false;

    }
  }
}

var registeredemployeesite =
      {"name": sitename,
        "address":siteaddress,
        "pincode":sitepin,
        "phone no": siteph,
        "age" : siteage,
        "gender":sitegender,
        "nationality":sitenation,
        "education":{ "Graduation":{ sitecollege,
                                     "university" :siteuniversity,
                                     "percentage" : percent1
                                   },
                       "twelth":{ "school":site12school,
                                   "board":siteboard1,
                                   "percentage" :percent2
                                 },
                       "tenth":{ "school":site10school,
                                 "board":siteboard2,
                                 "percentage" :percent3
                               }
                     },
         "performance":{ "2010": performance2010,
                         "2011": performance2011,
                         "2012": performance2012,
                         "2013": performance2013,
                         "2014": performance2014,
                         "2015": performance2015
         },
         "mailid":sitemail,
         "password":sitepassword
       };

      var newemployee = JSON.stringify(registeredemployeesite);

      var count = localStorage.length;
      count++;
      localStorage.setItem("Employee"+count, newemployee);

      window.location = "employeespace.html";

  });
