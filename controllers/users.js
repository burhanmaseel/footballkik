'use strict';

module.exports = function() {


    return {
        SetRouting: function(router){
            router.get('/', this.indexPage);
        },

        indexPage : function (req, res){
            return res.render('index', { test : 'This is a test'});
        }
    }
}