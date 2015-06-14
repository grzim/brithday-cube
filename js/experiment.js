var greeting = 'Best wishes from friends to Tom!';
var people = [
    {
        name: 'Jola',
        caption: 'happy birthday my friend!',
        picture: 'http://www.maybelline.com/~/media/Images/MNY/Global/Home/Products/Brushes-and-Accessories/Brushes/Expert-Tools-Face-Brush/expert-tools_face-brush_model-shot_143308.jpg'
    },
    {
        name: 'Ala',
        caption: 'Best wishes for my sweetie',
        picture: 'http://www.maybelline.com/~/media/Images/MNY/en_US/Home/Product-Categories/Face/face_cate.jpg'
    },
    {
        name: 'Erica',
        caption: ':** dear!',
        picture: 'http://cdn.sheknows.com/articles/2011/02/elizabeth-hurley-diamond-face.jpg'
    },
    {
        name: 'Ellena',
        caption: 'Best wishes from the bottom of my heart',
        picture: 'http://www.goldennumber.net/wp-content/uploads/2013/08/florence-colgate-england-most-beautiful-face.jpg'
    },
    {
        name: 'Ariel',
        caption: ':))) Happy birthday buddy',
        picture: 'http://i1.mirror.co.uk/incoming/article5423744.ece/ALTERNATES/s615/MOST-BEAUTIFUL-FACES.jpg'
    },
    {
        name: 'Meteora',
        caption: 'Hello and kisses!',
        picture: 'http://img2.timeinc.net/health/images/healthy-living/face-liner-yellow-400x400.jpg'

    },
    {
        name: 'Milla',
        caption: 'Lot of love',
        picture: 'http://www.arizonafoothillsmagazine.com/images/stories/april09/face-recognition.jpg'
    },
    {
        name: 'Harina',
        caption: 'Hihihi Kissess',
        picture: 'http://www.goldenmeancalipers.com/wp-content/uploads/2011/12/mirror11.jpg'
    },
    {
        name: 'Teodora',
        caption: 'I love grupluv',
        picture: 'http://images.idiva.com/media/photogallery/2012/Jul/what_your_face_reveals_abou1.jpg'
    }
]


