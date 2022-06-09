$(window).on('scroll', function(){
    if ($(".collage").is(':visible')){
        $(".collage").addClass("flwr_show");
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("dom loaded");
  document.querySelectorAll(".card__heading a:after").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      console.log("mouse over");                                                     
    })
  })
});

