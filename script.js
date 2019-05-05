/*

$(function() {
    $('#nicorepo').find('a').css('color','red');
    $('a').css('color','red');
});

*/

$('.TweetTextSize').each(function(){

    let txt = $(this).text();
        $(this).html(
            txt.replace(/JavaScript/g,'<span style="background:yellow">JavaScript</span>')
               .replace(/スクリプト/g,'<span style="background:aqua">スクリプト</span>')
               .replace(/プログラミング/g,'<span style="background:aqua">プログラミング</span>')
         
   );
});