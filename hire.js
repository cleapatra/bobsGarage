//SEARCH AND CARS FILTERS


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//show form and change select option based on button clicked
  function showForm() {
    document.getElementById("form_container").style.display = "block";
};

  function capturOrangeBtn() {
      document.getElementById('myModal6').style.display="none";
      document.getElementById("main2").style.display = "block";
      $('select[name="carselected"]').find('option:contains("Renault Captur Orange")').attr("selected",true);

  };

  function capturBlueBtn() {
    document.getElementById('myModal').style.display ="none";
      document.getElementById("main2").style.display = "block";
      $('select[name="carselected"]').find('option:contains("Renault Captur Blue")').attr("selected",true);

  };

  function clioRedBtn() {
    document.getElementById('myModal2').style.display = "none";
      document.getElementById("main2").style.display = "block";
      $('select[name="carselected"]').find('option:contains("Renault Clio Red")').attr("selected",true);

  };

  function clioBlueBtn() {
    document.getElementById('myModal3').style.display="none";
      document.getElementById("main2").style.display = "block";
      $('select[name="carselected"]').find('option:contains("Renault Clio Blue")').attr("selected",true);

  };

  function leonBlueBtn() {
    document.getElementById('myModal4').style.display="none";
      document.getElementById("main2").style.display = "block";
      $('select[name="carselected"]').find('option:contains("Seat Leon Blue")').attr("selected",true);

  };

  function ibizaRedBtn() {
    document.getElementById('myModal5').style.display="none";
      document.getElementById("main2").style.display = "block";
      $('select[name="carselected"]').find('option:contains("Seat Ibiza Red")').attr("selected",true);

  };


//show all cars button
$(document).ready(function(){
$("#showall").click(function(){
  $(".carrental").find("div").fadeOut("fast");
    $(".carrental").find(".all").slideDown("slow");
      });
  });



//show user searchbar cars
$(document).ready(function(){
$("#search").click(function(){
    $(".carrental").find("div").fadeOut("fast");
      var txt = "." + $('#search-criteria').val().toLowerCase();
        $(".carrental").find(txt).slideDown("slow");
});
//search when user keypresses the enter key
$('#search-criteria').keypress(function(e){
      if(e.which == 13){//Enter key pressed
          $('#search').click();//Trigger search button click event
      }
  });
});
//search for cars with the small tag
$(document).ready(function(){
$("#searchSmall").click(function(){
  $(".carrental").find("div").fadeOut("fast");
    $(".carrental").find(".small").slideDown("slow");
});
});

//search for cars with the medium tag
$(document).ready(function(){
$("#searchMedium").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".medium").slideDown("slow");
});
});

//search for cars with the large tag
$(document).ready(function(){
$("#searchLarge").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".large").slideDown("slow");
});
});

//search for cars with the red tag
$(document).ready(function(){
$("#red").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".red").slideDown("slow");
});
});

//search for cars with the orange tag
$(document).ready(function(){
$("#orange").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".orange").slideDown("slow");
});
});

//search for cars with the blue tag
$(document).ready(function(){
$("#blue").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".blue").slideDown("slow");
});
});

//search for cars with the white tag
$(document).ready(function(){
$("#white").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".white").slideDown("slow");
});
});

//search for cars with the grey tag
$(document).ready(function(){
$("#grey").click(function(){
$(".carrental").find("div").fadeOut("Fast");
  $(".carrental").find(".grey").slideDown("slow");
});
});




///Cookies
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
///savecookie named "namecookie" this saves the first and last name as a single cookie
function savecookie(namecookie){

  setCookie(namecookie,document.forms["RentalForm"]["forename"].value + ',' + document.forms["RentalForm"]["surname"].value,7);
}
///displays the cookie named "namecookie" to act as a welcome message
function displayCookie(namecookie) {
	document.getElementById("displayname").innerHTML = 'Hello <b>' + getCookie(namecookie) + '</b>';
}

///savecookie named "nhirecookie"

function savehirecookie(hirefromcookie){

  setCookie(hirefromcookie,document.getElementById("from").value,7);
}

function displayhireCookie(hirefromcookie) {
	document.getElementById("displayhirefrom").innerHTML = 'Your Rental car will be available to collect from <b>' + getCookie(hirefromcookie) + '</b>';
}

///savecookie named "teammembercookie" this saves the first and last name as a single cookie

function saveteammembercookie(teammembercookie){

  setCookie(teammembercookie,document.getElementById("teammember").value,7);
}
///displays the cookie named "teammembercookie"

function displayteammemberCookie(teammembercookie) {
	document.getElementById("displayteamuntil").innerHTML ='Your customer advisor <b>' + getCookie(teammembercookie) + '</b> will be there with the keys waiting on your arrival';
}
//disaply cookie named rental cookie
function displayrentalCookie(rentalcookie) {
	document.getElementById("displayprice").innerHTML ='Your total cost is <b>&#8356;' + getCookie(rentalcookie) + '</b>';
}


//VALIDATION OF FORM

