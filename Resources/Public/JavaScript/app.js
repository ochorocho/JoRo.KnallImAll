function makeFotorama() {
    $(".imageBlock .lightbox").click(function(a) {
        a.preventDefault();
        var b = '<div style="display:none" class="fotorama" data-arrows="false" data-fit="cover" data-auto="false" data-width="100%" data-minwidth="100%" data-maxwidth="100%" data-minheight="100%" data-maxheight="100%" data-keyboard="true" data-nav="thumbs" data-startindex="' + $(this).attr("data-index") + '">';
        $($(this).closest("ul").find(".lightbox")).each(function() {
            var a = $(this).attr("data-fotorama").split(","), c = "";
            c = "false" === a[2] || "false" === a[3] ? "" : '<a class="mapFotorama" data-location="' + a[2] + "," + a[3] + '"><i class="icon fi-marker"></i></a>', 
            b += '<div data-thumb-width="100" data-thumb-height="100" data-thumb="' + a[1] + '" data-img="' + a[0] + '"><div class="iconBar">' + c + '<a class="fotoramaFull"><i class="icon fi-arrows-out"></i></a><a class="right close-fotorama" aria-label="Close">&#215;</a></div></div>';
        }), $("body").append(b), MotionUI.animateIn($(".fotorama"), "slow fade-in"), $(".fotorama").fotorama(), 
        $(".fotorama").on("fotorama:showend ", function(a, b, c) {
            $(".fotorama .close-fotorama").on("click", function(a) {
                var c = $(".fotorama");
                MotionUI.animateOut(c, "slow fade-out", function() {
                    b.destroy(), $(".fotorama").remove();
                });
            });
        });
        var c = ".fotoramaFull", d = $(".fotorama");
        d.on("click", c, function(a) {
            $(document).fullScreen() ? ($(this).find("i").removeClass("fi-arrows-in").addClass("fi-arrows-out"), 
            d.fullScreen(!1)) : ($(this).find("i").removeClass("fi-arrows-out").addClass("fi-arrows-in"), 
            d.fullScreen(!0));
        }), $(document).on("fullscreenchange", function() {
            $(document).fullScreen() || d.find("i").removeClass("fi-arrows-in").addClass("fi-arrows-out");
        });
        var e = ".mapFotorama";
        $(".fotorama").on("click", e, function(a) {
            var b = $(this).parent().parent().find(".location");
            if (b.length) console.log(b), MotionUI.animateOut(b, "fast bounce-in-out slide-out-left", function() {
                b.remove();
            }); else {
                $(this).parent().append('<div class="location" style="display:none"></div>');
                var c = $(this).attr("data-location").split(","), d = [ c[0], c[1] ];
                MotionUI.animateIn($(this).parent().parent().find(".location"), "fast bounce-in slide-in-left", function() {
                    $(this).parent().parent().find(".location").gmap3({
                        marker: {
                            latLng: d
                        },
                        map: {
                            options: {
                                zoom: 2,
                                draggable: !1
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
        content_class: "content",
        active_class: "active",
        multi_expand: !1,
        toggleable: !0
    }
}), $(function() {
    $("#hideContent").click(function(a) {
        a.preventDefault();
        var b = $(".content"), c = $("#navi");
        "none" === $(b).css("display") ? (MotionUI.animateIn(b, "fast fade-in"), MotionUI.animateIn(c, "fast fade-in"), 
        c.addClass("hide-for-small")) : (MotionUI.animateOut(b, "fast fade-out"), MotionUI.animateOut(c, "fast fade-out"), 
        c.removeClass("hide-for-small"));
    }), $("#navi > a").click(function(a) {
        $(this).hasClass("hasSub") && (a.preventDefault(), a.stopPropagation(), $(this).hasClass("open") ? MotionUI.animateOut($(".submenu"), "fast slide-out-left", function() {
            $("#navi > a").removeClass("open");
        }) : ($(".submenu").css("display", "none"), $(this).addClass("open"), MotionUI.animateIn($(this).next(), "fast slide-in-left"), 
        $(".content").on("click", function() {
            $(".submenu").css("display", "none"), $("#navi > a").removeClass("open");
        })));
    });
}), $(window).load(function() {}), $(document).ready(function() {
    makeFotorama();
});