$(window).on('scroll', function(){
    if ($(".collage").is(':visible')){
        $(".collage").addClass("flwr_show");
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("dom loaded");
  document.querySelector(".card__heading a:after").addEventListener("mouseenter", () => {
    console.log("mouse over");                                                     
  })
});

