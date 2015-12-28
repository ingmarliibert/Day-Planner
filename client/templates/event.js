/**
 * Created by Liibert on 28.12.2015.
 */
Template.event.events({
   'ready .event': (e) => {
       //Make checkbox visible
       $.material.checkbox()
   },
   'click .check': (e) => {
       Meteor.call("check_task", !this.done)
   }
});

Template.event.helpers({
   click: () => {
       //Simulate a click on the checkbox to check it, because weird checkbox
       $(".events").find("#"+this._id).find("span .check").click()
   },
   hours: (date) => {
       var temp = moment(date);
       return String(temp.hours())+":"+String(temp.minutes())
   }

});