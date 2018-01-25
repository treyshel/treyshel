//   _                        _          _ _
//   | |                      | |        | | |
//   | |_ _ __ ___ _   _   ___| |__   ___| | |_ ___  _ __
//   | __| '__/ _ \ | | | / __| '_ \ / _ \ | __/ _ \| '_ \
//   | |_| | |  __/ |_| | \__ \ | | |  __/ | || (_) | | | |
//    \__|_|  \___|\__, | |___/_| |_|\___|_|\__\___/|_| |_|
//                  __/ |
//                 |___/

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
