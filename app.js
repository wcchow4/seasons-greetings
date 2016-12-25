$(document).ready(function() {
    // Handler for .ready() called.

    var boxes = [0,0,0,0,0,0];

    function whichAnimationEvent() {
        var t,
            el = document.createElement("fakeelement");

        var animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
        }

        for (t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    }

    function onMessage() {
      if (boxes.toString() == [1,1,1,1,1,1].toString()) {
        $('#description').fadeIn();
        $('#description').click(function() {
          $('.cls-29').show();
          $('.cls-29').addClass('animate');
        });
      }
    }

    var animationEvent = whichAnimationEvent();

    $('#background').one(
      animationEvent,
      function() {
        // Do something when the animation ends
        $('#bell').fadeIn();
        $('#bell').addClass('animate');
        $('#bell').addClass('vibrate');

        $('#title').delay(800).fadeIn();
        $('#actor1, #actor4, #actor7').delay(1600).fadeIn();

        $('#actor1').click(function(){
          $('#actor2').fadeIn();
          boxes[0] = 1;
          onMessage();
          $('#actor2').click(function() {
            $('#actor3').fadeIn();
            boxes[1] = 1;
            onMessage();
          });
        });

        $('#actor4').click(function(){
          $('#actor5').fadeIn();
          boxes[2] = 1;
          onMessage();
          $('#actor5').click(function() {
            $('#actor6').fadeIn();
            boxes[3] = 1;
            onMessage();
          });
        });

        $('#actor7').click(function(){
          $('#actor8').fadeIn();
          boxes[4] = 1;
          onMessage();
          $('#actor8').click(function() {
            $('#actor9').fadeIn();
            boxes[5] = 1;
            onMessage();
          });
        });
    });
});
