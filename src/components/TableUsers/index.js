import React, { Component } from 'react';
import Users from './RowDB';

class TableDB extends Component {
    mappingUsers = () => this.props.DBusers.map((value, key) => (
        <Users
            key={key}
            id={key + 1}
            idUser={value.id}
            name={value.name}
            phone={value.phone}
            permission={value.permission}
            editUser={() => this.props.editUser(value)}
            changeEditUserSatus={() => this.props.changeEditUserSatus()}
            removeUser={this.props.removeUser}
        />
    ));
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Permission</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingUsers()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableDB;