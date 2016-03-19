/**
 * Created by Liibert on 28.12.2015.
 */
Template.event.events({
   'click .check': function(e) {
       var id = iter($(e.target), $().parent, 5).data('id');
       var step_id = this.id;
       Meteor.call("toggle_step", {id:id, step_id:step_id});
   }
});

Template.event.helpers({
   hours: (date) => {
       var temp = moment(date);
       return String(temp.hours())+":"+String(temp.minutes())+"0";
   },
   not: (bool) => {
       return !bool;
   }
});

Template.event.onRendered(() => {
    //Initialize checkboxes
    $.material.checkbox()
});
