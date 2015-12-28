/**
 * Created by Liibert on 29.12.2015.
 */
Template.events.events({
    'click .trigger': (e) => {
        var middle = $('.middle');
        if(middle.css('height') == '0px') {
            middle.css({'height': '150'});
        }
        else {
            middle.css({'height':'0'});
        }
        e.preventDefault();
    }
});