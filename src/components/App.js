import React, { Component } from 'react';
import Child from './index';
import DB from './data/data.json';

const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condAdd: false,
      condEdit: false,
      db: [],
      search: "",
      userEditObj: {}
    }
  }

  
  componentWillMount() {
    if (!localStorage.getItem("userData"))
      localStorage.setItem("userData", JSON.stringify(DB));
    this.setState({
      db: JSON.parse(localStorage.getItem("userData"))
    });
  }
  
  storage = () => localStorage.setItem("userData", JSON.stringify(this.state.db));

  isChangeCondAdd = () => {
    this.setState({ condAdd: !this.state.condAdd });
  };
  getValueSearch = (event) => {
    this.setState({ search: event });
  };

  getNewUser = (item) => {
    item.id = uuidv1();
    var items = this.state.db;
    items.push(item);
    this.setState({ 
      db: items
    }, ()=> this.storage());
  }

  editUser = (event) => {
    this.setState({ userEditObj: event });
    this.state.db.forEach((value, key) => {
      if (value.id === event.id) {
        value.name = event.name;
        value.phone = event.phone;
        value.permission = event.permission;
      }
    }, ()=> this.storage());
    
  };

  changeEditUserSatus = () => {
    this.setState({ condEdit: !this.state.condEdit });
  }

  removeUser = (id) => {
    this.setState({ 
      db: this.state.db.filter(key => key.id !== id) 
    }, ()=> this.storage());   
  }

  render() {
    
    var db = []
    
    this.state.db.forEach(item => {
      if (item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
        db.push(item)
    });


    return (
      <div>
        <div>
          <Child.Header />
          <div className="Form">

            <div className="container">
              <div className="row">
                <Child.Search
                  isChangeCondAdd={this.isChangeCondAdd}
                  condAdd={this.state.condAdd}
                  getValueSearch={this.getValueSearch}
                />
                <Child.TableDB
                  DBusers={db}
                  editUser={user => this.editUser(user)}
                  changeEditUserSatus={this.changeEditUserSatus}
                  removeUser={this.removeUser}
                />
                <Child.AddorEditUser
                  condAdd={this.state.condAdd}
                  add={this.getNewUser}
                  editUser={this.editUser}
                  condEdit={this.state.condEdit}
                  changeEditUserSatus={this.changeEditUserSatus}
                  userEditObj={this.state.userEditObj}
                />
              </div>
            </div>
          </div >
        </div >
      </div>
    );
  }
}

export default App;