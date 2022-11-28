
receivedArr = []

function setup() {
  $("#unicornNameButton").click(
    function () {

      $.ajax(
        {
          url: "http://localhost:5000/filteredUnicorns",
          type: "POST",
          data: {
            unicornNameFromHTTPbody: $("#unicornNameFromHTML").val()
          },
          success: function (data) {
            console.log(data);
            receivedArr = data;
            $("#result").html(JSON.stringify(data))

          }
        }
      );

    }
  )


  $('#nameFilter').change(function () {
    if (this.checked) {
      // alert("checked");
      newArr = receivedArr.map((item) => {
        return item.name;
      })
      console.log(newArr);
      $("#result").html(JSON.stringify(newArr[0]))
    } else {
      alert("unchecked");
    }
  });
}


$(document).ready(setup);