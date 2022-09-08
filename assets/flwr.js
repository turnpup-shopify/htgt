$(window).on('scroll', function(){
    if ($(".collage").is(':visible')){
        $(".collage").addClass("flwr_show");
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll(".underline_animation").forEach((el, i) => {
    var xxx = i*400 + 200;
    setTimeout(() => {
      el.classList.add("show"); 
    }, xxx)    
  })
  document.querySelectorAll(".card--standard").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (el.querySelector(".quick-add__submit") !== null) {
        el.querySelector(".quick-add__submit").classList.add("show");
      }
    })
    el.addEventListener("mouseout", () => {
      el.querySelector(".quick-add__submit").classList.remove("show");
    })
  })
});

  
