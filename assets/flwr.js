$(window).on('scroll', function(){
    if ($(".collage").is(':visible')){
        $(".collage").addClass("flwr_show");
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("dom loaded");
  document.querySelectorAll(".card__heading").forEach((el) => {
    console.log("for each");
    el.addEventListener("mouseenter", () => {
      console.log("mouse over");                                                     
    })
  })
});

