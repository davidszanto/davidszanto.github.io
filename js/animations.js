function init() {
    $('.main_segment').vegas({
        delay: 7000,
        timer: false,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        transitionDuration: 2000,
        slides: [
            { src: "img/airpod.jpg" },
            { src: "img/airpod2.jpg" }
        ],
        
        overlay: 'js/overlays/02.png'
    });
    
    $("#down_navigator_button").click(function () {
        $('html, body').animate({
            scrollTop: $("#departments").offset().top
        }, 800);
        
        $('.nav_element').animate({
            color: "#000000"
        }, 800);
    });
    
    $("#side_nav_element_1").click(function (){
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 800);
        event.preventDefault();
    });
    
    $("#side_nav_element_2").click(function (){
        $('html, body').animate({
            scrollTop: $("#timeline").offset().top
        }, 800);
        event.preventDefault();
    });
    
    $("#side_nav_element_3").click(function (){
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 800);
        event.preventDefault();
    });
    
    $("#side_nav_element_4").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 800);
        event.preventDefault();
    });
    
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var nav_heigth = document.getElementById("navbar").offsetHeight;
        var main_height = document.getElementById("main").clientHeight;
        var department_height = document.getElementById("departments").clientHeight + main_height;
        var timeline_height = document.getElementById("timeline").clientHeight + department_height;
        var team_height = document.getElementById("team").clientHeight + timeline_height;
        var contact_height = document.getElementById("contact").clientHeight + team_height;
        var window_height = window.screen.height;
        
        if (distanceY < department_height - nav_heigth){
            $('.nav_element').css("color", "white");
            $('head').append('<style>.navbar-default .navbar-nav>li>a:before{background-color: white}.navbar.navbar-default{background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) )no-repeat fixed;}</style>');
        }
        else if (distanceY > department_height - nav_heigth && distanceY < timeline_height - nav_heigth){
            $('.nav_element').css("color", "black");
            $('head').append('<style>.navbar-default .navbar-nav>li>a:before{background-color: black;}.navbar.navbar-default{background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) )no-repeat fixed;border-bottom: rgba(0, 0, 0, 0.1) 1px solid;}</style>');
        }
        else if(distanceY > timeline_height - nav_heigth && distanceY < team_height - nav_heigth ){
           $('.nav_element').css("color", "white");
            $('head').append('<style>.navbar-default .navbar-nav>li>a:before{background-color: white}.navbar.navbar-default{background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) )no-repeat fixed;border-bottom: rgba(255, 255, 255, 0.1) 1px solid;}</style>');
        }
        else if(distanceY > team_height - nav_heigth){
            $('.nav_element').css("color", "white");
            $('head').append('<style>.navbar-default .navbar-nav>li>a:before{background-color: white}.navbar.navbar-default{background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) )no-repeat fixed;}</style>');
        }
        
        if (distanceY < department_height - window_height/2){
            $('span.glyphicon.glyphicon-one-fine-dot').css("color", "white");
        }
        else if (distanceY > department_height - window_height/2){
            $('span.glyphicon.glyphicon-one-fine-dot').css("color", "black");
        }
        
        if(distanceY < department_height - window_height/2){
            $('.glyphicon.glyphicon-one-fine-dot.active').removeClass('active');
            $('#1').addClass('active');
        }
        
        else if(distanceY > department_height - window_height/2 && distanceY < timeline_height - window_height/2 ){
            $('span.glyphicon.glyphicon-one-fine-dot').css("color", "black");
            
            $('.glyphicon.glyphicon-one-fine-dot.active').removeClass('active');
            $('#2').addClass('active');
        }
        else if(distanceY > timeline_height - window_height/2 && distanceY < team_height - window_height/2 ){
            $('span.glyphicon.glyphicon-one-fine-dot').css("color", "white");
            
            $('.glyphicon.glyphicon-one-fine-dot.active').removeClass('active');
            $('#3').addClass('active');
        }
        else if(distanceY > team_height - window_height/2 && distanceY < contact_height - window_height/2 ){
            $('span.glyphicon.glyphicon-one-fine-dot').css("color", "black");
            
            $('.glyphicon.glyphicon-one-fine-dot.active').removeClass('active');
            $('#4').addClass('active');
        }
        
     });
}

window.onload = init();

