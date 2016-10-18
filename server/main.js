import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees'
import {image, helpers} from 'faker';

Meteor.startup(function() {

    const numberOfRecords = Employees.find({}).count();
    console.log("Number of records: " + numberOfRecords);

    if (!numberOfRecords) {
        _.times(200, () => {
            const {name, email, phone} = helpers.createCard();
            Employees.insert({name, email, phone, avatar: image.avatar()});
        });
    }

    Meteor.publish("employees", function(per_page) {
        return Employees.find({}, {limit: per_page});
    });
});
