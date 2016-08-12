$( document ).ready(function() {

  var i;
//  var modal = $("#Boxmodal").val();

  for(i=1;i<=localStorage.length;i++)

  {

    var keyvalue="Employee"+i.toString();

    var details = localStorage.getItem(keyvalue);

    logindetails = JSON.parse(details);

    $(".names").append("<input type='radio' name='employee' value="+ logindetails.name +">"+logindetails.name+"<br/>");

  }

 $('input[name=employee]').change(function(){

       var selected = $("input[type='radio'][name='employee']:checked");
       console.log(selected.val());
    //   modal.style.display = "block";
    //    $('#Boxmodal').show();

        for(i=1;i<=localStorage.length;i++)

        {

          var keyvalue="Employee"+i.toString();

          var details = localStorage.getItem(keyvalue);

          logindetails = JSON.parse(details);

          if(selected.val() == logindetails.name)
          {
              $('#Boxmodal').show();
            // $('#Content').html(details);
            $('#Content').html("Name: "+logindetails.name+"<br/>"+
                                "Address: "+logindetails.address+"<br/>"+
                                "PIN: "+logindetails.pincode+"<br/>"+
                              "Age: "+logindetails.age+"<br/>"+
                            "Nationality: "+logindetails.nationality+"<br/>"+
                          "Gender:  "+logindetails.gender+"<br/>"+
                        "Mailid:  "+logindetails.mailid+"<br/>");
          }
   }
  });

   $("#close").click(function() {
    $('#Boxmodal').hide();
    });
  });
