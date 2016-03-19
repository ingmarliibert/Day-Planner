/**
 * Created by Liibert on 27.12.2015.
 */
var Event = new SimpleSchema({
   title: {
       //Title
       type: String
   },
   steps: {
       //{
       // name: String
       // done: Boolean
       // id: Number
       //}
       type: [Object]
   },
   day: {
       //Date object
       type: Object
   },
   start: {
       //Date object
       type: Object
   },
   end: {
       //Date object
       type: Object
   },
   owner: {
       //Meteor.userId()
       type: String
   }
});


Events = new Mongo.Collection('events');

var idify = (steps) => {
    var count = 0;
    steps.forEach(step => {
        count++;
        step.id = count;
    });
    return steps;
};

Meteor.methods({
   add_event: (object) => {
       if (!Meteor.userId()) {
           throw new Meteor.Error("not-authorized");
       }
       object.createdAt = new Date();
       object.owner = Meteor.userId();
       Events.insert(object, (error, result) => {
           if(error)
            throw new Error(error);
       });
   },
   delete_event: (id) => {
       Events.remove(id)
   },
   change_event: (id, title) => {
       Events.update(id, {$set: {title: title}})
   },
   add_steps: (id, array) => {
       Events.update(id, {$set: {steps: idify(Events.find({_id:id}).fetch().steps+array)}})
   },
   toggle_step: ({id:id, step_id:step_id}) => {
       var steps = [];

       //Makes new steps array
       Events.find({_id:id}).fetch()[0].steps.forEach(step => {
           if(step.id == step_id) {
               step.done = !step.done;
           }
           steps.push(step)
       });

       Events.update(id, {$set: {steps: steps}})
   }
});

