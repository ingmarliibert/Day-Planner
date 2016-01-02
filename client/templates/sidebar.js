/**
 * Created by Liibert on 29.12.2015.
 */
Template.sidebar.helpers({
    not_equal: (one, two) => {
        return one != two
    },
    username: () => {
        //@todo: fix this
        return Meteor.user().username
    }
});

Template.sidebar.events({
    'click a': (e) => {
        if($(window).width() <= 768)
            $("#wrapper").toggleClass("toggled");
    }
});
