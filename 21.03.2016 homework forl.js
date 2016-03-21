/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var timer;
var elemID = "#disp";
var id=1;
/*
 * Waiting for the HTML page to load and being notified by jQuery.
 * Upon notification run the unnamed callback function.
 */
$().ready(function() {
    var top;
    var left;
    for(var i=1; i<9; i++) {
        left = Math.floor((Math.random() * 700) + 1);
        top = Math.floor((Math.random() * 500) + 1);
        $(elemID).append(   
         "<div id='" + i + "' \n\
               class='b' \n\
               style='top:" + top + "px; left:" + left + "px;'>" 
               + i + " \n\
             </div>");
    }
     timer = setInterval(function() {
        left = Math.floor((Math.random() * 700) + 1);
        top = Math.floor((Math.random() * 500) + 1);   
        $(".b").css("left",left+"px");
        $(".b").css("top",top+"px");
        $(".b").html(id++);
    },1000);
    
    for (var i=1; i<9; i++){
        $(".b").map(timer);
    }
    }); 
      






