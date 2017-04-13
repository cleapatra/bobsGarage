 // Rental Calculator function
                        function rentalCalc() {
                        var minutes = 1000 * 60;
                        var hours = minutes * 60;
                        var days = hours * 24;
                        var years = days * 365;
                        var from  = document.getElementById("from").value
                        var datefrom = new Date(from);
                        var tfrom= datefrom.getTime();
                        var dfrom = Math.round(tfrom / days);

                        var to = document.getElementById("to").value
                        var dateto = new Date(to);
                        var tto= dateto.getTime();

                        var dto = Math.round(tto / days);
                        var total = dto - dfrom;

                        //    document.getElementById("demo").innerHTML = dfrom;
                        // document.getElementById("demo1").innerHTML = dto;
                        //   document.getElementById("demo2").innerHTML = total;

                         var dropdownVal = document.getElementById("carsdropdown").value;

                        var rental = total * dropdownVal;

                        var promoCode = document.getElementById("promoCode").value.toLowerCase();

                         if (promoCode == "com311"){
                          rental = rental * 0.8;
                         };

                          document.getElementById("labelDays").innerHTML = total;
                        document.getElementById("price").innerHTML = "&#8356;"+rental;

                        };
