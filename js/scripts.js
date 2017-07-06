// facebook button
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

//twitter button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

var map;
function initMap() {
  var uluru = {lat: 51.5045, lng: -0.0886887};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$(document).ready(function(){
  
   // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });

  
  // tooltip jquery scripts
  $(function () {
    $('#airtypr-link').tooltip();
  });

  $(function () {
  	$('[data-toggle="tooltip"]').tooltip();
  });
  
  $("#button").on('click', function() {
    var comment = $('.message-box').val();
    if(comment === ""){
      $('.message-box').css("border", "1px solid red");
    }else{
      var email = $('#email').val();
      var name = $('#name').val();
      var text = "Hi. " + name + "We have received your message and email: " + comment + " / " + email + ".";
      $('#visible-comment').html(text);
      $('#email').css("background-color", "#d9534f");
      $('#name').css("background-color", "#d9534f");
      return false;
      // no code here!
    }
  });
  
  $(".message-box").on("keyup", function() {  
    //here we set the length of the content of the textarea to a variable
    var charCount = $(".message-box").val().length; 
    console.log(charCount); 
    //here we show a running character count to the User
    $("#char-count").html(charCount); 
    if(charCount > 50) {
      $("#char-count").css("color", "red"); 
    } else { 
      // need it to be black 
      $("#char-count").css("color", "black"); 
    };
  });
  
  $("#button").on("click", function() {
    $(".message-box").css("background-color", "#d9534f");
  });//background color changing after clicking the submit btn
  $("button").on("click", function() {
    $("#name").css("color", "white");
    $("#email").css("color", "white");
    $(".message-box").css("color", "white");
  });//font color changing after clicking the submit btn
  //work section
  
  for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
      <a href='#' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'>Title</p> "+ works[i].title +" </span>\
      </a>\
    </div>\
  ");
    var images = $(".img-responsive");
    if (i%2 === 0) {
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };
  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave(function() {
    $(".info", this).hide()
  });  
});
