/**
 * Created by Liibert on 28.12.2015.
 */
FlowRouter.route('/', {
    triggersEnter: [(context, redirect) => {
        if(Meteor.userId())
            redirect('/calendar');
        else
            redirect('/login')
    }]
});

FlowRouter.route('/calendar', {
    action: (params, query) => {
        BlazeLayout.render('layout', {header: 'header', sidebar: 'sidebar', body: 'calendar'})
    },
    name: 'calendar'
});

FlowRouter.route('/login', {
    action: (params, query) => {
        BlazeLayout.render('login', {})
    },
    name: 'login'
});

FlowRouter.route('/events/:day/:month/:year', {
    action: (params, query) => {
        BlazeLayout.render('layout', {header: 'header', sidebar:'sidebar', body:'events'})
    },
    name: 'events'
});
