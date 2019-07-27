import React, { Component } from 'react';

class Search extends Component {

    
    inputSearch = (event) =>{
        this.props.getValueSearch(event.target.value);        
    };

    isShowButton = () => {
        if (this.props.condAdd)
            return <div className="btn btn-block btn-outline-secondary" onClick={this.props.isChangeCondAdd}>Close</div>;
        else
            return <div className="btn btn-block btn-outline-info" onClick={this.props.isChangeCondAdd}>Add</div>;
    };


    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group btn-block">
                        <input type="text" className="form-control" name="search" id="search" aria-describedby="helpId" placeholder="Search name" onChange={this.inputSearch} />
                    </div>
                    {this.isShowButton()}
                </div>
            </div>
        );
    }
}

export default Search;