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

  // const position = [-37.611911, 144.912327]
  // const centerPosition = [-37.611911, 143.912327]

  // const position = [42.361145, -71.057083]
  // const centerPosition = [42.377815, -70.981133]

  // function showGoogleMaps() {
  //   const latLng = new google.maps.LatLng(position[0], position[1])
  //   const centerLatLng = new google.maps.LatLng(centerPosition[0], centerPosition[1])

  //   const mapOptions = {
  //     zoom: 12,
  //     streetViewControl: false,
  //     scaleControl: true,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     center: centerLatLng
  //   }
  //   map = new google.maps.Map(document.getElementById("googlemap"), mapOptions)

  //   // marker
  //   marker = new google.maps.Marker({
  //     position: latLng,
  //     map: map,
  //     draggable: false,
  //     animation: google.maps.Animation.DROP
  //   })
  //   // map events
  // }
  // google.maps.event.addDomListener(window, "load", showGoogleMaps)

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
