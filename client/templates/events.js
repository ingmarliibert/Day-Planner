/**
 * Created by Liibert on 29.12.2015.
 */
var date_init = (hours, minutes, seconds, moment_obj) => {
    moment_obj.hour(hours);
    moment_obj.minute(minutes);
    moment_obj.seconds(seconds);
};

var add_to_str_px = (string, nr) => {
    if(typeof nr == "string") {
        nr = Number(nr.slice(0, nr.length-1))
    }
    return Number(string.slice(0, string.length-2))+nr+'px'
};

Template.events.helpers({
    events: () => {
        var date = moment(FlowRouter.getParam('year')+"-"+FlowRouter.getParam('month')+"-"+FlowRouter.getParam('day'));
        date_init(0, 0, 0, date);
        var events = Events.find({},{$sort: {start: 1}}) || {};
        return events
    }
});

Template.events.events({
    'click .trigger': (e) => {
        var middle = $('.middle');
        if(middle.css('height') == '0px') {
            middle.css('display', 'block');
            var height = add_to_str_px(Session.get('form-height'), 15);
            middle.animate({'height': height});
        }
        else {
            middle.animate({'height':'0'}, {complete: () => {middle.css('display','none')}});
        }
        e.preventDefault();
    },
    'click .btn-more-steps': (e) => {
        e.preventDefault();
        var button = $(e.target).parent();
        var last_ed = button.siblings(".event-div");
        var last_ed = $(last_ed[last_ed.length-1]);
        var height = add_to_str_px(Session.get('form-height'), last_ed.height());
        Session.set('form-height', height);
        $(".middle").css({height: add_to_str_px(height, 15)});
        var new_ed = last_ed.clone();
        new_ed.find('input').val("");
        last_ed.after(new_ed)
    },
    'click .btn-add-new': (e) => {
        e.preventDefault();
        var event = {};
        var date_str = FlowRouter.getParam('year')+'-'+FlowRouter.getParam('month')+'-'+FlowRouter.getParam('day');
        var date = moment(date_str);
        var start = date.clone();
        var end = date.clone();
        var st,ed;
        var form = $(".add-new-form");

        st = form.find('#start').val().split(new RegExp('[:,.,\,]'));
        ed = form.find('#end').val().split(new RegExp('[:,.,\,]'));

        date_init(st[0], st[1], '00', start);
        date_init(ed[0], st[1], '00', end);
        date_init('00', '00', '00', date);

        event.day = date.toDate();
        event.start = start.toDate();
        event.end = end.toDate();
        event.title = form.find(".title-input").val();
        event.steps = [];
        form.find(".event-div").slice(1).each((index,div) => {
            var input = $(div).find('input');
            if(input.val() != "") {
                var step = {name: input.val(), done: false, id: index};
                event.steps.push(step)
            }
        });
        Meteor.call("add_event", event)
    }
});

Template.events.onCreated(function() {
    var self = this;
    self.autorun(() => {
        var date = moment(FlowRouter.getParam('year')+"-"+FlowRouter.getParam('month')+"-"+FlowRouter.getParam('day'));
        date_init(0, 0, 0, date);
        self.subscribe('events', date.toDate());
    })
});

Template.events.onRendered(() => {
    var middle = $('.middle');
    //For right collapsible form height
    Session.set('form-height', $(".add-new-form").css('height'));
    middle.css('height', '0');
    middle.css('display', 'none')
});