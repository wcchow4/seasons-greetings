$(document).ready(function() {
    // Handler for .ready() called.
    // $('#actor1, #actor4, #actor7, #title').fadeIn();

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

    var animationEvent = whichAnimationEvent();

    $('#background').one(
      animationEvent,
      function() {
        // Do something when the animation ends
        $('#bell').show();
        $('#bell').addClass('animate');

        $('#bell').one(
          animationEvent,
          function() {
            $('#title').fadeIn();
            $('#actor1, #actor4, #actor7').fadeIn();

            $('#actor1').click(function(){
              $('#actor2').fadeIn();
              $('#actor2').click(function() {
                $('#actor3').fadeIn();
              });
            });

            $('#actor4').click(function(){
              $('#actor5').fadeIn();
              $('#actor5').click(function() {
                $('#actor6').fadeIn();
              });
            });

            $('#actor7').click(function(){
              $('#actor8').fadeIn();
              $('#actor8').click(function() {
                $('#actor9').fadeIn();
              });
            });
          }
        );
    });

});
