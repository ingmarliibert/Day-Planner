/**
 * Created by Liibert on 27.12.2015.
 */
Meteor.publish('events', function(date) {
    return Events.find({owner: this.userId, day: date})
});
