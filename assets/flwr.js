$(window).on('scroll', function(){
    if ($(".collage").is(':visible')){
        $(".collage").addClass("flwr_show");
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll(".card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      console.log("mouse over");  
      el.querySelector(".quick-add__submit").classlist.add("show");
    })
  })
});

