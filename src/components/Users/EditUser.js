import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.userEditObj
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };
    checkPhoneNumber = (phone) => (phone.match(/^\d{10}$/))
    checkFullInfo = () => {
        if (this.state.name && this.checkPhoneNumber(this.state.phone)) {
                this.props.changeEditUserSatus();
                return this.props.editInfo(this.state)
            }
        }

    render() {
        return (
            <div className="col">
            <form>
                <div className="card text-white bg-warning mb-3 mt-2">
                    <div className="card-header text-center">EDIT</div>
                    <div className="card-body text-success">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" id="name" defaultValue={this.state.name} onChange={this.isChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" name="phone" id="phone" defaultValue={this.state.phone} onChange={this.isChange} />
                        </div>
                        <div className="form-group">
                            <label>Permission</label>
                            <select className="form-control" name="permission" id="permission" defaultValue={this.state.permission} onChange={this.isChange}>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderation</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="btn btn-group btn-block">
                            <button type="button" className="btn btn-primary" onClick={this.checkFullInfo}>Save</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default EditUser;