$("document").ready(function(){$(".burger").click(function(e){e.preventDefault(),$(".mobile-mnu").fadeToggle()}),$(".slider-head").slick({dots:!0,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,nextArrow:'<div class="button-right slider__nav_head "></div>',prevArrow:'<div class="button-left slider__nav_head"></div>'}),$(".slider-new").slick({slidesToShow:3,dots:!1,slidesToScroll:1,infinite:!1,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".form__input").hover(function(){$(this).parent().addClass("hover")},function(){$(this).parent().removeClass("hover")}),$(".form__input").focus(function(e){$(this).parent().addClass("focus")}),$(".form__input").focusout(function(e){$(this).parent().removeClass("focus")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsInJlYWR5IiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmFkZVRvZ2dsZSIsInNsaWNrIiwiZG90cyIsImFkYXB0aXZlSGVpZ2h0IiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwibmV4dEFycm93IiwicHJldkFycm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJob3ZlciIsInRoaXMiLCJwYXJlbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZm9jdXMiLCJmb2N1c291dCJdLCJtYXBwaW5ncyI6IkFBSUFBLEVBQUUsWUFBWUMsTUFBTSxXQUVsQkQsRUFBRSxXQUFXRSxNQUFNLFNBQVNDLEdBRTFCQSxFQUFNQyxpQkFDTkosRUFBRSxlQUFlSyxlQUduQkwsRUFBRSxnQkFBZ0JNLE9BQ2hCQyxNQUFNLEVBQ05DLGdCQUFnQixFQUNoQkMsVUFBVSxFQUNWQyxjQUFlLElBQ2ZDLFVBQVcscURBQ1hDLFVBQVcscURBR2JaLEVBQUUsZUFBZU0sT0FDZk8sYUFBYyxFQUNkTixNQUFNLEVBQ05PLGVBQWdCLEVBQ2hCQyxVQUFVLEVBQ1ZDLGFBRUlDLFdBQVksSUFDWkMsVUFDRUwsYUFBYyxLQUloQkksV0FBWSxJQUNaQyxVQUNFTCxhQUFjLE9BUXRCYixFQUFFLGdCQUFnQm1CLE1BQU0sV0FDdEJuQixFQUFFb0IsTUFBTUMsU0FBU0MsU0FBUyxVQUV6QixXQUNEdEIsRUFBRW9CLE1BQU1DLFNBQVNFLFlBQVksV0FHL0J2QixFQUFFLGdCQUFnQndCLE1BQU0sU0FBU3JCLEdBQy9CSCxFQUFFb0IsTUFBTUMsU0FBU0MsU0FBUyxXQUU1QnRCLEVBQUUsZ0JBQWdCeUIsU0FBUyxTQUFTdEIsR0FDbENILEVBQUVvQixNQUFNQyxTQUFTRSxZQUFZIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSDQodGC0LXQv9Cw0L0gb24gMjguMDguMjAxNy5cclxuICovXHJcblxyXG4kKCdkb2N1bWVudCcpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIC8v0JzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOXHJcbiAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1vYmlsZS1tbnUnKS5mYWRlVG9nZ2xlKCk7XHJcbiAgfSk7XHJcbiAgLy/QodC70LDQudC00LXRgCDQsdC+0LvRjNGI0L7QuVxyXG4gICQoJy5zbGlkZXItaGVhZCcpLnNsaWNrKHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJidXR0b24tcmlnaHQgc2xpZGVyX19uYXZfaGVhZCBcIj48L2Rpdj4nLFxyXG4gICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImJ1dHRvbi1sZWZ0IHNsaWRlcl9fbmF2X2hlYWRcIj48L2Rpdj4nXHJcbiAgfSk7XHJcbiAgLy/QodC70LDQudC00LXRgCDQv9C+0YHQu9C10LTQvdC40YUg0YLQvtCy0LDRgNC+0LJcclxuICAkKCcuc2xpZGVyLW5ldycpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgJCgnLmZvcm1fX2lucHV0JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdob3ZlcicpO1xyXG4gICAgLyogU3R1ZmYgdG8gZG8gd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBlbGVtZW50ICovXHJcbiAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xyXG4gICAgLyogU3R1ZmYgdG8gZG8gd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBlbGVtZW50ICovXHJcbiAgfSk7XHJcbiAgJCgnLmZvcm1fX2lucHV0JykuZm9jdXMoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgfSk7XHJcbiAgJCgnLmZvcm1fX2lucHV0JykuZm9jdXNvdXQoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcbiJdfQ==