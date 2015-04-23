window.document.onload = function(){
$('img').each(function () {
    theimg = $(this).attr('src')
    theimg = theimg.replace('thumbnail','large');
    $(this).attr('src',theimg)
  
});
} 


