/**
 * Created by Liibert on 29.12.2015.
 */
Template.events.events({
    'click .trigger': (e) => {
        var middle = $('.middle');
        if(middle.css('height') == '0px') {
            middle.css('display', 'block');
            middle.animate({'height': '200'});
        }
        else {
            middle.animate({'height':'0'}, {complete: () => {middle.css('display','none')}});
        }
        e.preventDefault();
    }
});

Template.events.onRendered(() => {
    var middle = $('.middle');
    middle.css('height', '0');
    middle.css('display', 'none')
});