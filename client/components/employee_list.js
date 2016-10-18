import React, {PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees'
import EmployeeDetail from './employee_detail';

const PER_PAGE = 3;

class EmployeeList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.page = 1;
    }

    handleButtonClick() {
        Meteor.subscribe("employees", PER_PAGE * (++this.page));
    }

    render() {
        return (
            <div>
                <div className="employee-list">
                    {this.props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee}/>)}
                </div>
                <button onClick={this.handleButtonClick.bind(this)} className="btn btn-primary">Load More...</button>
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe("employees", PER_PAGE);
    return {employees: Employees.find({}).fetch()}
}, EmployeeList);
