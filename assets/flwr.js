$(window).on('scroll', function(){
    if ($(".collage").is(':visible')){
        $(".collage").addClass("flwr_show");
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector(".card__inner").addEventListener("mouseover", () => {
    console.log("mouse over");                                                     
  }}
});



card__inner