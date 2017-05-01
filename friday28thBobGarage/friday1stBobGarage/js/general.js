//hide contact form show thanks
$(document).ready(function() {
    $("#show").click(function() {
        $(".contactform_container").hide();
        $(".thankyou").show();

    });




});




//map
function initMap() {
    var uluru = {
        lat: 54.687254,
        lng: -5.882736
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru

    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//claire


(function($) {

    $(document).ready(function() {

        'use strict';

        // find the desired selectors
        var $btn2 = $('#request2');
        var $bio2 = $('#holly');

        // register an event
        $btn2.on('click', function() {
            // hide the button
            $(this).hide();
            // send the request and get the response
            $bio2.load('holly.txt', completeFunction);
            $bio2.on('click', function() {
                $(this).hide();


            })
        });



        // complete function
        function completeFunction(responseText, textStatus, request) {
            // add a border
            $bio2.css('border', '1px solid #e8e8e8');
            // uncomment the line below to see the request
            console.log(request);
            // check if there are any errors
            if (textStatus == 'error') {
                // show a relevant message
                $bio2.text('An error occurred during your request: ' + request.status + ' ' + request.statusText);
            }
        }

    });

})(jQuery);


//joe
(function($) {

    $(document).ready(function() {

        'use strict';

        // find the desired selectors
        var $btn3 = $('#request3');
        var $bio3 = $('#joe');

        // register an event
        $btn3.on('click', function() {
            // hide the button
            $(this).hide();
            // send the request and get the response
            $bio3.load('joe.txt', completeFunction);
            $bio3.on('click', function() {
                $(this).hide();


            })
        });



        // complete function
        function completeFunction(responseText, textStatus, request) {
            // add a border
            $bio3.css('border', '1px solid #e8e8e8');
            // uncomment the line below to see the request
            console.log(request);
            // check if there are any errors
            if (textStatus == 'error') {
                // show a relevant message
                $bio3.text('An error occurred during your request: ' + request.status + ' ' + request.statusText);
            }
        }

    });

})(jQuery);


//holly



(function($) {

    $(document).ready(function() {

        'use strict';

        // find the desired selectors
        var $btn = $('#request');
        var $bio = $('#bio');

        // register an event
        $btn.on('click', function() {
            // hide the button
            $(this).hide();
            // send the request and get the response
            $bio.load('clairee.txt', completeFunction);
            $bio.on('click', function() {
                $(this).hide();


            })
        });



        // complete function
        function completeFunction(responseText, textStatus, request) {
            // add a border
            $bio.css('border', '1px solid #e8e8e8', 'width', '100px');
            // uncomment the line below to see the request
            console.log(request);
            // check if there are any errors
            if (textStatus == 'error') {
                // show a relevant message
                $bio.text('An error occurred during your request: ' + request.status + ' ' + request.statusText);
            }
        }

    });

})(jQuery);



// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('carImg');
var modalImg = document.getElementById("carImg01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}