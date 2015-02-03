/* this file contains really dodgy hacks to make the showcase look a bit better */

function setSiteImage() {
/* aligns the controller menu element in the global header with the header logo */

var mrg = $('.pagelet-header-branding img').offset().left;
console.log(mrg)
mrg -=30;
$('.controller').css('margin-left',mrg+'px');
}

setSiteImage() 

$(window).resize(function () { 
{
    setSiteImage();
}
});
