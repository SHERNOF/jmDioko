$(document).ready(function () {
  $(".button-collapse").sideNav()
  $("#statement").hide()

  $(".scrollspy").scrollSpy()

  // scroll fire

  const options = [
    {
      selector: ".main-text",
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    },
    {
      selector: ".navbar-fixed",
      offset: 1500,
      callback: function () {
        $("nav").removeClass("transparent")
        $("nav").addClass("black darken-1")
      }
    }
  ]
  // Materialize.scrollFire(options)

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now))
          }
        }
      )
  })
})

// $("#statement").fadeIn()

document.querySelector(".statement").addEventListener("click", function () {
  $("#statement").fadeIn()
})

document.querySelector(".statements").addEventListener("click", function () {
  $("#statement").fadeIn()
})

document.querySelector(".joel-close").addEventListener("click", function (e) {
  e.preventDefault()
  $(".graphs").hide()
})
