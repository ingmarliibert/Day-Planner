/**
 * Created by Liibert on 27.12.2015.
 */
Template.hello.events({
    'input input': (e) => {
        var value = $(e.target).val();
        Session.set("name", value)
    }
});

Template.hello.helpers({
   name: () => {
       return (Session.get("name"))
   }
});