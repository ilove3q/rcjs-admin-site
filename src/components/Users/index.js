import React, { Component } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';


class AddorEditUser extends Component {

    editInfo = (user) => {
        this.props.editUser(user)
    }

    checkShowForm = () => {
        if (this.props.condAdd)
            {
                return <AddUser add={this.props.add}/>
            }
        else if (this.props.condEdit)
            return <EditUser 
                        condEdit = {this.props.condEdit}
                        changeEditUserSatus = {() => this.props.changeEditUserSatus()}
                        userEditObj = {this.props.userEditObj} 
                        editInfo = {this.editInfo}
                    />
    };

    render() {
        return (
            <div>
                {this.checkShowForm()}
            </div>

        );
    }
}

export default AddorEditUser;