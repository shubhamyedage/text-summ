function decodeData(){
    var data = {
       "operationType": "decode"
    }
    processData(data);
}

function trainData() {
    var data = {
        "operationType": "training",
        "summary": $("#boxSumm").val()
    }
    processData(data);
}

function processData(data){
    data["article"] = $("#boxText").val();
    $.ajax({
        url: "/process-article",
        type: "POST",
        contentType:"application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function(data){
            $("#boxResultText").text(data.files)
        },
        error: function(data){
            alert("Error");
        }
    });
}