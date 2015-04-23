window.document.onload = function(){
$('img').each(function () {
    theimg = $(this).attr('src')
    alert(theimg);
    theimg = theimg.replace('thumbnail','large');
    $(this).attr('src',theimg)
  
});
} 


