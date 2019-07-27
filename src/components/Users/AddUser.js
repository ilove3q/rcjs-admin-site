import React, { Component } from 'react';



class AddorEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: "1"
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });


    };
    checkPhoneNumber = (phone) => (phone.match(/^\d{10}$/))
    checkFullInfo = () => {
        if (this.state.name && this.checkPhoneNumber(this.state.phone))
            return this.props.add(this.state);
    }

    render() {
        return (
            <div className="col">
                <form>
                    <div className="card border-success mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                        <div className="card-header text-center">ADD USER</div>
                        <div className="card-body text-success">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Name" onChange={this.isChange} />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="phone" id="phone" aria-describedby="helpId" placeholder="Phone" onChange={this.isChange} />
                            </div>
                            <div className="form-group">
                                <label>Permission</label>
                                <select className="form-control" name="permission" id="permission" onChange={this.isChange} value={this.state.permission}>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderation</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="btn btn-group btn-block">
                                <button type="button" className="btn btn-primary" onClick={this.checkFullInfo}>Add</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default AddorEditUser;