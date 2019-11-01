$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(500);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});

var p;
console.log($(document).innerWidth());

$("#Every_dialogues").click(function() {
  console.log("passou");
  $(window.document.location).attr('href',"Every_dialogues.html");
});

$("#Famous_people").click(function() {
  console.log("passou");
  $(window.document.location).attr('href',"index.html");
});
