$(document).ready(function () {
  $(".header a").click(function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop:$(this.hash).offset().top}, 800);
    $("input").attr("checked", false);
  });

  $(".toggleclose").click(function(){
    $("input").attr("checked", false);
  });
});
