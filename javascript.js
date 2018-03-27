//   _                        _          _ _
//   | |                      | |        | | |
//   | |_ _ __ ___ _   _   ___| |__   ___| | |_ ___  _ __
//   | __| '__/ _ \ | | | / __| '_ \ / _ \ | __/ _ \| '_ \
//   | |_| | |  __/ |_| | \__ \ | | |  __/ | || (_) | | | |
//    \__|_|  \___|\__, | |___/_| |_|\___|_|\__\___/|_| |_|
//                  __/ |
//                 |___/

//navbar click handlers
$("#contact").click(function() {
  $(".content-row").hide(500);
  $("#welcome").removeClass("active");
  $("#about").removeClass("active");
  $("#projects").removeClass("active");
  $("#contact").addClass("active");
  $("#contact-row").show(500);
});

$("#about").click(function() {
  $(".content-row").hide(500);
  $("#welcome").removeClass("active");
  $("#contact").removeClass("active");
  $("#projects").removeClass("active");
  $("#about").addClass("active");
  $("#about-row").show(500);
});

$("#projects").click(function() {
  $(".content-row").hide(500);
  $("#welcome").removeClass("active");
  $("#about").removeClass("active");
  $("#contact").removeClass("active");
  $("#projects").addClass("active");
  $("#work-row").show(500);
});

$("#welcome").click(function() {
  $(".content-row").hide(500);
  $("#contact").removeClass("active");
  $("#about").removeClass("active");
  $("#projects").removeClass("active");
  $("#welcome").addClass("active");
  $("#welcome-row").show(500);
});

// hover buttons on welcome screen
$("#work-icon").mouseenter(function() {
  $("#hover-text-replace").text("view my portfolio");
});

$("#about-icon").mouseenter(function() {
  $("#hover-text-replace").text("learn more about me");
});

$("#contact-icon").mouseenter(function() {
  $("#hover-text-replace").text("get in touch");
});

$(".fa-link-element").mouseleave(function() {
  $("#hover-text-replace").text("");
});

// welcome button click handlers
$("#work-icon").click(function() {
  $(".content-row").hide(500);
  $("#work-row").show(500);
});

$("#about-icon").click(function() {
  $(".content-row").hide(500);
  $("#about-row").show(500);
});

$("#contact-icon").click(function() {
  $(".content-row").hide(500);
  $("#contact-row").show(500);
});

//projects pills
$("#python").click(function() {
  $("#javascript-projects").hide(500);
  $("#django-projects").hide(500);
  $("#javascript").removeClass("active");
  $("#django").removeClass("active");
  $("#python").addClass("active");
  $("#python-projects").show();
});

$("#javascript").click(function() {
  $("#python-projects").hide(500);
  $("#django-projects").hide(500);
  $("#python").removeClass("active");
  $("#django").removeClass("active");
  $("#javascript").addClass("active");
  $("#javascript-projects").show();
});

$("#django").click(function() {
  $("#python-projects").hide(500);
  $("#javascript-projects").hide(500);
  $("#javascript").removeClass("active");
  $("#python").removeClass("active");
  $("#django").addClass("active");
  $("#django-projects").show();
});

//pics
$("#django-pics").click(function() {
  $("#pics-from-django").show();
});
