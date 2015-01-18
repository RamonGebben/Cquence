
var Cq;

Cq = function(){
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function( f ){ setTimeout( f, 1000/60 ); };
    var elem = function( id ){ return document.getElementById( id ); };

    // IE checking
    var IEVERSION = getInternetExplorerVersion();
    var IE8 = IEVERSION === 8;
    var IEWTF = IEVERSION < 8 && IEVERSION > -1;

    var style = function( e, k, v ){
        if( k === 'opacity' ){
          if( IE8 ){ // gemene browsers
            e.style[ "-ms-filter" ] = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.floor( v * 100 ) + ")";
            e.style.filter = "alpha(opacity=" + Math.floor( v * 100 ) + ")";

          } else { // lieve browsers
            e.style[k] = v;
          }
        } else {
          e.style[k] = v + "px";
        }
    };

    var combine = function(){
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments
        var list = Array.prototype.slice.call( arguments, 0 );
        var d = 0;
        for( var i=0; i<list.length; i++ ){
            d = Math.max( list[i].d, d );
        }
        return {
            d: d,
            f: function( t ){
                for( var i=0; i<list.length; i++ ){
                    var last = list[i];
                    if( last.d > t ){
                        last.f( t );
                    } else {
                      if( !last.done ){
                          last.f( last.d );
                          last.done = true;
                      }
                    }

                }
            }
        };
    };

    var sequence = function(){
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments
        var timeline = Array.prototype.slice.call( arguments, 0 );
        var d = 0;
        for( var i=0; i<timeline.length; i++ ){
            d = d + timeline[i].d;
        }
        return {
            d: d,
            f: function( t ){

                var last = null;
                var total = 0;

                for( var i=0; i<timeline.length; i++ ){
                    last = timeline[i];
                    if( total + last.d > t ){
                        last.f( t - total );
                        return;
                    }
                    if( !last.done ){
                        last.f( last.d );
                        last.done = true;
                    }
                    total = total + last.d;
                }
            }
        };
    };

    var animate = function( transform ){
        return function( id, dur, begin, fin ){
            return {
                d: dur,
                f: function( t ){
                    var e = elem( id );
                    for( var k in begin ){

                        var bv = begin[k]; // begin waarde
                        var fv = fin[k];   // finish waarde
                        var dx = fv - bv;  // verschil (afstand)

                        // p is nu een waarde tussen de 0 en 1 .. en geeft aan hoe ver de animatie is
                        var p = transform( Math.max( t/dur, 0 ) );

                        // nieuwe waarde is de factor maal de afstand
                        var nv = bv + (p * dx);
                        style( e, k, nv );
                    }
                }
            };
        };
    };

    // animation variants
    // http://upshots.org/actionscript/jsas-understanding-easing
    var linear = animate( function( p ){
        return p;
    });
    var easeIn = animate( function( p ){
        return Math.pow( p, 5 );
    });
    var easeOut = animate( function( p ){
        return 1 - Math.pow( 1 - p, 5 );
    });
    var sleep = function( d ){
        return { d: d, f: function(t){} };
    };

    /* from: http://stackoverflow.com/questions/10964966/detect-ie-version-in-javascript */
    function getInternetExplorerVersion()
    // Returns the version of Internet Explorer or a -1
    // (indicating the use of another browser).
    {
        var rv = -1; // Return value assumes failure.
        if (navigator.appName == 'Microsoft Internet Explorer')
        {
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) !== null)
                rv = parseFloat( RegExp.$1 );
        }
        return rv;
    }

    var timeline = [];
    var start = (+new Date()); // unix timestamp
    var second = 1000;
    var stop = 15 * second;
    var render = null;

    // gets called recursive by request-animation-frame
    var renderloop = function(){
        // console.log('1. ', window.render );
        var now = (+new Date()) - start;      // relatieve tijd vanaf begin animatie
        if( now < stop ) raf( renderloop ); // recursion, baby
        // console.log('2. ', window.render );
        if( window.render ) window.render.f( now );

    };

    return {
        combine: combine,
        sequence: sequence,
        linear: linear,
        animate: animate,
        easeIn: easeIn,
        easeOut: easeOut,
        sleep: sleep,
        renderloop: renderloop
    };

}();
