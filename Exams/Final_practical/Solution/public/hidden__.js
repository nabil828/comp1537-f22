
receivedArr = []
filteredArr = []

const reRender = () => {
  // $("#result").html(JSON.stringify(filteredArr))
  result = ""
  if (filteredArr.length > 0) {
    toUse = filteredArr
  } else {
    toUse = receivedArr
  }
  console.log("toUse", toUse);

  result += `<ul>`
  toUse.forEach((item) => {
    result += `<li>${item["name"]}</li>`
    result += `<button id="showHide"> show details </button>`
    result += `<ul style="display: none">`

    for (const key in item) {
      if (key === "name") continue;
      if (key === "_id") continue;
      if (key === "gender")
        result += `<li>${key}: ${item[key] === "m" ? "male" : "female"}</li>`
      else if (key === "loves") {
        result += `<li>${key}: `
        result += `<ul>`
        item[key].forEach((love) => {
          result += `<li>${love}</li>`
        })
        result += `</ul>`
        result += `</li>`
      }
      else {
        result += `<li>${key}: ${item[key]}</li>`
      }

    }

    result += `</ul>`
  })
  result += `</ul>`

  $("#result").html(result)
}

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
            // $("#result").html(JSON.stringify(data))
            reRender();

          }
        }
      );

    }
  )


  $('#nameFilter').change(function () {
    if (this.checked) {
      console.log("checked");
      filteredArr = receivedArr.map((item) => {
        return item.name;
      })
    } else {
      console.log("unchecked");
      filteredArr = []
    }
    reRender();
  });

  $('body').on('click', '#showHide', function () {
    $(this).next().slideToggle(500);
    $(this).text($(this).text() == 'show details' ? 'hide details' : 'show details');
  });

  $("#drop").change(function () {
    // console.log(this.value);
    $.ajax(
      {
        url: "https://final-demo.onrender.com/filterUnicornByGender",
        type: "POST",
        data: {
          gender: this.value
        },
        success: function (data) {
          console.log(data);
          receivedArr = data;
          // $("#result").html(JSON.stringify(data))
          reRender();

        }
      }
    );
  })
}


$(document).ready(setup);