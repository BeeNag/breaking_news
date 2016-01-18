$(document).on('ready page:ready', function () {
    if($("#articles-list").length > 0) {
        fetchArticles();
    } 
});

function fetchArticles() {
    console.log('Working...');
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/articles.json",
        dataType: "json",
        success: function (articles) {

            var innerHtml = "";
            for(var i = 0; i < articles.length; i++) {
                innerHtml += "<div class='highlight'>";
                innerHtml += "<div><h4>" + articles[i].headline + "</h4></div>";
                innerHtml += "<div>" + articles[i].body + "</div>";
                innerHtml += "</div>";
                innerHtml += "<hr />";
            }
            $( "#articles-list" ).html(innerHtml);
            $( "#articles-list" ).effect("highlight", {}, 1500);

            // setTimeout(fetchArticles, 5000);
        },
        error: function (){
            window.alert("There was an error!");
        }
    });
}