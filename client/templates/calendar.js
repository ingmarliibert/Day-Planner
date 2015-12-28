/**
 * Created by Liibert on 28.12.2015.
 */
Template.calendar.events({
   'click .day a ': (e) => {
       e.preventDefault();
       var element = $(e.target);
       var path = "/events/"+element.data('day')+"/"+element.data('month')+"/"+element.data("year");
       FlowRouter.go(path)
   }
});

Template.calendar.onRendered(() => {
    var today = moment();
    $(".responsive-calendar").responsiveCalendar(String(today.year())+"-"+String(today.month+1))
});