$(document).ready(function () {
    var window_width = window.screen.availWidth;
    if(window_width > 1076){
        $("#eco").hover(function () {
            $("head").append('<style>#eco{width:50%;}</style>');
            $("head").append('<style>#food{width:10%;}</style>');
            $("head").append('<style>#gifts{width:10%;}</style>');
            $("head").append('<style>#fan{width:10%;}</style>');
            $("head").append('<style>#printing{width:10%;}</style>');
            $("head").append('<style>#custom{width:10%;}</style>');
        });
        $("#eco").mouseleave(function () {
            $("head").append('<style>#custom{width:16.6%;}</style>');
            $("head").append('<style>#eco{width:16.6%;}</style>');
            $("head").append('<style>#food{width:16.6%;}</style>');
            $("head").append('<style>#gifts{width:16.6%;}</style>');
            $("head").append('<style>#fan{width:16.6%;}</style>');
            $("head").append('<style>#printing{width:16.6%;}</style>');
        });
        $("#food").hover(function () {
            $("head").append('<style>#food{width:50%;}</style>');
            $("head").append('<style>#eco{width:10%;}</style>');
            $("head").append('<style>#gifts{width:10%;}</style>');
            $("head").append('<style>#fan{width:10%;}</style>');
            $("head").append('<style>#printing{width:10%;}</style>');
            $("head").append('<style>#custom{width:10%;}</style>');
        });
        $("#food").mouseleave(function () {
            $("head").append('<style>#custom{width:16.6%;}</style>');
            $("head").append('<style>#eco{width:16.6%;}</style>');
            $("head").append('<style>#food{width:16.6%;}</style>');
            $("head").append('<style>#gifts{width:16.6%;}</style>');
            $("head").append('<style>#fan{width:16.6%;}</style>');
            $("head").append('<style>#printing{width:16.6%;}</style>');
        });
        $("#gifts").hover(function () {
            $("head").append('<style>#gifts{width:50%;}</style>');
            $("head").append('<style>#food{width:10%;}</style>');
            $("head").append('<style>#eco{width:10%;}</style>');
            $("head").append('<style>#fan{width:10%;}</style>');
            $("head").append('<style>#printing{width:10%;}</style>');
            $("head").append('<style>#custom{width:10%;}</style>');
        });
        $("#gifts").mouseleave(function () {
            $("head").append('<style>#custom{width:16.6%;}</style>');
            $("head").append('<style>#eco{width:16.6%;}</style>');
            $("head").append('<style>#food{width:16.6%;}</style>');
            $("head").append('<style>#gifts{width:16.6%;}</style>');
            $("head").append('<style>#fan{width:16.6%;}</style>');
            $("head").append('<style>#printing{width:16.6%;}</style>');
        });
        $("#fan").hover(function () {
            $("head").append('<style>#fan{width:50%;}</style>');
            $("head").append('<style>#food{width:10%;}</style>');
            $("head").append('<style>#gifts{width:10%;}</style>');
            $("head").append('<style>#eco{width:10%;}</style>');
            $("head").append('<style>#printing{width:10%;}</style>');
            $("head").append('<style>#custom{width:10%;}</style>');
        });
        $("#fan").mouseleave(function () {
            $("head").append('<style>#custom{width:16.6%;}</style>');
            $("head").append('<style>#eco{width:16.6%;}</style>');
            $("head").append('<style>#food{width:16.6%;}</style>');
            $("head").append('<style>#gifts{width:16.6%;}</style>');
            $("head").append('<style>#fan{width:16.6%;}</style>');
            $("head").append('<style>#printing{width:16.6%;}</style>');
        });
        $("#printing").hover(function () {
            $("head").append('<style>#printing{width:50%;}</style>');
            $("head").append('<style>#food{width:10%;}</style>');
            $("head").append('<style>#gifts{width:10%;}</style>');
            $("head").append('<style>#fan{width:10%;}</style>');
            $("head").append('<style>#eco{width:10%;}</style>');
            $("head").append('<style>#custom{width:10%;}</style>');
        });
        $("#printing").mouseleave(function () {
            $("head").append('<style>#custom{width:16.6%;}</style>');
            $("head").append('<style>#eco{width:16.6%;}</style>');
            $("head").append('<style>#food{width:16.6%;}</style>');
            $("head").append('<style>#gifts{width:16.6%;}</style>');
            $("head").append('<style>#fan{width:16.6%;}</style>');
            $("head").append('<style>#printing{width:16.6%;}</style>');
        });
        $("#custom").hover(function () {
            $("head").append('<style>#custom{width:50%;}</style>');
            $("head").append('<style>#eco{width:10%;}</style>');
            $("head").append('<style>#food{width:10%;}</style>');
            $("head").append('<style>#gifts{width:10%;}</style>');
            $("head").append('<style>#fan{width:10%;}</style>');
            $("head").append('<style>#printing{width:10%;}</style>');
        });
        $("#custom").mouseleave(function () {
            $("head").append('<style>#custom{width:16.6%;}</style>');
            $("head").append('<style>#eco{width:16.6%;}</style>');
            $("head").append('<style>#food{width:16.6%;}</style>');
            $("head").append('<style>#gifts{width:16.6%;}</style>');
            $("head").append('<style>#fan{width:16.6%;}</style>');
            $("head").append('<style>#printing{width:16.6%;}</style>');
        });
    }
});