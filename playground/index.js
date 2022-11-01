

function successHandler(resp) {
  $("#output").html(resp.main.temp)
  $("#description").html(resp.weather[0]["description"])
  $("img").attr("src",
    `https://openweathermap.org/img/wn/${resp.weather[0]["icon"]}@2x.png`
  )
}


function getWeatherBtnHandler() {
  var cityName = $('#cityName').val()
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`,
    type: "GET",
    success: successHandler
  })
}

function setup() {
  $("#getWeatherBtn").click(getWeatherBtnHandler)
}

$(document).ready(setup)

