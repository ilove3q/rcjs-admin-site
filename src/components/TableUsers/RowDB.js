import React, { Component } from 'react';

class users extends Component {
    showPermission = (e) => {
        if (e === 1)
            return "Admin";
        else if (e === 2)
            return "Moderation";
        else return "Normal";
    };

    editUser = () => {
        this.props.editUser();
        this.props.changeEditUserSatus();
    };

    render() {
        return (

            <tr className="data">
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.showPermission(this.props.permission)}
                </td>
                <td className="btn btn-group">
                    <div className="btn btn-warning" onClick={() => this.editUser()}>
                        <i className="fa fa-edit">Edit</i>
                    </div>
                    <div className="btn btn-danger" onClick={() => this.props.removeUser(this.props.idUser)}>
                        <i className="fa fa-remove">Remove</i>
                    </div>
                </td>
            </tr>
        );
    }
}

export default users;