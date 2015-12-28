/**
 * Created by Liibert on 28.12.2015.
 */
Template.header.helpers({
    title: function get_date(routename) {
        var date = moment(FlowRouter.getParam("year")+"-"+FlowRouter.getParam("month")+"-"+FlowRouter.getParam("day"));
        var today = moment();
        //if it is the calendar page
        if (routename == 'calendar')
            return 'CALENDAR';
        //if it is any other page
        else if (routename == 'events') {
            //if -> tomorrow || today || yesterday
            //else -> date
            switch(date.diff(today, "days")) {
                case 1:
                    return "TOMORROW";
                break;
                case 0:
                    return "TODAY";
                break;
                case -1:
                    return "YESTERDAY";
                break;
                default:
                    return date.format("MMMM Do YYYY");
            }
        }
    }
});

Template.header.events({
    'click #menu-toggle': (e) => {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }
});
