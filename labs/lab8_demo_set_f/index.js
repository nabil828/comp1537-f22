setup = function () {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1",
    type: "GET",
    success: function (data) {
      // console.log(data["results"]);
      // for (i = 0; i < data.results.length; i++) {
      //   console.log(data.results[i].title);
      // }
      data.results.forEach(function (movie) {
        $("main").append(
          `
          <div>
            ${movie.title}
            <p>
              ${movie.overview}
            </p>
            <img
            src = "https://image.tmdb.org/t/p/w500/${movie.poster_path}"
            >
            <button dummyBackDropPAth="${movie.backdrop_path}" class="backdropBtn"> GET Backdrop Image</button>
            <hr>
          </div>
          `
        );
      });
    }
  })
  $("body").on("click", ".backdropBtn", function () {
    banana = $(this).attr("dummyBackDropPAth")
    $("aside").html(
      `
      <img src="https://image.tmdb.org/t/p/w500/${banana}">
    `
    )
  })
}
$(document).ready(setup)