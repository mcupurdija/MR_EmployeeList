import {
    Mongo
} from 'meteor/mongo';

export const Employees = new Mongo.Collection("employees");
Employees.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});
