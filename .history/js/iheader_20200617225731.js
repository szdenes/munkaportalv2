(function() {
    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    var header = document.getElementById('site-header');
    var pageYOffset = 0;
    header.classList.add('transpp');

    var checkScroll = function() {


        curScroll = w.scrollY || doc.scrollTop || pageYOffset;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        } else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }
        if (window.pageYOffset <= 5) {
            header.classList.add('transpp');
            // prevDirection = direction;
        } else if (window.pageYOffset >= 30) {
            header.classList.remove('transpp');
            // prevDirection = direction;
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 100) {
            //replace 52 with the height of your header in px

            header.classList.add('hide');
            prevDirection = direction;
        } else if (direction === 1) {
            header.classList.remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);
})();

