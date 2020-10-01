
$(document).ready(function () {

    var overlay = $("<div class='overlay'></div>");
    $("body").prepend(overlay);

    //js menu by javascript
    $('.bars').click(function () {
        $('.overlay').toggleClass('show');
        $('.navigation').toggleClass('show');
    });

    overlay.click(function () {
        $(".bars").trigger('click');
        $(this).removeClass('show');
    });


    $('#fullpage').fullpage({
        normalScrollElements: '#unscroll,.scroll-mb',anchors: ['firstPage1', 'page2', 'page3', 'page4', 'page5', 'page6'],

    });





    //effect button
    $(function($) {

        $(document).on("mousedown", "[data-ripple]", function(e) {

            var $self = $(this);

            if($self.is(".btn-disabled")) {
                return;
            }
            if($self.closest("[data-ripple]")) {
                e.stopPropagation();
            }

            var initPos = $self.css("position"),
                offs = $self.offset(),
                x = e.pageX - offs.left,
                y = e.pageY - offs.top,
                dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
                $ripple = $('<div/>', {class:"ripple", appendTo:$self});

            if(!initPos || initPos==="static") {
                $self.css({position:"relative"});
            }

            $('<div/>', {
                class : "rippleWave",
                css : {
                    background: $self.data("ripple"),
                    width: dia,
                    height: dia,
                    left: x - (dia/2),
                    top: y - (dia/2),
                },
                appendTo : $ripple,
                one : {
                    animationend : function(){
                        $ripple.remove();
                    }
                }
            });
        });

    });
});

$(document).on('click', '.btn-scroll-top', function(){
    fullpage_api.moveTo('page1', 1);
});


