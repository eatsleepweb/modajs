/*
*
* Author: Elif Bayrasli
* Website: http://www.elifbayrasi.com
* Date: 04/04/2014
* Repo: http://github.com/eatsleepweb/modajs
* Issues: http://github.com/eatsleepweb/modajs/issues
*
*/

(function($){

    $.fn.moda = function(options){

        console.log(this[0].href);

        var settings = $.extend({

            overlay: true,
            responsive: true

        }, options);

        var wrapper = function(){

            $('body').append('<div id="moda"></div>');

        };

        this.click(function(e){
            e.preventDefault();
            wrapper();
        });

        //return wrapper;

    };

}(jQuery));