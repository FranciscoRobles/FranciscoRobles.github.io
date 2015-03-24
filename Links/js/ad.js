var wrapper = $('.wrapper');
var container = $('.container');

fontSize = '';
codeFontSize = '';
headerFontSize = '';
ctaFontSize = '';


var animations = [
    {
       }

        time:2000,
        step:"slide-2",
        selector:'.container'
    },
    {
        
        time:250,
        step:"js-active",
        selector:'.motion-1--browser'
    },
    {
       
        time:250,
        step:"js-active",
        selector:'.motion-1--table'
    },
    {
        time:1500,
        step:"js-active",
        selector:'.motion-1--image'
    },
    {
        time:1500,
        step:"js-active",
        selector:'.motion-1--image .decoration'
    },
    {
        
        time:1500,
        step:"js-make-big",
        selector:'.motion-1--browser, .motion-1--image'
    },
    { 
         
        time:1,
        step:"js-hide",
        selector:'.motion-1--table'
    },
    {
        
        time:300,
        step:"slide-3",
        selector:'.container'
    },
    {
        
        time:100,
        step:"slide-4",
        selector:'.container'
    },
    {
        
        time:2000,
        step:"js-shrinkDown",
        selector:'.text-2'
    },
    {
        
        time:250,
        step:"js-hide",
        selector:'.text-2'
    },
    {
       
        time:300,
        step:"js-active",
        selector:'.motion-2--content'
    }    ,
    {
        
        time:500,
        step:"js-active",
        selector:'.motion-2--hero table'
    },
    {
       
        time:500,
        step:"js-active",
        selector:'.motion-2--content table.main-content'
    },
    {
        
        time:1000,
        step:"js-transform-1",
        selector:'.motion-2--device'
    },
    {   
        
        time:1000,
        step:"js-transform-2",
        selector:'.motion-2--device'
    },
    {
        time:1000,
        step:"js-shrinkDown",
        selector:'.motion-2--device'
    },
    {
       
        time:250,
        step:"slide-5",
        selector:'.container'
    },
    {
        
        time:100,
        step:"js-hide",
        selector:'.motion-2'
    },
    {   
        
        time:150,
        step:"js-kill",
        selector:'.motion-2'
    },
    {
        
        time:200,
        step:"js-active",
        selector:'.text-3'
    },
    {
       
        time:250,
        step:"js-show",
        selector:'.replay'
    }
];


function textSize(){
    fontSize = parseInt(container.height());
    codeFontSize = parseInt(0.065454545 * fontSize) +"px";
    headerFontSize = parseInt(0.07 * fontSize) +"px";
    ctaFontSize = parseInt(0.06 * fontSize) +"px";
    $("p.code").css('font-size', codeFontSize);
    $(".text-3 .header").css('font-size', headerFontSize);
    $(".text-3 p:not(.header)").css('font-size', ctaFontSize);
}



function windowResize(){
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    if (windowHeight > windowWidth){
      wrapper.width(windowWidth).height(windowWidth);
    }
    else {
      wrapper.width(windowHeight).height(windowHeight);
    }
}


function runAnimation(i, timeline){
    setTimeout(function(){
        $(animations[i].selector).addClass(animations[i].step);
    }, timeline);
}



function animationTimeline(){
    var timeline = 0;

    for(var i=0; i<animations.length; i++){
        timeline = parseInt(animations[i].time, 10) + parseInt(timeline, 10);
        runAnimation(i, timeline);
    }
}



function animationUndo(){
    
    container.addClass('js-hide');
    
    setTimeout(function(){
        
        for(var i=0; i<animations.length; i++){
        $(animations[i].selector).removeClass(animations[i].step);
    }
    },500);
    
    setTimeout(function(){
        container.removeClass('js-hide');
    },1000);
}



$('#replay').click(function(){
  
    animationUndo();
    
    setTimeout(animationTimeline,1000);
});

container.click(function(){
    if (!container.hasClass('slide-5')){
        window.location='http://mediatemple.net/webhosting?utm_source=codepen&utm_medium=banner_midplay_justin_codepen&utm_content=275x275&utm_campaign=general';
    }
});

$(document).ready(function(){
    windowResize()
    textSize();
});

$(window).resize(function(){
    windowResize();
    textSize();
});

$(window).load(function() {
      animationTimeline();
});