var cube = function() {
    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        prop,
        el = document.createElement('div');

    for (var i = 0, l = props.length; i < l; i++) {
        if (typeof el.style[props[i]] !== "undefined") {
            prop = props[i];
            break;
        }
    }
    var cube = $('#cube .face');
    var previousKey = undefined;
    var xAngle = 0, yAngle = 0;
    var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;

    $('body').keydown(function (evt) {
        changeFace(evt.keyCode, null, evt.animation);
        if (evt.keyCode === LEFT) {
            yAngle -= 90;
        }
        else if (evt.keyCode === RIGHT) {
            yAngle += 90;
        }
        else if (evt.keyCode === UP) {
            xAngle += 90;
            evt.preventDefault();
        }
        else if (evt.keyCode === DOWN) {
            xAngle -= 90;
            evt.preventDefault();
        }
        previousKey = evt.keyCode;
        document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    });

    var swipeStep = 90;
    $("body").swipe({
        swipeUp: function (event, direction, distance, duration) {
            //changeFace(UP, false);changeFace(UP, false);
            changeFace(UP);
            xAngle += swipeStep;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
        },
        swipeDown: function (event, direction, distance, duration) {
            // changeFace(DOWN, false);changeFace(DOWN, false);
            changeFace(DOWN);
            xAngle -= swipeStep;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
        },
        swipeLeft: function (event, direction, distance, duration) {
            //changeFace(LEFT, false);changeFace(LEFT, false);
            changeFace(LEFT);
            console.log('swiped')
            yAngle -= swipeStep;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
        },
        swipeRight: function (event, direction, distance, duration) {
            // changeFace(RIGHT, false);changeFace(RIGHT, false);
            changeFace(RIGHT);
            console.log('swiped')
            yAngle += swipeStep;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
        },
        click: function (event, target) {
        },
        threshold: 100,
        allowPageScroll: "none"
    });

    var startingValue = 2;
    var currentValue = startingValue;
    var i = 1;
    var upsideDown = false;
    var positionTop = false;
    var positionBottom = false;
    for (var f = 1; f < 5; f++) {
        $(cube[f]).css('background-image', 'url(' + people[f].picture + ')');
        $(cube[f]).find('.text').text(people[f].caption + " ~" + people[f].name);
    }
    $(cube[5]).append('           <div class="text">\
Happy Birthday Buddy!\
</div>');
    var getOpposite = function (v) {
        switch (v) {
            case 1:
                return 6;
            case 2:
                return 4;
            case 3:
                return 5;
            case 4:
                return 2;
            case 5:
                return 3;
            case 6:
                return 1;
        }
    };
    idleTimer = (function () {
        var interval, intervalAnimation;
        return {
            time: 0,
            animation: false,
            tick: function () {
                interval = setInterval(function () {
                    idleTimer.time++;
                    // console.log(idleTimer.time)
                    if (idleTimer.time === 3) {
                        clearInterval(interval);
                        idleTimer.clear();
                        idleTimer.animate();
                    }
                }, 1000);
            },
            animate: function () {
                var max = 50;
                var l = $.Event('keydown');
                var u = $.Event('keydown');
                var time = 3999;
                $("#cube").css("transition-duration", time + "ms");
                intervalAnimation = setInterval(function () {
                    l.keyCode = LEFT;
                    l.animation = true;
                    $('body').trigger(l);
                    l.keyCode = LEFT;
                    l.animation = true;
                    $('body').trigger(l);
                    u.keyCode = UP;
                    u.animation = true;
                    $('body').trigger(u);
                    console.log(max)
                    max--;
                    if (max === 0) {
                        console.log('RESTART')
                        idleTimer.restart();
                    }

                }, 4000);


            },
            clear: function () {
                clearInterval(interval);
                clearInterval(intervalAnimation);
                idleTimer.time = 0;
            },
            restart: function () {
                idleTimer.clear();
                idleTimer.tick();
                $("#cube").css("transition-duration", 1000 + "ms");
            }
        }
    })();
    idleTimer.tick();
    function changeFace(nextMove, bool, animation) {
        if (animation !== true) idleTimer.restart();


        if ((nextMove === LEFT || nextMove === RIGHT) && !(positionTop || positionBottom)) {
            // console.log('next move', nextMove)
            if (nextMove === LEFT) {
                currentValue++;
                if (currentValue === 6) {
                    currentValue = 2;
                }
            }
            else if (nextMove === RIGHT) {
                currentValue--;
                if (currentValue === 1) {
                    currentValue = 5;
                }
            }

            var side = currentValue - 1;

            side = side === 0 ? 4 : side;

            i++;
            i = i === people.length ? 0 : i;
            if (bool !== false) {

                //$(cube[side]).css('background-image', 'none').css('background-color', 'white');
                $(cube[side]).find('.background').css('display', 'block').fadeOut('fast', function () {
                    $(cube[side]).find('.text').text(people[i].caption + " ~" + people[i].name);
                });
                $(cube[side]).css('background-image', 'url(' + people[i].picture + ')');
                $(cube[side]).find('.text').text('');
            }
        }
        else if ((nextMove === LEFT || nextMove === RIGHT) && (positionTop || positionBottom)) {
            upsideDown = !upsideDown;
            if (positionTop) {
                if (nextMove === LEFT) {
                    currentValue++;
                    if (currentValue === 6) {
                        currentValue = 2;
                    }
                }
                else if (nextMove === RIGHT) {
                    currentValue--;
                    if (currentValue === 1) {
                        currentValue = 5;
                    }
                }
                else if (nextMove === UP) {
                    //currentValue = getOpposite(currentValue);
                    positionTop = false;
                }
                else if (nextMove === DOWN) {
                    positionTop = false;
                }
            }
            if (positionBottom) {
                if (nextMove === LEFT) {
                    currentValue++;
                    if (currentValue === 6) {
                        currentValue = 2;
                    }
                }
                else if (nextMove === RIGHT) {
                    currentValue--;
                    if (currentValue === 1) {
                        currentValue = 5;
                    }
                }
                else if (nextMove === DOWN) {
                    //currentValue = getOpposite(currentValue);
                    positionBottom = !positionBottom;
                }
                else if (nextMove === UP) {
                    positionBottom = !positionBottom;
                }
            }


        }
        else if ((nextMove === UP || nextMove === DOWN) && !(positionTop || positionBottom)) {
            if (nextMove === DOWN) {
                positionTop = true;
                // console.log('down')
            }
            else if (nextMove === UP) {
                positionBottom = true;

                //  console.log('up')
            }
        }
        else if ((nextMove === UP || nextMove === DOWN) && (positionTop || positionBottom)) {
            if (positionTop) {
                if (nextMove === DOWN) {
                    //    console.log('przed', currentValue)
                    currentValue = getOpposite(currentValue);
                    //   console.log('po', currentValue)
                }
            }
            if (positionBottom) {
                if (nextMove === UP) {
                    //   console.log('przed', currentValue)
                    currentValue = getOpposite(currentValue);
                    //   console.log('po', currentValue)
                }
            }
            positionBottom = false;
            positionTop = false;
        }
        //  console.log(nextMove, currentValue)
        //  console.log('position top', positionTop, 'position bottom', positionBottom)
    }


    setTimeout(function () {
        var time = 2500;
        $("#cube").css("transition-duration", time + "ms");
        document.getElementById('cube').style[prop] = "rotateX(" + 360 + "deg) rotateY(" + 360 + "deg)";
        xAngle = 360, yAngle = 360;
        setTimeout(function () {
            $("#cube").css("transition-duration", "1s");
        }, time);
    }, 500);
};


cube();