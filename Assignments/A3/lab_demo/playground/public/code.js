receivedArray = []

function setup() {
  $("#getByNameBtn").click(function () {
    $.ajax({
      url: "http://localhost:5000/getUnicornByNameRoute",
      type: "POST",
      data: { unicornNameInHTTPBody: $("#unicornNameInHTML").val() },
      success: function (data) {
        console.log("data", data);
        receivedArray = data;
        result = "";
        result = "<table>"
        data.map((aUnicorn) => {
          console.log("aUnicorn", aUnicorn);
          if (aUnicorn["vaccinated"] == true)
            result += `<tr class="red">`
          else
            result += `<tr class="">`

          for (var field in aUnicorn) {
            result += `<td>${aUnicorn[field]}</td>`
          }
          result += `</tr>`
        })
        result += "</table>"

        // $("#result").html(JSON.stringify(data));
        $("#result").html(result);
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