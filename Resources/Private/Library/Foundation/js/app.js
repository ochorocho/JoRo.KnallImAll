function makeFotorama() {
    $('.imageBlock .lightbox').click(function(e){
       e.preventDefault();

       var fotorama = '<div style="display:none" class="fotorama" data-arrows="false" data-fit="cover" data-auto="false" data-width="100%" data-minwidth="100%" data-maxwidth="100%" data-minheight="100%" data-maxheight="100%" data-keyboard="true" data-nav="thumbs" data-startindex="' + $(this).attr('data-index') + '">';
       $($(this).closest('ul').find('.lightbox')).each(function() {
          var foto = $(this).attr('data-fotorama').split(',');
          
          var location = '';
          
          if(foto[2] === 'false' || foto[3] === 'false') {
            location = '';
          } else {
            location = '<a class="mapFotorama" data-location="' + foto[2] + ',' + foto[3] + '"><i class="icon fi-marker"></i></a>';
          }
          
          fotorama += '<div data-thumb-width="100" data-thumb-height="100" data-thumb="' + foto[1] + '" data-img="' + foto[0] + '"><div class="iconBar">' + location + '<a class="fotoramaFull"><i class="icon fi-arrows-out"></i></a><a class="right close-fotorama" aria-label="Close">&#215;</a></div></div>';
       });
       
        $('body').append(fotorama);
        MotionUI.animateIn($('.fotorama'), 'slow fade-in');
        $('.fotorama').fotorama();
        $('.fotorama').on('fotorama:showend ', function (e, fotorama, extra) {
            $('.fotorama .close-fotorama').on('click', function(e){
                var fotoramaAni = $('.fotorama');
                MotionUI.animateOut(fotoramaAni, 'slow fade-out', function() {
                    fotorama.destroy();
                    $('.fotorama').remove();    
                });
            });
        });

        var $fotoramaFull = '.fotoramaFull';
        var $fotorama = $('.fotorama');
        $fotorama.on('click', $fotoramaFull, function(e){
            if(!$(document).fullScreen()){
                $(this).find('i').removeClass('fi-arrows-out').addClass('fi-arrows-in');
                $fotorama.fullScreen(true);
            } else {
                $(this).find('i').removeClass('fi-arrows-in').addClass('fi-arrows-out');
                $fotorama.fullScreen(false);
            }
        });

    $(document).on("fullscreenchange", function() {
        if(!$(document).fullScreen()){
            $fotorama.find('i').removeClass('fi-arrows-in').addClass('fi-arrows-out');
        }
    });


        var $selector = '.mapFotorama';
        $('.fotorama').on('click', $selector, function(e){
            var locationEl = $(this).parent().parent().find('.location');
            if(locationEl.length) {
                console.log(locationEl);

                MotionUI.animateOut(locationEl, 'fast bounce-in-out slide-out-left', function() {
                    locationEl.remove();
                });

            } else {
                $(this).parent().append('<div class="location" style="display:none"></div>');
                
                var location = $(this).attr('data-location').split(',');

                var latlng = [location[0],location[1]];

                MotionUI.animateIn($(this).parent().parent().find('.location'), 'fast bounce-in slide-in-left', function() {
                   $(this).parent().parent().find('.location').gmap3({
                        marker:{
                            latLng: latlng
                         },
                        map:{
                            options:{
                                zoom:2,
                                draggable: false
                            }
                        }
                    });

                });                
            }
        });
    });
}



$(document).foundation({
	accordion: {
		content_class: 'content',
		active_class: 'active',
		multi_expand: false,
		toggleable: true
	}
});


$(function() {  
    $('#hideContent').click(function(e) {
        e.preventDefault();
        var content = $('.content');
        var navi = $('#navi');

        if ($(content).css('display') === 'none') {
            MotionUI.animateIn(content, 'fast fade-in');
            MotionUI.animateIn(navi, 'fast fade-in');
            navi.addClass('hide-for-small');
        } else {
            MotionUI.animateOut(content, 'fast fade-out');
            MotionUI.animateOut(navi, 'fast fade-out');
            navi.removeClass('hide-for-small');
        }
    }); 
    $('#navi > a').click(function(e) {

        if($(this).hasClass('hasSub')) {
            e.preventDefault();
            e.stopPropagation();
            if($(this).hasClass('open')) {
                MotionUI.animateOut($('.submenu'), 'fast slide-out-left', function() {
                    $('#navi > a').removeClass('open');
                });
            } else {
                $('.submenu').css('display', 'none');
                $(this).addClass('open');
                MotionUI.animateIn($(this).next(), 'fast slide-in-left');
                
                $('.content').on('click', function() {
                    $('.submenu').css('display', 'none');
                    $('#navi > a').removeClass('open');
                });
            }
        }    
    });          
});


$(window).load(function() {
/*
	if(Foundation.utils.is_medium_up()) {
        $('.imageBlock').each(function(){
            var ani = 'ease-in normal slide-and-fade-and-spin';
            $(this).find('.spinner').remove();
            $(this).find('li').viewportChecker({
                classToAdd: 'visible',
                classToAddForFullView: 'full-visible',
                classToRemove: 'hidden',
                callbackFunction: function(elem, action){
                    
                    var rest = 0;
                    
                    if(Foundation.utils.is_small_only()) {
                        rest = elem.index() % 2;
                    }
        
                    if(Foundation.utils.is_medium_only()) {
                        rest = elem.index() % 3;
                    }
        
                    if(Foundation.utils.is_large_up()) {
                        rest = elem.index() % 4;
                    }
    
                    if(rest === 0) {
                        elem.addClass('duration-200ms ' + ani);                        
                    } else if(rest === 1){
                        elem.addClass('duration-300ms ' + ani);
                    } else if(rest === 2){
                        elem.addClass('duration-400ms ' + ani);
                    } else if(rest === 3){
                        elem.addClass('duration-500ms ' + ani);
                    }
                }
            });
        });
	} else {
        $('.imageBlock').each(function(){
            $(this).find('.spinner').remove();
        });
	}
*/
});

$(document).ready(function() {
/*
    if(Foundation.utils.is_medium_up()) {
        $('.imageBlock').each(function() {
            $('.imageBlock li').addClass('hidden');
            $(this).prepend('<div class="spinner ani"><i class="icon fi-aus"></i></div>');
        });
    }
*/
    makeFotorama();
});