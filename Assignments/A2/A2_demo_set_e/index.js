


// GLOBAL VARIABLES
var PAGE_SIZE;
var CURRENT_PAGE = 1;


display_page = () => {
  $.ajax(
    {
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1",
      type: "GET",
      success: function (data) {
        let start_index = PAGE_SIZE * (CURRENT_PAGE - 1);
        let end_index = PAGE_SIZE * (CURRENT_PAGE - 1) + PAGE_SIZE;
        for (i = start_index; i < end_index; i++) {
          $("main").append(
            `
            <div>
              ${data.results[i].title}
              <p>
                ${data.results[i].overview}
              </p>
              <img 
                src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"
                style="width: 100%"
              >
              <button movieBackdropImageName="${data.results[i].backdrop_path}" class="backdropBtn"> BackDrop Image </button>
              <hr>
            </div>
            `
          )
            ;
        }
      },
      error: function (error) {
        console.log(error);
      }
    }
  )
}
setup = function () {
  PAGE_SIZE = $("#pageSizeMenu option:selected").val();

  $("#search_btn").click(() => {
    display_page()
  })

  $("#pageSizeMenu").change(() => {
    // PAGE_SIZE = $("#pageSizeMenu").val();
    PAGE_SIZE = $("#pageSizeMenu option:selected").val();

    console.log("PAGE_SIZE", PAGE_SIZE);
  })



  $("body").on("click", ".backdropBtn", function () {
    console.log(`https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}`);
    $("aside").html(
      `
        <img src="https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}"> 
      `
    )
  })
}

$(document).ready(setup)