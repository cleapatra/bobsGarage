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

  function showForm() {
    document.getElementById("form_container").style.display = "block";
};

$(document).ready(function(){
$("#showall").click(function(){
  $(".carrental").find("div").fadeOut("fast");
    $(".carrental").find(".floating-box").slideDown("slow");
      });
  });




$(document).ready(function(){
$("#search").click(function(){
    $(".carrental").find("div").fadeOut("fast");
      var txt = "." + $('#search-criteria').val().toLowerCase();
        $(".carrental").find(txt).slideDown("slow");
});

$('#search-criteria').keypress(function(e){
      if(e.which == 13){//Enter key pressed
          $('#search').click();//Trigger search button click event
      }
  });
});

$(document).ready(function(){
$("#searchSmall").click(function(){
  $(".carrental").find("div").fadeOut("fast");
    $(".carrental").find(".small").slideDown("slow");
});
});


$(document).ready(function(){
$("#searchMedium").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".medium").slideDown("slow");
});
});


$(document).ready(function(){
$("#searchLarge").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".large").slideDown("slow");
});
});

$(document).ready(function(){
$("#red").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".red").slideDown("slow");
});
});

$(document).ready(function(){
$("#orange").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".orange").slideDown("slow");
});
});

$(document).ready(function(){
$("#blue").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".blue").slideDown("slow");
});
});

$(document).ready(function(){
$("#white").click(function(){
$(".carrental").find("div").fadeOut("fast");
  $(".carrental").find(".white").slideDown("slow");
});
});

$(document).ready(function(){
$("#grey").click(function(){
$(".carrental").find("div").fadeOut("Fast");
  $(".carrental").find(".grey").slideDown("slow");
});
});      


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



        
        
     