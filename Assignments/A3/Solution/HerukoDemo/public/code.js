

received_data = [];

function resetPage() {
    $('#unicornNameFilter').prop('checked', false);
    $('#unicornWieghtFilter').prop('checked', false);
}

function filter_f() {
    name_ = "unchecked"
    weight_ = "unchecked"

    if ($('#unicornNameFilter').is(":checked")) {
        name_ = "checked"
    }
    if ($('#unicornWieghtFilter').is(":checked")) {
        weight_ = "checked"
    }
    // console.log(received_data);

    tmp = received_data.map(
        (ob) => {
            result = []
            if (name_ == "checked")
                result.push(ob["name"])

            if (weight_ == "checked")
                result.push(ob["weight"])

            return result
        }
    )
    // console.log(tmp);
    $("#result").html("<pre>" + tmp + "</pre>");
}

function process_res(data) {
    received_data = JSON.parse(data);
    // console.log("process_res" + "got called");
    // console.log(data);
    // https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript   
    data = JSON.stringify(JSON.parse(data), null, 4);
    $("#result").html("<pre>" + data + "</pre>");
}

function findByWeight() {
    // console.log("findByWeight" + "got called!");
    // console.log($("#lowerWeight").val());
    $.ajax(
        {
            // url: `https://imdb-api.com/en/API/Search/k_gtghng8q/${jQuery("#q_").val()}`,
            //   url: `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1&include_adult=false&query=${jQuery("#q_").val()}`,
            url: 'https://aqueous-depths-44359.herokuapp.com/findByWeight',
            type: 'POST',
            data: {
                "lowerWeight": $("#lowerWeight").val(),
                "higherWeight": $("#higherWeight").val()
            },
            success: process_res
        }
    )
    resetPage();
    $("#filters").show()
}
function findUnicornByFood() {
    apple = "unchecked"
    carrot = "unchecked"

    if ($('#apple').is(":checked")) {
        apple = "checked"
    }
    if ($('#carrot').is(":checked")) {
        carrot = "checked"
    }
    $.ajax(
        {
            // url: `https://imdb-api.com/en/API/Search/k_gtghng8q/${jQuery("#q_").val()}`,
            //   url: `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1&include_adult=false&query=${jQuery("#q_").val()}`,
            url: 'https://aqueous-depths-44359.herokuapp.com/findByFood',
            type: 'POST',
            data: {
                "apple": apple,
                "carrot": carrot
            },
            success: process_res
        }
    )

    resetPage();
    $("#filters").show()
}

function findUnicornByName() {
    console.log($("#unicornName").val());
    $.ajax(
        {
            // url: `https://imdb-api.com/en/API/Search/k_gtghng8q/${jQuery("#q_").val()}`,
            //   url: `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1&include_adult=false&query=${jQuery("#q_").val()}`,
            url: 'https://aqueous-depths-44359.herokuapp.com/findByName/',
            type: 'POST',
            data: {
                unicornName:  $("#unicornName").val()
            },
            success: process_res
        }
    )
    resetPage();
    $("#filters").show()
}
function setup() {
    $("#findUnicornByWeight").click(findByWeight)
    $("#findUnicornByFood").click(findUnicornByFood)
    $("#findUnicornByName").click(findUnicornByName)
    $("#filter").click(filter_f)
    $("#filters").hide()
}

jQuery(document).ready(setup);