// GLOBAL VARIABLES
var currentPage = 1;
var pageSize = 3;

const display = function () {
  $("main").empty();
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1",
    type: "GET",
    success: function (data) {
      const start_index = (currentPage - 1) * pageSize;
      const end_index = start_index + pageSize;

      for (i = start_index; i < end_index; i++) {
        $("main").append(
          `
          <div>
            ${data.results[i].title}
            <p>
              ${data.results[i].overview}
            </p>
            <img
            src = "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"
            >
            <button dummyBackDropPAth="${data.results[i].backdrop_path}" class="backdropBtn"> GET Backdrop Image</button>
            <hr>
          </div>
          `
        );
      };
    }
  })
}
setup = function () {
  // $("select option:selected").val()
  $("select").change(() => {
    pageSize = Number($("select option:selected").val())

    display();
  })

  display();

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