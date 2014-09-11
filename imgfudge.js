$("img").each(function() {
    //Do your work  
    if(this.alt.substring(0,5) == 'large')
    {
    console.log(this.src)
    var src = $(this).attr("src").replace("small", "large");
    $(this).attr('src',src);
    }
})
