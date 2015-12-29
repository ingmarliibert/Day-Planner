/**
 * Created by Liibert on 29.12.2015.
 */
Template.sidebar.helpers({
    not_equal: (one, two) => {
        return one != two
    }
});

Template.sidebar.events({
    'click a': (e) => {
        if($(window).width() <= 768)
            $("#wrapper").toggleClass("toggled");
    }
});
