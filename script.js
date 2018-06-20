$(function() {
    $("#main").load("main.html");

    $(".navbar-brand").click(function(){
        $("#main").load("main.html");
    })


    $("#navabout").click(function(){
        $("#main").load("about.html");
    })

    $("#navcontact").click(function(){
        $("#main").load("contact.html");
    })


});