let position=0;
    let pos;
    let pos2=0;
    document.getElementById("hpslideshowhp").style.backgroundImage="url('lat-pulldown.webp')";
    function myfunction(pos){
        if(position==0){
            if(pos==1){
                position=1;clearInterval(f2);
                document.getElementById("hpslideshowhp").style.backgroundImage="url('spa.jpg')";
                document.getElementById("slidesh3").innerHTML="Rest & Recovery";
                document.getElementById("slidesp").innerHTML=
                "Explore our spa and physical therapy sections to relax, regenerate and recover with the assistance of our handpicked experts.";
            }
            else if(pos==-1){
                position=2;clearInterval(f2);
                document.getElementById("hpslideshowhp").style.backgroundImage="url('crossfit.jpg')";
                document.getElementById("slidesh3").innerHTML="Crossfit";
                document.getElementById("slidesp").innerHTML=
                "Explore our large crossfit training area filled to the brim with the latest equipment to complete your Workout of the Day (WOD)!";
            }
        }
        else if(position==1){
            if(pos==1){
                position=2;clearInterval(f2);
                document.getElementById("hpslideshowhp").style.backgroundImage="url('crossfit.jpg')";
                document.getElementById("slidesh3").innerHTML="Crossfit";
                document.getElementById("slidesp").innerHTML=
                "Explore our large crossfit training area filled to the brim with the latest equipment to complete your Workout of the Day (WOD)!";
            }
            else if(pos==-1){
                position=0;clearInterval(f2);
                document.getElementById("hpslideshowhp").style.backgroundImage="url('lat-pulldown.webp')";
                document.getElementById("slidesh3").innerHTML="Weightlifting";
                document.getElementById("slidesp").innerHTML=
                "Explore our vast array of state of the art machines that will help you reach your goals as quickly and as efficiently as possible.";
            }
        }
        else if(position==2){
            if(pos==1){
                position=0;clearInterval(f2);
                document.getElementById("hpslideshowhp").style.backgroundImage="url('lat-pulldown.webp')";
                document.getElementById("slidesh3").innerHTML="Weightlifting";
                document.getElementById("slidesp").innerHTML=
                "Explore our vast array of state of the art machines that will help you reach your goals as quickly and as efficiently as possible.";
            }
            else if(pos==-1){
                position=1;clearInterval(f2);
                document.getElementById("hpslideshowhp").style.backgroundImage="url('spa.jpg')";
                document.getElementById("slidesh3").innerHTML="Rest & Recovery";
                document.getElementById("slidesp").innerHTML=
                "Explore our spa and physical therapy sections to relax, regenerate and recover with the assistance of our handpicked experts.";
            }
        }
    }

    let f2=setInterval(autoslideshow,5000);
    
    function autoslideshow(){
        if(pos2==0) {
            document.getElementById("hpslideshowhp").style.backgroundImage="url('spa.jpg')";
            document.getElementById("slidesh3").innerHTML="Rest & Recovery";
            document.getElementById("slidesp").innerHTML=
            "Explore our spa and physical therapy sections to relax, regenerate and recover with the assistance of our handpicked experts.";
            position=1; pos2++;
        }
        else if(pos2==1) {
            document.getElementById("hpslideshowhp").style.backgroundImage="url('crossfit.jpg')";
            document.getElementById("slidesh3").innerHTML="Crossfit";
            document.getElementById("slidesp").innerHTML=
            "Explore our large crossfit training area filled to the brim with the latest equipment to complete your Workout of the Day (WOD)!";
            position=2; pos2++;
        }
        else if(pos2==2) {
            document.getElementById("hpslideshowhp").style.backgroundImage="url('lat-pulldown.webp')";
            document.getElementById("slidesh3").innerHTML="Weightlifting";
            document.getElementById("slidesp").innerHTML=
            "Explore our vast array of state of the art machines that will help you reach your goals as quickly and as efficiently as possible."; 
            position=0; pos2=0;
        }
    }