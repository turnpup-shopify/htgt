$(window).on('scroll', function(){
    if ($(".collage").is(':visible')){
        $(".collage").addClass("flwr_show");
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll(".card__heading").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      console.log("mouse over");  

    })
  })
});

