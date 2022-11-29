receivedArray = []

function setup() {
  $("#getByNameBtn").click(function () {
    $.ajax({
      url: "http://localhost:5000/getUnicornByNameRoute",
      type: "POST",
      data: { unicornNameInHTTPBody: $("#unicornNameInHTML").val() },
      success: function (data) {
        // console.log(data);
        receivedArray = data;
        $("#result").html(JSON.stringify(data));
      }
    });
  })

  $("#nameFilter").change(function () {
    if ($(this).prop("checked")) {
      anotherArray = receivedArray.map((item) => {
        return item.name;
      })
      $("#result").html(JSON.stringify(anotherArray));

    } else {
      anotherArray = receivedArray.map((item) => {
        return item;
      })
      $("#result").html(JSON.stringify(anotherArray));

    }
  })
}

$(document).ready(setup)