function validateForename(){
    var hit = 0;
   //Forename validation
    var fn = document.forms["RentalForm"]["forename"].value;
    if (fn == "") {
        document.getElementById("fnv").style.display = 'block';
        hit = 1;
        //return false;
    } else if (fn.length > 29) {
        document.getElementById("fnv1").style.display = 'block';
        hit = 1;
        //return false;
    } else if (fn.match(/^\d+$/)) {
        document.getElementById("fnv2").style.display = 'block';
        hit = 1;
        //return false;
    }
    else{
        document.getElementById("fnv2").style.display = 'none';
    }
}


        function validateSurname(){
            var hit = 0;
           var sn = document.forms["RentalForm"]["surname"].value;

            if (sn == "") {
                document.getElementById("snv").style.display = 'block';
                hit = 1;
                // return false;
            }
            else if (sn.length > 29) {
                document.getElementById("snv1").style.display = 'block';
                hit = 1;

            }

            else if (sn.match(/^\d+$/)) {
                document.getElementById("snv2").style.display = 'block';
                hit = 1;
            }
            else {
                document.getElementById("snv").style.display = 'none';
                document.getElementById("snv1").style.display = 'none';
                document.getElementById("snv2").style.display = 'none';
            }

        }

            function validatePostcode(){
                   var hit = 0;
            //Postcode validation
            var pc = document.forms["RentalForm"]["postcode"].value;
            pc = pc.replace(/\s/g, "");
            var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
            if (regex.test(pc) != true) {
                document.getElementById("pc").style.display = 'block';
                hit = 1;
            }
                else{
                    document.getElementById("pc").style.display = 'none';
                }


            }

            function validateEmail(){
                   var hit = 0;
           var emailx = document.forms["RentalForm"]["email"].value;
    var atpos = emailx.indexOf("@");
    var dotpos = emailx.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailx.length) {
         document.getElementById("emailv").style.display = 'block';
        hit = 1;
    }
                else{
                    document.getElementById("emailv").style.display = 'none';
                }


            }

            function validateAge(){
                var hit = 0;
                 //Age validation
            var age = document.forms["RentalForm"]["age"].value;
            if (age < 17) {
                document.getElementById("agev").style.display = 'block';
                hit = 1;
            }
            if (isNaN(age)) {
                document.getElementById("agev2").style.display = 'block';
                hit = 1;
            }
            else if (age > 16){
                 document.getElementById("agev").style.display = 'none';
                document.getElementById("agev2").style.display = 'none';
            }

            }


        function validateForm()
        {
          var hit = 0;

          //Forename validation
          var fn = document.forms["RentalForm"]["forename"].value;
          if (fn == "")
          {
              document.getElementById("fnv").style.display = 'block';
              hit=1;
              //return false;
          }
             else if (fn.length > 29)
             {
                 document.getElementById("fnv1").style.display = 'block';
                  hit=1;
                //return false;
             }

            else if (!fn.match(/^[a-z]+$/))
             {
                 document.getElementById("fnv2").style.display = 'block';
                  hit=1;
                //return false;
             }

            else if (fn.length < 29)
             {
                 document.getElementById("fnv").style.display = 'none';
                 document.getElementById("fnv1").style.display = 'none';
                 document.getElementById("fnv2").style.display = 'none';
                //return false;
             }


             //Surname validation

            var sn = document.forms["RentalForm"]["surname"].value;
          if (sn == "")
          {
            document.getElementById("snv").style.display = 'block';
              hit=1;
           // return false;
          }
             else if (sn.length > 29)
             {
              document.getElementById("snv1").style.display = 'block';
               hit=1;
             }

             else if (fn.match(/^\d+$/))
             {
               document.getElementById("snv2").style.display = 'block';
                 hit=1;
             }

             else if (sn.length < 29)
             {
              document.getElementById("snv").style.display = 'none';
                  document.getElementById("snv1").style.display = 'none';
                 document.getElementById("snv2").style.display = 'none';
             }

            //Postcode validation
            var pc = document.forms["RentalForm"]["postcode"].value;
            pc = pc.replace(/\s/g, "");
            var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
            if (regex.test(pc) != true)
                {
                   document.getElementById("pc").style.display = 'block';
                    hit = 1;
                }
            else if (regex.test(pc) != false)
                {
                   document.getElementById("pc").style.display = 'none';
                }

            //Age validation
            var age = document.forms["RentalForm"]["age"].value;
            if(age <17)
            {
                document.getElementById("agev").style.display = 'block';
                hit = 1;
            }
            if (isNaN(age))
             {
                document.getElementById("agev2").style.display = 'block';
                hit = 1;
             }
            else if(age <17)
            {
                document.getElementById("agev").style.display = 'none';
            }

            //email validation
           var emailx = document.forms["RentalForm"]["email"].value;
    var atpos = emailx.indexOf("@");
    var dotpos = emailx.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailx.length) {
         document.getElementById("emailv").style.display = 'block';
    }
             else if (atpos>1 || dotpos>atpos+2 || dotpos+2<x.length) {
         document.getElementById("emailv").style.display = 'none';
    }



            if (hit == 1)
                 {
                     return false;
                 }

}

     //show/hide form
$(document).ready(function(){

      $(".showform").click(function(){
          $("#main2").show();
    });


});

     //show/hide form
$(document).ready(function(){

      $(".showform2").click(function(){
          $("#main2").show();
    });


});
