'use strict';

module.exports = function() {


    return {
        SetRouting: function(router){
            router.get('/', this.indexPage);
            router.get('/signup', this.getSignup);
        },

        indexPage : function (req, res){
<<<<<<< HEAD
            return res.render('index');
        },

=======
            return res.render('index', { test : 'This is a test'});
        },
>>>>>>> 34a59a0f4f205246e7f91d3aa5c21b4805b82b2d
        getSignup : function (req, res){
            return res.render('signup');
        }
    }
}