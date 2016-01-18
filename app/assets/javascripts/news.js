$(document).on('ready page:ready', function () {
    if($("#articles-list").length > 0) {
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "/articles.json",
            dataType: "json",
            success: function (articles) {

                var innerHtml = "";
                for(var i = 0; i < articles.length; i++) {
                    innerHtml += "<div>";
                    innerHtml += "<div><h4>" + articles[i].headline + "</h4></div>";
                    innerHtml += "<div>" + articles[i].body + "</div>";
                    innerHtml += "</div>";
                    innerHtml += "<hr />";
                }
                $( "#articles-list" ).html(innerHtml);
            },
            error: function (){
                window.alert("There was an error!");
            }
        });
    } 
});