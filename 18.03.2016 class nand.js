/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function and (a, b) {
return (a && b);
}

function not (a) {
    return !a;
    }


function nand (a,b) {
    return not (and(a,b));
} 
function simor (a,b) {
    return not (nand(nand(a,a),nand(b,b)));
}
/*
 * Implement OR using NOT and AND as logical operators.
 * This is just one way and there are hundreds more.
 */

function orwithnands (a, b) {
                if ((!a) && (!b))
                return false;
                 return true ;
             }

var elemID = "#res";
/* 
 * Waiting for the HTML page to load and being notified by jQuery.
 * Upon notification run the unnamed callback function.
 */

$().ready(function () {
             var r = orwithnands (false, false);
           $("#res").append("0,0 ->" + r + "<br>");
           r = orwithnands (false, true);
           $("#res").append("0,1 ->" + r + "<br>");
           r = orwithnands (true, true);
           $("#res").append("1,1 ->" + r + "<br>");
           r = orwithnands (true, false);
           $("#res").append("1,0 ->" + r + "<br>");
       });
