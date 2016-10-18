import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list'

const App = (props) => {
    return (
        <div>
            <EmployeeList/>
        </div>
    );
};

Meteor.startup(function() {
    ReactDOM.render(
        <App/>, document.querySelector('.container'));
});
