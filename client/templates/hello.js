/**
 * Created by Liibert on 27.12.2015.
 */
Template.hello.events({
    'input input': function(e) {
        var value = $(e.target).val();
        Session.set("name", value)
    }
});

Template.hello.helpers({
   name: function() {
       return (Session.get("name"))
   }
});