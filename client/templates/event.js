/**
 * Created by Liibert on 28.12.2015.
 */
Template.event.events({
   'click .check': (e) => {
       Meteor.call("check_task", !this.done)
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